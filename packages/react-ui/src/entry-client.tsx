import React from 'react';
import Bourne from '@hapi/bourne';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from './store';
import App from './App';

const preloadedState = Bourne.parse(window.__REACTUI_STATE__ ?? {});
const store = createStore(preloadedState);

const RootApp = () => (
  <React.StrictMode>
    <Provider store={store} serverState={preloadedState}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
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