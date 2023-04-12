import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './../Login/Login';
import { BurgerCreator } from './../BurgerCreator/BurgerCreator';
import { NotFound } from './../NotFound/NotFound';
import { ProtectedRoute } from './ProtectedRoute';
import { Layout } from '../../components/Layout/Layout';

export function Routing() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/' element={<Login />} />
          <Route
            path='create-burger'
            element={
              <ProtectedRoute>
                <BurgerCreator />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
