import keycloak from '../auth/keycloak';

export default function Dashboard() {
  const user = keycloak.tokenParsed;

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-8">
      <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-400 mb-4">Painel Inicial</h1>
        <p className="text-zinc-200 text-lg mb-2">
          <span className="font-semibold">Usuário:</span> {user?.name}
        </p>
        <p className="text-zinc-200 text-lg">
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
      </div>
    </main>
  );
}
