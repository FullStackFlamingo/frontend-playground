import { Request, ResponseToolkit } from '@hapi/hapi';
import Nunjucks from 'nunjucks';
import { isProd } from './config.js';
import { SSRAdapter } from './adapters/SSRAdapter.js';

const serverEntryPathReactUI = isProd ? 'dist/server/entry-server.js' : 'src/entry-server.tsx';
const SSRAdapterReactUI = new SSRAdapter({
  isProd,
  moduleName: '@private/react-ui',
  serverEntryPath: serverEntryPathReactUI,
});
const serverEntryPathVueUI = isProd ? 'dist/server/entry-server.js' : 'src/entry-server.js';
const SSRAdapterVueUI = new SSRAdapter({
  isProd,
  moduleName: '@private/vue-ui',
  serverEntryPath: serverEntryPathVueUI,
});

const homepage = {
  method: 'GET',
  path: '/',
  async handler(request: Request, h: ResponseToolkit) {
    const url = request.url.pathname + request.url.search;
    // const { html: reactUIHTML, scripts: reactUIScripts } = await reactUIRender(url);
    const { appHtml: htmlReactUI, scripts: scriptsReactUI } = await SSRAdapterReactUI.render(url);
    const { appHtml: htmlVueUI, scripts: scriptsVueUI } = await SSRAdapterVueUI.render(url);

    const manifestEntryReactUI = SSRAdapterReactUI.getClientManifestEntry();
    const manifestEntryVueUI = SSRAdapterVueUI.getClientManifestEntry();

    try {
      const htmlOut = await Nunjucks.render('homepage.njk', {
        isProd,
        htmlReactUI,
        scriptsReactUI,
        manifestEntryReactUI,
        htmlVueUI,
        scriptsVueUI,
        manifestEntryVueUI,
      });
      return h.response(htmlOut);
    } catch (err) {
      request.log('error', { err });
      throw err;
    }
  },
};
const assetRouteReactUI = SSRAdapterReactUI.getAssetRoute();
const assetRouteVueUI = SSRAdapterVueUI.getAssetRoute({ port: '3210' });
export const routes = [homepage, assetRouteReactUI, assetRouteVueUI];
