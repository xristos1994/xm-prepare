import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../models/auth/useAuth';
import { useLogin } from '../../models/auth/useLogin';

interface IProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<IProps> = ({ children }) => {
  const { token } = useAuth();
  useLogin();

  if (!token) {
    return <Navigate to='/' replace />;
  }

  return <>{children}</>;
};
