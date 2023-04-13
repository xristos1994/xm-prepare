import { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postLogin } from './postLogin';
import { AuthContext } from './AuthContext';

export const useAuth = () => {
  const [error, setError] = useState('');
  const { setToken, token } = useContext(AuthContext);
  const [ credentials, setCredentials ] = useState(null);

  useQuery({
    queryKey: ['login', credentials],
    queryFn: ({queryKey}) => { return  queryKey?.[1] || credentials ? postLogin(queryKey?.[1] || credentials) : null },
    refetchOnWindowFocus: false,
    enabled: !!credentials,
    retry: false,
    onError: (error) => {
      if(error.response?.status === 400) {
        setError('Invalid Credentials');
      } else {
        setError(error.message || 'Something went wrong');
      }
    },
    onSuccess: (data) => {
      if (!data) {
        return;
      }

      if (data.hasOwnProperty('token') && data.token) {
        setToken(data.token);
        localStorage.setItem('auth_token', data.token);
      } else {
        setError('Something went wrong');
      }
    }
  });

  const navigate = useNavigate();

  const login = (credentials) => {
    setError('');
    setCredentials(credentials);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('auth_token');
    navigate('/', { replace: true })
  }

  return {
    token,
    error,
    login,
    logout
  };
};
