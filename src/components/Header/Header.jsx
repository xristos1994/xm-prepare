import { classnames } from '../../utils/classnames/classnames'
import { useAuth } from '../../models/auth/useAuth';
import styles from './Header.module.css';

export function Header() {
  const { token, logout } = useAuth()

  return (
    <header className={styles.header}>
      <span className={styles.title}>My Burger</span>

      {
        token ? (
          <button title="Logout" onClick={logout} className={classnames(styles.logoutBtn, 'linkBtn')}>&#x23FB; <span>Logout</span></button>
        ) : null
      }
    </header>
  );
}