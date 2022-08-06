import { ServerRoute } from '@hapi/hapi';

type renderParams = { html: string; scripts?: string };
export type renderFunction = (url: string, ...args: any) => Promise<renderParams>;

export interface SSRAdapterOptions {
  moduleName: string;
  modulePath: string;
  serverEntryPath: string;
}

export interface ISSRAdapter {
  moduleName: string;
  render: renderFunction;
  getAssetRoute(): ServerRoute;
}
