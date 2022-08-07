import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { createStore } from './store';
import App from './App';

const store = createStore();

export function render(url: string) {
  const appHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );
  const stateScript = `<script>var __REACTUI_STATE__ = ${JSON.stringify(
    JSON.stringify(store.getState() ?? {})
  )};</script>`;

  const headHtml = stateScript;
  return [appHtml, headHtml];
}
