import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('react-ui');

const RootApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// @ts-ignore
if (import.meta.hot) {
  const root = createRoot(container!); // createRoot(container!) if you use TypeScript
  root.render(<RootApp />);
} else {
  hydrateRoot(container!, <RootApp />);
}
