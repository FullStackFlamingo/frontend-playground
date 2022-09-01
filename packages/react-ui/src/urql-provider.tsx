import { createClient, dedupExchange, cacheExchange, fetchExchange, ssrExchange, Provider } from 'urql';
import { requestPolicyExchange } from '@urql/exchange-request-policy';

export const createUrqlProvider = function (preloadedUrqlState?: any) {
  const ssrUrql = ssrExchange({ isClient: !import.meta.env.SSR, initialState: preloadedUrqlState });

  const client = createClient({
    suspense: true,
    url: import.meta.env.SSR ? 'http://localhost:3000/graphql' : '/graphql',
    exchanges: [
      dedupExchange,
      requestPolicyExchange({
        ttl: 60 * 1000 * 2, // 2 mins
      }),
      cacheExchange,
      ssrUrql,
      fetchExchange,
    ],
  });

  return {
    UrqlProvider: (props: any) => {
      return <Provider value={client}>{props.children}</Provider>;
    },
    ssrUrql,
  };
};
