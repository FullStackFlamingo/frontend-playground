import { ServerRoute } from '@hapi/hapi';

type RenderParams = { appHtml: string; appHeadHtml?: string };
export type RenderFunction = (url: string, ...args: any) => Promise<RenderParams>;

export type AssetRouteConfig = {
  prefix?: string;
  host: string;
  port: string;
};

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
  ssrManifestPath?: string;
}

export interface ISSRAdapter {
  render: RenderFunction;
  getAssetRoute(config?: AssetRouteConfig): ServerRoute;
  getClientManifestEntry(): ClientManifestEntry | undefined;
}
