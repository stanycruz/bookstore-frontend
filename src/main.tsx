import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import keycloak from './auth/keycloak';
import './index.css';

document.documentElement.classList.add('dark');

keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  if (authenticated) {
    // 🔁 Atualiza o token a cada 10 segundos, se faltar menos de 30 segundos para expirar
    setInterval(() => {
      keycloak.updateToken(30).catch(() => {
        console.warn('Token expired or could not be refreshed, logging out...');
        keycloak.logout();
      });
    }, 10000); // verifica a cada 10 segundos

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    keycloak.login();
  }
});
