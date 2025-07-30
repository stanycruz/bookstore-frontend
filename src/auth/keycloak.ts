import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'bookstore-app',
  clientId: 'bookstore-client',
});

export default keycloak;
