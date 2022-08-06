import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import * as vite from 'vite';
import { isProd } from '../config.js';
import { ServerRoute } from '@hapi/hapi';
const moduleName = '@private/react-ui';
const modulePath = path.dirname(require.resolve(`${moduleName}/package.json`));

type renderParams = { html: string; scripts?: string };
type renderFunction = (url: string, ...args: any) => Promise<renderParams>;

interface SSRAdapterInternals {
  render: renderFunction;
  clientManifest: object;
}
const internals: SSRAdapterInternals = {
  render: () => Promise.resolve({ html: '<!-- not initialised -->' }),
  clientManifest: {},
};

if (isProd) {
  const { default: clientManifest } = await import(path.resolve(modulePath, 'dist/manifest.json'), {
    assert: { type: 'json' },
  });
  internals.clientManifest = clientManifest;
  const res = await import(path.resolve(modulePath, 'dist/server/entry-server.js'));
  internals.render = async (url: string, ...args: any) => {
    const html: string = await res.render(url, ...args);
    return { html };
  };
} else {
  const reactUIVite = await vite.createServer({
    root: modulePath,
    appType: 'custom',
    server: { middlewareMode: true },
  });

  const importRender = async () => {
    const res = await reactUIVite.ssrLoadModule(path.join(moduleName, 'src/entry-server.tsx'));
    return async (url: string, ...args: any) => {
      const scripts: string = await reactUIVite.transformIndexHtml(url, '');

      const html: string = await res.render(url, ...args);
      return { html, scripts };
    };
  };
  internals.render = await importRender();
  reactUIVite.watcher.on('change', async () => {
    try {
      internals.render = await importRender();
    } catch (err) {
      console.log('error', { err });
    }
  });
}

export const render = internals.render;

const assetRouteBase = {
  method: 'GET',
  path: '/frontend/react-ui/{p*}',
};
const assetRouteHandler: ServerRoute['handler'] = {
  directory: {
    path: path.resolve(modulePath, 'dist'),
  },
};
const assetRouteHandlerDev: ServerRoute['handler'] = {
  proxy: {
    host: 'localhost',
    port: '3200',
    protocol: undefined,
    passThrough: true,
  },
};

export const assetRoute: ServerRoute = Object.assign({}, assetRouteBase, {
  handler: isProd ? assetRouteHandler : assetRouteHandlerDev,
});

interface manifestEntry {
  file: string;
  src: string;
  isEntry?: boolean;
  css?: string[];
  assets?: string[];
}
const manifestEntries: manifestEntry[] = Object.values(internals.clientManifest);
export const manifestEntry = manifestEntries.find((item) => item.isEntry === true);
