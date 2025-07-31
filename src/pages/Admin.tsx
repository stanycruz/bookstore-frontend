import React from 'react';
import keycloak from '../auth/keycloak';

const Admin: React.FC = () => {
  const tokenParsed = keycloak.tokenParsed;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Bem-vindo(a), Administrador Principal!</h1>

        <p className="mb-2">
          <span className="font-semibold">Email:</span> {tokenParsed?.email}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Claims do Token:</h2>
          <pre className="bg-gray-100 text-sm overflow-x-auto p-4 rounded border border-gray-300">
            {JSON.stringify(tokenParsed, null, 2)}
          </pre>
        </div>

        <div className="mt-6 flex gap-4">
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
            className="ml-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
