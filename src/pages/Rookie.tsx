import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Rookie: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api
      .get('/rookie')
      .then(response => setMessage(response.data))
      .catch(() => setMessage('Erro ao carregar dados da rota /rookie.'));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Área do Rookie</h1>
      <p className="text-gray-700 text-lg text-center max-w-xl">{message}</p>
    </div>
  );
};

export default Rookie;
