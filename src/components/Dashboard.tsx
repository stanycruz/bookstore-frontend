import { useEffect, useState } from 'react';
import keycloak from '../auth/keycloak';
import api from '../services/api';

type Claim = {
  type: string;
  value: string;
};

export default function Dashboard() {
  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    api.get('/claims')
      .then(res => setClaims(res.data))
      .catch(err => console.error('Erro ao buscar claims', err));
  }, []);

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-zinc-800 rounded-xl shadow-md p-6 border border-zinc-700">
        <h1 className="text-3xl font-bold text-purple-400 mb-2">
          Bem-vindo(a), {keycloak.tokenParsed?.name ?? 'Usuário'}!
        </h1>
        <p className="mb-6 text-zinc-300">Email: {keycloak.tokenParsed?.email}</p>

        <h2 className="text-xl font-semibold text-zinc-200 mb-2">Claims do Token:</h2>
        <ul className="space-y-1 text-sm text-zinc-300">
          {claims.map((claim, index) => (
            <li key={index} className="border-b border-zinc-700 pb-1">
              <span className="font-semibold text-white">{claim.type}:</span> {claim.value}
            </li>
          ))}
        </ul>

        <div className="mt-6 text-right">
          <button
            onClick={() => keycloak.logout({ redirectUri: window.location.origin })}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
