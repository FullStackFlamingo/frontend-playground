import { ServerRoute } from '@hapi/hapi';

type RenderParams = { appHtml: string; scripts?: string };
export type RenderFunction = (url: string, ...args: any) => Promise<RenderParams>;

export type ClientManifestEntry = {
  file: string;
  src: string;
  isEntry?: boolean;
  css?: string[];
  assets?: string[];
};
export interface SSRAdapterOptions {
  moduleName: string;
  serverEntryPath: string;
  isProd: boolean;
  assetsPath?: string;
  clientManifestPath?: string;
}

export interface ISSRAdapter {
  render: RenderFunction;
  getAssetRoute(): ServerRoute;
  getClientManifestEntry(): ClientManifestEntry | undefined;
}
