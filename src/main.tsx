import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import keycloak from './auth/keycloak';
import './index.css';

keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  if (authenticated) {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    keycloak.login();
  }
});
