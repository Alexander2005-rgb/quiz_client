//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';


/** Redux Store */
import store from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';

/** Configure axios base URL (use REACT_APP_API_URL in production) */
import { API_BASE } from "./helper/helper";
axios.defaults.baseURL = API_BASE;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
