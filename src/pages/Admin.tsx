import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Admin() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/v1/admin')
      .then((res) => setMessage(res.data))
      .catch(() => setMessage('Acesso negado ou erro na requisição'));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Área do Administrador</h1>
      <p className="bg-white text-gray-800 shadow rounded p-4">{message}</p>
    </div>
  );
}
