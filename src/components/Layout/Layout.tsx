import { ReactNode, FC } from 'react';
import { Header } from '../Header/Header';
import styles from './Layout.module.css';

interface IProps {
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
