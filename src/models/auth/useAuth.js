import { useContext, useState } from 'react';
import { xmServiceBaseUrl } from '../../config';
import { AuthContext } from './AuthContext';

export const useAuth = () => {
  const { setToken, token } = useContext(AuthContext)
  const [error, setError] = useState('');

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

  return {
    token,
    error,
    login,
  };
};
