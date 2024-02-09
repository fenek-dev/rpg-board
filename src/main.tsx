import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '~/app/store';
import '~/app/styles/global.css';
import App from '~/pages/App';

import { PopupProvider } from './app/contexts/Popups.context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PopupProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PopupProvider>
  </React.StrictMode>
);
