import React from 'react'

export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 text-red-700 text-xl font-semibold">
      Acesso não autorizado. Você não tem permissão para ver esta página.
    </div>
  );
}

