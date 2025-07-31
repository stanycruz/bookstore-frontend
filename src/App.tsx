import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Owner from './pages/Owner';
import Grocery from './pages/Grocery';
import Maintainer from './pages/Maintainer';
import Rookie from './pages/Rookie';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import Dashboard from './components/Dashboard';
import { ProtectedRoute } from './routes/ProtectedRoute';
import Layout from './layouts/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
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
              <ProtectedRoute roles={['admin', 'owner']}>
                <Owner />
              </ProtectedRoute>
            }
          />
          <Route
            path="/grocery"
            element={
              <ProtectedRoute roles={['owner', 'grocery', 'maintainer']}>
                <Grocery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/maintainer"
            element={
              <ProtectedRoute roles={['grocery', 'maintainer']}>
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
        </Route>

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
