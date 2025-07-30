import { Link } from 'react-router-dom';
import keycloak from '../auth/keycloak';

const Navbar = () => {
  const userName = keycloak.tokenParsed?.name || 'Usuário';
  const userRoles = (keycloak.tokenParsed?.realm_access?.roles || []) as string[];
  const hasRole = (role: string) => userRoles.includes(role);

  const logout = () => keycloak.logout({ redirectUri: window.location.origin });

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex items-center gap-4 shadow-md">
      <span className="font-semibold">Olá, {userName}</span>

      <div className="flex gap-3">
        {hasRole('admin') && <Link to="/admin" className="hover:underline">Admin</Link>}
        {hasRole('owner') && <Link to="/owner" className="hover:underline">Owner</Link>}
        {hasRole('maintainer') && <Link to="/maintainer" className="hover:underline">Maintainer</Link>}
        {hasRole('rookie') && <Link to="/rookie" className="hover:underline">Rookie</Link>}
        {(hasRole('admin') || hasRole('owner') || hasRole('maintainer') || hasRole('rookie')) && (
          <Link to="/grocery" className="hover:underline">Grocery</Link>
        )}
      </div>

      <button
        onClick={logout}
        className="ml-auto bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
