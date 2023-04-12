import { Navigate } from 'react-router-dom';
import { useAuth } from '../../models/auth/useAuth';

export function ProtectedRoute({ children }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};