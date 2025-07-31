import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import keycloak from '../auth/keycloak';

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    if (keycloak.authenticated) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-purple-400">Bem-vindo ao Sistema</h1>
        <p className="text-zinc-300 text-lg">Por favor, faça login para continuar.</p>
      </div>
    </main>
  );
}
