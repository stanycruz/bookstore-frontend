import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Maintainer: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api
      .get('/maintainer')
      .then(response => setMessage(response.data))
      .catch(() => setMessage('Erro ao carregar dados da rota /maintainer.'));
  }, []);

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center px-4">
      <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl shadow-md w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Área do Maintainer
        </h1>
        <p className="text-zinc-300 text-lg">{message}</p>
      </div>
    </main>
  );
};

export default Maintainer;
