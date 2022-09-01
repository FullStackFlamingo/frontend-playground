import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import { createStore } from './store';
import Routes from './routes';

export function render(url: string) {
  const store = createStore();

  const appHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <Routes />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );
  const stateScript = createStateScript(store);
  const headHtml = stateScript;
  return { appHtml, headHtml };
}

const createStateScript = (store: EnhancedStore): string => {
  return `<script>var __REACTUI_STATE__ = ${JSON.stringify(JSON.stringify(store.getState() ?? {}))};</script>`;
};
