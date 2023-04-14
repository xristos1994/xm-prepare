import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { IAuth } from './interfaces';

export const useAuth: () => IAuth = () => {
  const { setToken, token } = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    setToken('');
    localStorage.removeItem('credentials');
    navigate('/', { replace: true });
  };

  return {
    token,
    logout,
  };
};
