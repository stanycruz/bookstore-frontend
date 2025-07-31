import React from 'react'
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
        <p className="text-zinc-400 mb-6">
          A rota que você tentou acessar não existe ou foi removida.
        </p>
        <Link
          to="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded transition"
        >
          Voltar ao Início
        </Link>
      </div>
    </main>
  );
}

export default NotFound
