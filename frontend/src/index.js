import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {I18nextProvider} from "react-i18next";
import {i18n} from "./util/i18n";


ReactDOM.render(
  <Suspense fallback="">
    <React.StrictMode>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <App />
          </Provider>
        </I18nextProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
