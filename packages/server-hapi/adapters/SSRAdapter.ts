import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import * as vite from 'vite';
import { ServerRoute } from '@hapi/hapi';
import { ISSRAdapter, ClientManifestEntry, RenderFunction, SSRAdapterOptions } from './ISSRAdapter';

export class SSRAdapter implements ISSRAdapter {
  private moduleName: string;
  private modulePath: string;
  private clientManifest?: object = {};
  private ssrManifest?: object = {};
  public render!: RenderFunction;
  private assetsPath: string;
  private isProd: boolean = true;

  constructor(options: SSRAdapterOptions) {
    this.isProd = options.isProd;
    this.moduleName = options.moduleName;
    this.modulePath = path.dirname(require.resolve(`${this.moduleName}/package.json`));
    this.assetsPath = options.assetsPath ?? 'dist';
    const serverEntryPath = options.serverEntryPath ?? 'dist/server/entry-server.js';
    const clientManifestPath = options.clientManifestPath ?? 'dist/manifest.json';
    const ssrManifestPath = options.ssrManifestPath ?? 'dist/ssr-manifest.json';

    if (this.isProd) {
      this.initProd(serverEntryPath, ssrManifestPath, clientManifestPath);
    } else {
      this.initDev(serverEntryPath);
    }
  }

  private async initProd(serverEntryPath: string, ssrManifestPath: string, clientManifestPath: string) {
    this.clientManifest = require(path.resolve(this.modulePath, clientManifestPath));
    this.ssrManifest = require(path.resolve(this.modulePath, ssrManifestPath));

    const res = await import(path.resolve(this.modulePath, serverEntryPath));
    this.render = async (url: string, ...args: any) => {
      const [appHtml, appHeadHtml = ''] = await res.render(url, this.ssrManifest, ...args);
      return { appHtml, appHeadHtml };
    };
  }

  private async initDev(serverEntryPath: string) {
    const viteServer = await vite.createServer({
      root: this.modulePath,
      appType: 'custom',
      cacheDir: 'node_modules/.vite-ssr',
      server: { middlewareMode: true, hmr: false },
    });
    const importRender = async () => {
      const res = await viteServer.ssrLoadModule(path.join(this.moduleName, serverEntryPath));
      return async (url: string, ...args: any) => {
        const devScripts: string = await viteServer.transformIndexHtml(url, '');

        const [appHtml, appHead = ''] = await res.render(url, this.ssrManifest, ...args);
        return { appHtml, appHeadHtml: devScripts + appHead };
      };
    };
    this.render = await importRender();
    viteServer.watcher.on('change', async () => {
      try {
        this.render = await importRender();
      } catch (err) {
        console.log('error', { err });
      }
    });
  }

  getClientManifestEntry() {
    const manifestEntries: ClientManifestEntry[] = Object.values(this.clientManifest ?? {});
    return manifestEntries.find((item) => item.isEntry === true);
  }

  getAssetRoute({ prefix = '/frontend/', host = 'localhost', port = '3200' } = {}): ServerRoute {
    const assetRouteBase = {
      method: 'GET',
      path: `${prefix}${this.moduleName}/{p*}`,
      options: { description: this.isProd ? 'client assets ' : `proxy route ${host}:${port}` },
    };
    const assetRouteHandler: ServerRoute['handler'] = {
      directory: {
        path: path.resolve(this.modulePath, this.assetsPath),
      },
    };
    const assetRouteHandlerDev: ServerRoute['handler'] = {
      proxy: {
        host,
        port,
        protocol: undefined,
        passThrough: true,
      },
    };
    return Object.assign({}, assetRouteBase, {
      handler: this.isProd ? assetRouteHandler : assetRouteHandlerDev,
    });
  }
}
