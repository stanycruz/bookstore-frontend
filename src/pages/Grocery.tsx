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
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl w-full">
        <h1 className="text-3xl font-extrabold text-green-800 mb-4 text-center">
          Área da Grocery 🛒
        </h1>
        <p className="text-gray-700 text-lg text-center">{message}</p>
      </div>
    </div>
  );
};

export default Grocery;
