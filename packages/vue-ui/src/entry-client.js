import { createApp } from './main';
import Bourne from '@hapi/bourne';

const preloadedState = Bourne.parse(window.__VUEUI_STATE__ ?? {});
const preloadedUrqlState = Bourne.parse(window.__VUEUI_URQL_STATE__ ?? {});

const init = async () => {
  const { app, router, pinia } = await createApp({ preloadedUrqlState });
  pinia.state.value = preloadedState;
  // wait until router is ready before mounting to ensure hydration match
  router.isReady().then(() => {
    app.mount('#vue-ui');
  });
};

init();
