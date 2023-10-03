// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
    </React.StrictMode>
);