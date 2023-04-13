import { useContext, useState } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postLogin } from './postLogin';
import { AuthContext } from './AuthContext';

export interface ICredentials {
  name: string;
  password: string;
}

export interface ILoginSuccessData {
  token: string;
}

interface IAuth {
  token: string;
  error: string;
  login: (credentials: ICredentials) => void;
  logout: () => void;
}

export const useAuth: () => IAuth = () => {
  const [error, setError] = useState('');
  const { setToken, token } = useContext(AuthContext);
  const [credentials, setCredentials] = useState<ICredentials | null>(null);

  useQuery({
    queryKey: ['login', credentials],
    queryFn: ({ queryKey }) => {
      return queryKey?.[1] || credentials
        ? postLogin(queryKey?.[1] as ICredentials || credentials)
        : null;
    },
    refetchOnWindowFocus: false,
    enabled: !!credentials,
    retry: false,
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        setError('Invalid Credentials');
      } else {
        setError(error.message || 'Something went wrong');
      }
    },
    onSuccess: (data: ILoginSuccessData) => {
      if (!data) {
        return;
      }

      if (data.hasOwnProperty('token') && data.token) {
        setToken(data.token);
        localStorage.setItem('auth_token', data.token);
      } else {
        setError('Something went wrong');
      }
    },
  });

  const navigate = useNavigate();

  const login = (credentials: ICredentials) => {
    setError('');
    setCredentials(credentials);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('auth_token');
    navigate('/', { replace: true });
  };

  return {
    token,
    error,
    login,
    logout,
  };
};
