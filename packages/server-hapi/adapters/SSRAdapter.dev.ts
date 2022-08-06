import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import * as vite from 'vite';
import { ServerRoute } from '@hapi/hapi';
import { ISSRAdapter, renderFunction, SSRAdapterOptions } from './ISSRAdapter';

type renderParams = { html: string; scripts?: string };

interface manifestEntry {
  file: string;
  src: string;
  isEntry?: boolean;
  css?: string[];
  assets?: string[];
}

export class SSRAdapterDev implements ISSRAdapter {
  moduleName: string;
  modulePath: string;
  render: renderFunction;

  constructor(options: SSRAdapterOptions) {
    this.moduleName = options.moduleName;
    this.modulePath = path.dirname(require.resolve(this.moduleName));
    const serverEntryPath = options.serverEntryPath ?? 'dist/manifest.json';
    this.init(serverEntryPath);
  }

  async init(serverEntryPath) {
    const reactUIVite = await vite.createServer({
      root: this.moduleName,
      appType: 'custom',
      server: { middlewareMode: true },
    });

    const importRender = async () => {
      const res = await reactUIVite.ssrLoadModule(`${this.moduleName}/${serverEntryPath}`);
      return async (url: string, ...args: any) => {
        const scripts: string = await reactUIVite.transformIndexHtml(url, '');

        const html: string = await res.render(url, ...args);
        return { html, scripts };
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

  getAssetRoute(prefix: string = '/frontend/', host: string = 'localhost', port: string = '3200'): ServerRoute {
    return {
      method: 'GET',
      path: `${prefix}${this.moduleName}/{p*}`,
      handler: {
        proxy: {
          host,
          port,
          protocol: undefined,
          passThrough: true,
        },
      },
    };
  }
}
