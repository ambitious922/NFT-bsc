import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './store';
import reportWebVitals from './reportWebVitals';
import { UseWalletProvider } from 'use-wallet';

ReactDOM.render(
  <Provider store={store}>
    <UseWalletProvider chainId={56}>
      <App />
    </UseWalletProvider>
  </Provider>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
