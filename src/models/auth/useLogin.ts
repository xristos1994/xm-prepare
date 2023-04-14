import { useContext, useState } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { tokenRetrievalInterval } from '../../config';
import { postLogin } from './postLogin';
import { AuthContext } from './AuthContext';
import { ICredentials, ILoginSuccessData, ILogin } from './interfaces';

const getGredentialsFromLocalStorage: () => ICredentials | null = () => {
  const localStorageCredentials = localStorage.getItem('credentials');

  if (localStorageCredentials) {
    return JSON.parse(localStorageCredentials) as ICredentials
  }

  return null;
}

export const useLogin: () => ILogin = () => {
  const [error, setError] = useState('');
  const { setToken, token } = useContext(AuthContext);
  const [credentials, setCredentials] = useState<ICredentials | null>(getGredentialsFromLocalStorage());

  const { isLoading, isFetching } = useQuery({
    queryKey: ['login'],
    queryFn: () => {
      return postLogin(credentials as ICredentials);
    },
    // refetchOnWindowFocus: false,
    enabled: !!credentials,
    retry: false,
    refetchInterval: token && credentials ? tokenRetrievalInterval : false,
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
        // FIXME: It is a terrible idea to store credentials in localStorage. It is just for the exercise as there is no other way to get a new token
        localStorage.setItem('credentials', JSON.stringify(credentials));
      } else {
        setError('Something went wrong');
      }
    },
  });

  const login = (credentials: ICredentials) => {
    setError('');
    setCredentials(credentials);
  };

  return {
    error,
    login,
    isLoading: isLoading && isFetching,
  };
};
