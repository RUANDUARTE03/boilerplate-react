import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styleGlobal.css';
import Routes from './features';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
