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
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-yellow-700 mb-4">
        Área do Maintainer
      </h1>
      <p className="text-gray-700 text-lg text-center max-w-xl">{message}</p>
    </div>
  );
};

export default Maintainer;
