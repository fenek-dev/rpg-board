import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-grid-layout/css/styles.css';
import { Provider } from 'react-redux';

import { store } from '~/app/store';
import '~/app/styles/global.css';
import App from '~/pages/App';

import { Block } from './widgets/blocks/store';
declare global {
  interface Window {
    dragging: (Block & { block_id: string }) | null;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
