import { createApp } from './main';
import Bourne from '@hapi/bourne';

const preloadedState = Bourne.parse(window.__VUEUI_STATE__ ?? {});

const { app, router, pinia } = createApp();
pinia.state.value = preloadedState;
// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#vue-ui');
});
