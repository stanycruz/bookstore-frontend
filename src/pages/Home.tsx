import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bem-vindo à Bookstore</h1>

      <p className="text-gray-600 mb-8 text-center max-w-md">
        Este sistema demonstra controle de acesso com Keycloak. Use o menu para acessar as áreas
        protegidas conforme sua role.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/admin"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Área Admin
        </Link>
        <Link
          to="/owner"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Área Owner
        </Link>
        <Link
          to="/grocery"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Área Grocery
        </Link>
        <Link
          to="/maintainer"
          className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
        >
          Área Maintainer
        </Link>
        <Link
          to="/rookie"
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Área Rookie
        </Link>
      </div>
    </div>
  );
}
