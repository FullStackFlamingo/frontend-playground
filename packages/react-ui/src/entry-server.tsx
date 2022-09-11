import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import prepass from 'react-ssr-prepass';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { createUrqlProvider } from './urql-provider';
import App from './App';
import { GLOBAL_PROP_STATE, GLOBAL_PROP_URQL_STATE } from './constants';
import { initi18n } from './i18n';

export async function render(url: string) {
  const store = createStore();
  const { UrqlProvider, ssrUrql } = createUrqlProvider();

  await initi18n();

  const AppWrapper = (
    <Provider store={store}>
      <UrqlProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </UrqlProvider>
    </Provider>
  );
  let appHtml;

  try {
    await prepass(AppWrapper);
    appHtml = ReactDOMServer.renderToString(AppWrapper);
  } catch (error) {
    console.log(error);
    throw error;
  }

  const stateScript = createStateScript(GLOBAL_PROP_STATE, store.getState());
  const urqlStateScript = createStateScript(GLOBAL_PROP_URQL_STATE, ssrUrql.extractData());
  const headHtml = stateScript + urqlStateScript;
  return { appHtml, headHtml };
}

const createStateScript = (varName: string, state: object = {}): string => {
  return `<script>var ${varName} = ${JSON.stringify(JSON.stringify(state))};</script>`;
};
