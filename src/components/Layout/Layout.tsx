import { ReactNode, FC } from 'react';
import { Header } from '../Header/Header';
import { StyledLayout } from './StyledLayout';

interface IProps {
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main className='main'>{children}</main>
    </StyledLayout>
  );
};
