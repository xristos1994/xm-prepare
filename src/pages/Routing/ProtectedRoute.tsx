import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../models/auth/useAuth';

interface IProps {
  children: ReactNode
}

export const ProtectedRoute: FC<IProps> = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};