import { useEffect, useState } from 'react';
import api from '../services/api';

const Maintainer = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/maintainer')
      .then(response => setMessage(response.data))
      .catch(() => setMessage('Erro ao carregar dados da rota /maintainer.'));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Área do Maintainer</h1>
      <p>{message}</p>
    </div>
  );
};

export default Maintainer;