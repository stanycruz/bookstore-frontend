import { useEffect, useState } from 'react';
import api from '../services/api';

const Rookie = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/rookie')
      .then(response => setMessage(response.data))
      .catch(() => setMessage('Erro ao carregar dados da rota /rookie.'));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Área do Rookie</h1>
      <p>{message}</p>
    </div>
  );
};

export default Rookie;
