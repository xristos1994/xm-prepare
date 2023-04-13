import { ReactNode, Context, FC } from 'react';
import { createContext, useState } from 'react';
import { IAuthContextValue } from './interfaces';

interface IProps {
  children: ReactNode
}

export const AuthContext: Context<IAuthContextValue>  = createContext({} as IAuthContextValue);

export const AuthContextProvider: FC<IProps> = ({ children }) => {
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};