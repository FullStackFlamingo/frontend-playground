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
  path: '/{path*}',
  async handler(request: Request, h: ResponseToolkit) {
    const url = request.url.pathname + request.url.search;
    const { app } = request.query;
    try {
      if (app === 'vue-ui') {
        const { appHtml: htmlVueUI, headHtml: headHtmlVueUI } = await SSRAdapterVueUI.render(url);
        const manifestEntryVueUI = SSRAdapterVueUI.getClientManifestEntry();
        const htmlOut = await Nunjucks.render('skeleton.njk', {
          app,
          isProd,
          htmlVueUI,
          headHtmlVueUI,
          manifestEntryVueUI,
        });
        return h.response(htmlOut);
      }

      const { appHtml: htmlReactUI, headHtml: headHtmlReactUI } = await SSRAdapterReactUI.render(url);
      const manifestEntryReactUI = SSRAdapterReactUI.getClientManifestEntry();

      const htmlOut = await Nunjucks.render('skeleton.njk', {
        app,
        isProd,
        htmlReactUI,
        headHtmlReactUI,
        manifestEntryReactUI,
      });
      return h.response(htmlOut);
    } catch (err) {
      if (err instanceof Error) {
        console.error({ err, msg: err.message });
        throw err;
      }
    }
  },
};
const assetRouteReactUI = SSRAdapterReactUI.getAssetRoute();
const assetRouteVueUI = SSRAdapterVueUI.getAssetRoute({ port: '3210' });
export const routes = [homepage, assetRouteReactUI, assetRouteVueUI];
