import axios from 'axios';
import keycloak from '../auth/keycloak';

const api = axios.create({
  baseURL: 'http://localhost:5161/v1',
});

api.interceptors.request.use(config => {
  if (keycloak.token) {
    config.headers.Authorization = `Bearer ${keycloak.token}`;
  }
  return config;
});

export default api;
