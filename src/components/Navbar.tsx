import { Link } from 'react-router-dom';
import keycloak from '../auth/keycloak';

const Navbar = () => {
  const userName = keycloak.tokenParsed?.name || 'Usuário';
  const userRoles = (keycloak.tokenParsed?.realm_access?.roles || []) as string[];

  const hasRole = (role: string) => userRoles.includes(role);

  const logout = () => {
    keycloak.logout({ redirectUri: window.location.origin });
  };

  return (
    <nav style={{ padding: '1rem', background: '#eee', display: 'flex', gap: '1rem' }}>
      <span><strong>Olá, {userName}</strong></span>

      {hasRole('admin') && <Link to="/admin">Admin</Link>}
      {hasRole('owner') && <Link to="/owner">Owner</Link>}
      {hasRole('maintainer') && <Link to="/maintainer">Maintainer</Link>}
      {hasRole('rookie') && <Link to="/rookie">Rookie</Link>}
      {(hasRole('admin') || hasRole('owner') || hasRole('maintainer') || hasRole('rookie')) && (
        <Link to="/grocery">Grocery</Link>
      )}

      <button style={{ marginLeft: 'auto' }} onClick={logout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
