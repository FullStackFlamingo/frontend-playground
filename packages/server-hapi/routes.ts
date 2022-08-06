import { Request, ResponseToolkit } from '@hapi/hapi';
import Nunjucks from 'nunjucks';
import { isProd } from './config.js';
import { SSRAdapter } from './adapters/SSRAdapter.js';

const serverEntryPath = isProd ? 'dist/server/entry-server.js' : 'src/entry-server.tsx';
const SSRAdapterReactUI = new SSRAdapter({ isProd, moduleName: '@private/react-ui', serverEntryPath });

const homepage = {
  method: 'GET',
  path: '/',
  async handler(request: Request, h: ResponseToolkit) {
    const url = request.url.pathname + request.url.search;
    // const { html: reactUIHTML, scripts: reactUIScripts } = await reactUIRender(url);
    const { appHtml: reactUIHTML, scripts: reactUIScripts } = await SSRAdapterReactUI.render(url);
    const manifestEntryReactUI = SSRAdapterReactUI.getClientManifestEntry();
    try {
      const htmlOut = await Nunjucks.render('homepage.njk', {
        isProd,
        reactUIHTML,
        reactUIScripts,
        manifestEntryReactUI,
      });
      return h.response(htmlOut);
    } catch (err) {
      request.log('error', { err });
      throw err;
    }
  },
};
const assetRoute = SSRAdapterReactUI.getAssetRoute();
export const routes = [homepage, assetRoute];
