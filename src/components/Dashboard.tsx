import { useEffect, useState } from 'react';
import keycloak from '../auth/keycloak';
import api from '../services/api';

export default function Dashboard() {
  type Claim = {
    type: string;
    value: string;
  };

  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    api.get('/claims')
      .then(res => setClaims(res.data))
      .catch(err => console.error('Erro ao buscar claims', err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Bem-vindo(a), {keycloak.tokenParsed?.name ?? 'Usuário'}!</h1>
      <p>Email: {keycloak.tokenParsed?.email}</p>

      <button onClick={() => keycloak.logout({ redirectUri: window.location.origin })}>
        Logout
      </button>

      <h2>Claims do Token:</h2>
      <ul>
        {claims.map((c, i) => (
          <li key={i}>
            <strong>{c.type}:</strong> {c.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
