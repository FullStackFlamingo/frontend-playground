import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import * as vite from 'vite';
import { ServerRoute } from '@hapi/hapi';
import { ISSRAdapter, renderFunction, SSRAdapterOptions } from './ISSRAdapter';

interface manifestEntry {
  file: string;
  src: string;
  isEntry?: boolean;
  css?: string[];
  assets?: string[];
}
interface SSRAdapterOptionsProd extends SSRAdapterOptions {
  assetsPath?: string;
  clientManifestPath?: string;
}

export class SSRAdapter implements ISSRAdapter {
  moduleName: string;
  modulePath: string;
  private clientManifest: object;
  public render: renderFunction;
  protected assetsPath: string;

  constructor(options: SSRAdapterOptionsProd) {
    this.moduleName = options.moduleName;
    this.modulePath = path.dirname(require.resolve(this.moduleName));
    this.assetsPath = options.assetsPath ?? 'dist';
    const clientManifestPath = options.clientManifestPath ?? 'dist/manifest.json';
    this.clientManifest = require(path.resolve(this.modulePath, clientManifestPath));
    const serverEntryPath = options.serverEntryPath ?? 'dist/manifest.json';

    const { render } = require(path.resolve(this.modulePath, serverEntryPath));
    this.render = render;
  }

  getClientManifestEntry(): manifestEntry | undefined {
    const manifestEntries: manifestEntry[] = Object.values(this.clientManifest);
    return manifestEntries.find((item) => item.isEntry === true);
  }

  getAssetRoute(prefix: string = '/frontend/'): ServerRoute {
    const assetsPath = this.assetsPath;

    return {
      method: 'GET',
      path: `${prefix}${this.moduleName}/{p*}`,
      handler: {
        directory: {
          path: path.resolve(this.modulePath, assetsPath),
        },
      },
    };
  }
}
