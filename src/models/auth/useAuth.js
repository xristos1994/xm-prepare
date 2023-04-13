import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { xmServiceBaseUrl } from '../../config';
import { AuthContext } from './AuthContext';

export const useAuth = () => {
  const { setToken, token } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (credentials) => {
    setError('')
    try {
      const res = await fetch(`${xmServiceBaseUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      const loginRes = await res.json();

      if (loginRes.hasOwnProperty('token') && loginRes.token) {
        setToken(loginRes.token);
        localStorage.setItem('auth_token', loginRes.token);
      } else {
        throw new Error(loginRes);
      }

    } catch (error) {
      if (error.message === 'Invalid Credentials') {
        setError('Invalid Credentials');
      } else {
        setError('Something went wrong.');
      }
    }
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
