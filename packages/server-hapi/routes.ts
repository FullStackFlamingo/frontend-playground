import path from 'path';
import { fileURLToPath } from 'url';
import { Request, ResponseToolkit } from '@hapi/hapi';
import Nunjucks from 'nunjucks';
import {
  assetRoute as reactUIAssetRoute,
  render as reactUIRender,
  manifestEntry as manifestEntryReactUI,
} from './adapters/react-ui-adapter.js';
import { isProd } from './config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
Nunjucks.configure(path.resolve(__dirname, 'templates'), {
  autoescape: true,
  noCache: !isProd,
});

const homepage = {
  method: 'GET',
  path: '/',
  async handler(request: Request, h: ResponseToolkit) {
    const url = request.url.pathname + request.url.search;
    const { html: reactUIHTML, scripts: reactUIScripts } = await reactUIRender(url);
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
export const routes = [homepage, reactUIAssetRoute];
