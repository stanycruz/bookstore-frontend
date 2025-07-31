import { Link } from 'react-router-dom';
import keycloak from '../auth/keycloak';

const Navbar = () => {
  const userName = keycloak.tokenParsed?.name || 'Usuário';
  const userRoles = (keycloak.tokenParsed?.realm_access?.roles || []) as string[];
  const hasRole = (role: string) => userRoles.includes(role);
  const logout = () => keycloak.logout({ redirectUri: window.location.origin });

  return (
    <header className="bg-zinc-900 text-white shadow-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-lg font-semibold">Bem-vindo, {userName}</span>

        <nav className="flex gap-4 text-sm font-medium">
          {hasRole('admin') && <Link to="/admin" className="hover:text-purple-400">Admin</Link>}
          {hasRole('owner') && <Link to="/owner" className="hover:text-purple-400">Owner</Link>}
          {hasRole('maintainer') && <Link to="/maintainer" className="hover:text-purple-400">Maintainer</Link>}
          {hasRole('rookie') && <Link to="/rookie" className="hover:text-purple-400">Rookie</Link>}
          {(hasRole('admin') || hasRole('owner') || hasRole('maintainer') || hasRole('rookie')) && (
            <Link to="/grocery" className="hover:text-purple-400">Grocery</Link>
          )}
          <button
            onClick={logout}
            className="ml-4 px-3 py-1 rounded bg-purple-600 hover:bg-purple-700 transition"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
