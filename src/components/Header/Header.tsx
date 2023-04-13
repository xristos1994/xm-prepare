import { FC } from 'react';
import { classnames } from '../../utils/classnames/classnames';
import { useAuth } from '../../models/auth/useAuth';
// @ts-ignore
import styles from './Header.module.css';

export const Header: FC = () => {
  const { token, logout } = useAuth();

  return (
    <header className={styles.header}>
      <span className={styles.title}>My Burger</span>

      {token ? (
        <button
          title='Logout'
          onClick={logout}
          className={classnames(styles.logoutBtn, 'linkBtn')}
        >
          &#x23FB; <span>Logout</span>
        </button>
      ) : null}
    </header>
  );
};
