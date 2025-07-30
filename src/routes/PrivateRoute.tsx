import { Navigate } from 'react-router-dom';
import keycloak from '../auth/keycloak';

interface PrivateRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export function PrivateRoute({ allowedRoles, children }: PrivateRouteProps) {
  const userRoles: string[] = keycloak.tokenParsed?.realm_access?.roles ?? [];

  const isAuthorized = allowedRoles.some(role => userRoles.includes(role));

  return isAuthorized ? <>{children}</> : <Navigate to="/unauthorized" replace />;
}
