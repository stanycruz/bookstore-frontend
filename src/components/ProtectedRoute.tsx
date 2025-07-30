import { Navigate } from 'react-router-dom';
import keycloak from '../auth/keycloak';

type Props = {
  roles: string[];
  children: React.ReactNode;
};

export function ProtectedRoute({ roles, children }: Props) {
  const tokenParsed = keycloak.tokenParsed;

  const userRoles = (tokenParsed?.realm_access?.roles || []) as string[];
  const hasAccess = roles.some(role => userRoles.includes(role));

  if (!hasAccess) return <Navigate to="/" replace />;

  return <>{children}</>;
}
