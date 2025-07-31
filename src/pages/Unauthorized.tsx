import React from 'react';

const Unauthorized: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-red-200 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Acesso não autorizado</h1>
        <p className="text-red-700 text-lg">
          Você não tem permissão para ver esta página.
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
