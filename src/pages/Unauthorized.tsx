import React from 'react';
import { useNavigate } from 'react-router-dom';
import keycloak from '../auth/keycloak';

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    keycloak.logout({ redirectUri: window.location.origin });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-900 text-white px-4">
      <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-xl shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-400 mb-4">Acesso não autorizado</h1>
        <p className="text-zinc-300 text-lg mb-6">
          Você não tem permissão para ver esta página.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleGoHome}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition"
          >
            Voltar para Home
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded transition"
          >
            Fazer Logout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Unauthorized;
