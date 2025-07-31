import React from 'react';
import { useNavigate } from 'react-router-dom';
import keycloak from '../auth/keycloak';

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-red-200 text-center max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Acesso não autorizado</h1>
        <p className="text-red-700 text-lg mb-6">
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
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-6 py-2 rounded transition"
          >
            Fazer Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
