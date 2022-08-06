import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import * as vite from 'vite';
import { isProd } from './config.js';
import { ServerRoute } from '@hapi/hapi';
let reactUI = path.dirname(require.resolve('@private/react-ui/package.json'));

type renderParams = {
  html: string;
  scripts?: string;
};
interface ReactUIInternals {
  reactUIRender: (url: string, ...args: any) => Promise<renderParams>;
  reactUIClientManifest: object;
}
const internals: ReactUIInternals = {
  reactUIRender: () => Promise.resolve({ html: '<!-- not initialised -->' }),
  reactUIClientManifest: {},
};

if (isProd) {
  const { default: reactUIClientManifest } = await import(path.resolve(reactUI, 'dist/manifest.json'), {
    assert: { type: 'json' },
  });
  internals.reactUIClientManifest = reactUIClientManifest;
  const res = await import(path.resolve(reactUI, 'dist/server/entry-server.js'));
  internals.reactUIRender = async (url: string, ...args: any) => {
    const html: string = await res.render(url, ...args);
    return { html };
  };
} else {
  const reactUIVite = await vite.createServer({ root: reactUI, appType: 'custom', server: { middlewareMode: true } });

  const importRender = async () => {
    const res = await reactUIVite.ssrLoadModule('@private/react-ui/src/entry-server.tsx');
    return async (url: string, ...args: any) => {
      const scripts: string = await reactUIVite.transformIndexHtml(url, '');

      const html: string = await res.render(url, ...args);
      return { html, scripts };
    };
  };
  internals.reactUIRender = await importRender();
  reactUIVite.watcher.on('change', async () => {
    try {
      internals.reactUIRender = await importRender();
    } catch (err) {
      console.log('error', { err });
    }
  });
}

export const render = internals.reactUIRender;

const routes: ServerRoute[] = [];
if (isProd) {
  routes.push({
    method: 'GET',
    path: '/frontend/react-ui/{p*}',
    handler: {
      directory: {
        path: path.resolve(reactUI, 'dist'),
      },
    },
  });
} else {
  routes.push({
    method: 'GET',
    path: '/frontend/react-ui/{p*}',
    handler: {
      proxy: {
        host: 'localhost',
        port: '3200',
        protocol: undefined,
        passThrough: true,
      },
    },
  });
}

export { routes };

interface manifestEntry {
  file: string;
  src: string;
  isEntry?: boolean;
  css?: string[];
  assets?: string[];
}
const manifestEntries: manifestEntry[] = Object.values(internals.reactUIClientManifest);
export const manifestEntry = manifestEntries.find((item) => item.isEntry === true);
