import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import keycloak from '../auth/keycloak';

type Props = {
  roles?: string[]; // TODO: lista de roles permitidas (opcional)
  children: ReactNode;
};

export function ProtectedRoute({ roles, children }: Props) {
  // 1. Verifica se o usuário está logado
  if (!keycloak.authenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2. Verifica roles se forem passadas
  if (roles && roles.length > 0) {
    const tokenParsed = keycloak.tokenParsed;
    const userRoles = (tokenParsed?.realm_access?.roles || []) as string[];

    const hasAccess = roles.some((role) => userRoles.includes(role));
    if (!hasAccess) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  // 3. Autenticado e autorizado
  return <>{children}</>;
}
