import path from 'path';
import { fileURLToPath } from 'url';
import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as H2o2 from '@hapi/h2o2';
import * as Blipp from 'blipp';
import Nunjucks from 'nunjucks';

import graphqlApiPlugin from './plugins/graphql-api/index.js';

import { routes } from './routes.js';
import { isProd } from './config.js';
const init = async () => {
  const server: Hapi.Server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register({ plugin: graphqlApiPlugin, options: {} });
  await server.register(Inert);
  await server.register(H2o2);
  await server.register(Blipp);

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  Nunjucks.configure(path.resolve(__dirname, 'templates'), {
    autoescape: true,
    noCache: !isProd,
  });

  server.route(routes);
  await server.start();
  console.log('info', { msg: 'Server running on %s', uri: server.info.uri });
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
