import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Rookie() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/v1/rookie')
      .then((res) => setMessage(res.data))
      .catch(() => setMessage('Acesso negado ou erro na requisição'));
  }, []);

  return (
    <div>
      <h1>Rookie</h1>
      <p>{message}</p>
    </div>
  );
}
