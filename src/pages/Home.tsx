import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Bem-vindo à <span className="text-blue-600">Bookstore</span>
      </h1>

      <p className="text-gray-600 mb-10 text-center max-w-md text-lg">
        Este sistema demonstra controle de acesso com Keycloak. Use o menu abaixo para acessar as áreas
        protegidas conforme sua <span className="font-semibold">role</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/admin"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Área Admin
        </Link>
        <Link
          to="/owner"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
        >
          Área Owner
        </Link>
        <Link
          to="/grocery"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          Área Grocery
        </Link>
        <Link
          to="/maintainer"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Área Maintainer
        </Link>
        <Link
          to="/rookie"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
        >
          Área Rookie
        </Link>
      </div>
    </div>
  );
};

export default Home;
