import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Owner from './pages/Owner';
import Grocery from './pages/Grocery';
import Maintainer from './pages/Maintainer';
import Rookie from './pages/Rookie';
import Unauthorized from './pages/Unauthorized';
import { ProtectedRoute } from './routes/ProtectedRoute';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Welcome from './pages/Welcome';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Welcome />
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={['admin', 'owner', 'maintainer', 'rookie']}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={['admin']}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/owner"
          element={
            <ProtectedRoute roles={['owner']}>
              <Owner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/grocery"
          element={
            <ProtectedRoute roles={['admin', 'owner', 'maintainer', 'rookie']}>
              <Grocery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/maintainer"
          element={
            <ProtectedRoute roles={['maintainer']}>
              <Maintainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rookie"
          element={
            <ProtectedRoute roles={['rookie']}>
              <Rookie />
            </ProtectedRoute>
          }
        />

        {/* TODO: Página para acessos não autorizados */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* TODO: Fallback para qualquer rota inexistente */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
