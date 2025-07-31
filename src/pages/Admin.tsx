import React from 'react';
import keycloak from '../auth/keycloak';

const Admin: React.FC = () => {
  const tokenParsed = keycloak.tokenParsed;

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-zinc-800 shadow-md rounded-lg p-6 border border-zinc-700">
        <h1 className="text-2xl font-bold text-purple-400 mb-4">
          Bem-vindo(a), Administrador Principal!
        </h1>

        <p className="mb-2">
          <span className="font-semibold">Email:</span> {tokenParsed?.email}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-zinc-300 mb-2">Claims do Token:</h2>
          <pre className="bg-zinc-900 text-sm overflow-x-auto p-4 rounded border border-zinc-700 text-zinc-200">
            {JSON.stringify(tokenParsed, null, 2)}
          </pre>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/grocery"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Ir para Grocery
          </a>
          <a
            href="/owner"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Ir para Owner
          </a>
          <button
            onClick={() => keycloak.logout({ redirectUri: window.location.origin })}
            className="ml-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
