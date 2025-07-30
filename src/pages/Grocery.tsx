import { useEffect, useState } from 'react';
import api from '../services/api';

const Grocery = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/grocery')
      .then(response => setMessage(response.data))
      .catch(() => setMessage('Erro ao carregar dados da rota /grocery.'));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Área da Grocery</h1>
      <p>{message}</p>
    </div>
  );
};

export default Grocery;