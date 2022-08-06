import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import * as vite from 'vite';
import { ServerRoute } from '@hapi/hapi';
import { ISSRAdapter, ClientManifestEntry, RenderFunction, SSRAdapterOptions } from './ISSRAdapter';

export class SSRAdapter implements ISSRAdapter {
  private moduleName: string;
  private modulePath: string;
  private clientManifest?: object;
  public render!: RenderFunction;
  private assetsPath: string;
  private isProd: boolean;

  constructor(options: SSRAdapterOptions) {
    this.isProd = options.isProd;
    this.moduleName = options.moduleName;
    this.modulePath = path.dirname(require.resolve(`${this.moduleName}/package.json`));
    this.assetsPath = options.assetsPath ?? 'dist';
    const serverEntryPath = options.serverEntryPath ?? 'dist/server/entry-server.js';
    const clientManifestPath = options.clientManifestPath ?? 'dist/manifest.json';

    if (this.isProd) {
      this.initProd(serverEntryPath, clientManifestPath);
    } else {
      this.initDev(serverEntryPath);
    }
  }

  private async initProd(serverEntryPath: string, clientManifestPath: string) {
    this.clientManifest = require(path.resolve(this.modulePath, clientManifestPath));

    const res = await import(path.resolve(this.modulePath, serverEntryPath));
    this.render = async (url: string, ...args: any) => {
      const appHtml: string = await res.render(url, ...args);
      return { appHtml };
    };
  }

  private async initDev(serverEntryPath: string) {
    const reactUIVite = await vite.createServer({
      root: this.modulePath,
      appType: 'custom',
      server: { middlewareMode: true },
    });

    const importRender = async () => {
      const res = await reactUIVite.ssrLoadModule(path.join(this.moduleName, serverEntryPath));
      return async (url: string, ...args: any) => {
        const scripts: string = await reactUIVite.transformIndexHtml(url, '');

        const appHtml: string = await res.render(url, ...args);
        return { appHtml, scripts };
      };
    };
    this.render = await importRender();
    reactUIVite.watcher.on('change', async () => {
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

  getAssetRoute(prefix: string = '/frontend/', host: string = 'localhost', port: string = '3200'): ServerRoute {
    const assetRouteBase = { method: 'GET', path: `${prefix}${this.moduleName}/{p*}` };
    const assetRouteHandler: ServerRoute['handler'] = {
      directory: {
        path: path.resolve(this.modulePath, this.assetsPath),
      },
    };
    const assetRouteHandlerDev: ServerRoute['handler'] = {
      proxy: {
        host: 'localhost',
        port: '3200',
        protocol: undefined,
        passThrough: true,
      },
    };
    return Object.assign({}, assetRouteBase, {
      handler: this.isProd ? assetRouteHandler : assetRouteHandlerDev,
    });
  }
}
