import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Owner from './pages/Owner';
import Grocery from './pages/Grocery';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
            <ProtectedRoute roles={['maintainer', 'admin']}>
              <Grocery />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
