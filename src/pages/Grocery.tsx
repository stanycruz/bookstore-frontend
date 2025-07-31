import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Grocery: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api
      .get('/grocery')
      .then(response => setMessage(response.data))
      .catch(() => setMessage('Erro ao carregar dados da rota /grocery.'));
  }, []);

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <div className="bg-zinc-800 border border-zinc-700 shadow-xl rounded-xl p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-extrabold text-green-400 mb-4">
          Área da Grocery 🛒
        </h1>
        <p className="text-zinc-300 text-lg">{message}</p>
      </div>
    </main>
  );
};

export default Grocery;
