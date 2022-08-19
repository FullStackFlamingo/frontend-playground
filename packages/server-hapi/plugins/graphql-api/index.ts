import * as Hapi from '@hapi/hapi';
import { ApolloServer, ApolloServerPluginStopHapiServer } from 'apollo-server-hapi';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { mergeTypeDefs } from '@graphql-tools/merge';
import merge from 'lodash/merge.js';
import { typeDefs as navigationTypes, resolvers as navigationResolvers } from './types/types.navigation.js';
import { typeDefs as bundlesTypes, resolvers as bundlesResolvers } from './types/types.bundles.js';

const plugin: Hapi.Plugin<any> = {
  name: 'graphql-api',
  once: true,
  async register(server, options) {
    const apolloServer = new ApolloServer({
      typeDefs: mergeTypeDefs([navigationTypes, bundlesTypes]),
      resolvers: merge({}, navigationResolvers, bundlesResolvers),
      csrfPrevention: true,
      cache: 'bounded',
      plugins: [
        ApolloServerPluginStopHapiServer({ hapiServer: server }),
        ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });

    await apolloServer.start();
    await apolloServer.applyMiddleware({ app: server });
  },
};

export default plugin;
