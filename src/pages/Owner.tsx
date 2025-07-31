import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Owner: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api
      .get('/owner')
      .then(response => setMessage(response.data))
      .catch(() => setMessage('Erro ao carregar dados da rota /owner.'));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">
        Área do Owner
      </h1>
      <p className="text-gray-700 text-lg text-center max-w-xl">{message}</p>
    </div>
  );
};

export default Owner;
