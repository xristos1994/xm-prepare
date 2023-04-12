import { useAuth } from '../../models/auth/useAuth';
import styles from './Header.module.css';

export function Header() {
  const { token, logout } = useAuth()

  return (
    <header className={styles.header}>
      My Burger

      {
        token ? (
          <button onClick={logout} className={styles.logout}>Logout</button>
        ) : null
      }
    </header>
  );
}