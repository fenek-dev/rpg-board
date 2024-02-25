import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '~/app/store';
import '~/app/styles/global.css';

import { Router } from './app/routes/Router';
import { Block } from './widgets/blocks/store';
declare global {
  interface Window {
    dragId: string;
    dragging: Block;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
