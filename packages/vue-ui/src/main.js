import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import urql, { dedupExchange, cacheExchange, fetchExchange, ssrExchange } from '@urql/vue';
import App from './App.vue';
import { createRouter } from './router';

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp({ preloadedUrqlState } = {}) {
  const app = createSSRApp(App);
  const router = createRouter();
  const pinia = createPinia();

  // NOTE: All we care about here is that the SSR Exchange is included
  const ssrUrql = ssrExchange({ isClient: !import.meta.env.SSR, initialState: preloadedUrqlState });
  app.use(urql, {
    url: import.meta.env.SSR ? 'http://localhost:3000/graphql' : '/graphql',
    exchanges: [dedupExchange, cacheExchange, ssrUrql, fetchExchange],
  });

  app.use(router).use(pinia);
  return { app, router, pinia, ssrUrql };
}
