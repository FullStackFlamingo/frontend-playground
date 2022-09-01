import React from 'react';
import Bourne from '@hapi/bourne';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { createUrqlProvider } from './urql-provider';
import Routes from './routes';
import { GLOBAL_PROP_STATE, GLOBAL_PROP_URQL_STATE } from './constants';
import '@private/design-system/index.css';

const preloadedState = Bourne.parse(window[GLOBAL_PROP_STATE] ?? {});
const preloadedUrqlState = Bourne.parse(window[GLOBAL_PROP_URQL_STATE] ?? {});

const store = createStore(preloadedState);
const { UrqlProvider } = createUrqlProvider(preloadedUrqlState);

const RootApp = () => (
  <React.StrictMode>
    <Provider store={store} serverState={preloadedState}>
      <UrqlProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UrqlProvider>
    </Provider>
  </React.StrictMode>
);

const container = document.getElementById('react-ui');
// @ts-ignore
if (import.meta.hot) {
  const root = createRoot(container!);
  root.render(<RootApp />);
} else {
  hydrateRoot(container!, <RootApp />);
}
