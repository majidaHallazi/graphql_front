// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClientProvider } from './ApolloClient'; // Import du provider Apollo

ReactDOM.render(
  <ApolloClientProvider>
    <App />
  </ApolloClientProvider>,
  document.getElementById('root')
);
