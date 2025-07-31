import React from 'react'

const Welcome: React.FC = () => {
  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Sistema</h1>
      <p className="text-lg text-zinc-300">Escolha uma opção no menu acima para começar.</p>
    </main>
  );
}

export default Welcome;
