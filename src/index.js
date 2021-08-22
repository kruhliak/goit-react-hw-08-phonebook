import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './components/redux/store';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'react-loader-spinner';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={Loader} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
