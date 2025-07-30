import axios from 'axios';
import keycloak from '../auth/keycloak';

const api = axios.create({
  baseURL: 'http://localhost:5161/v1',
});

api.interceptors.request.use(config => {
  const token = keycloak.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
