import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Owner from './pages/Owner';
import Grocery from './pages/Grocery';
import Maintainer from './pages/Maintainer';
import Rookie from './pages/Rookie';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Dashboard />
      <Navbar />
      <Routes>
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
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
