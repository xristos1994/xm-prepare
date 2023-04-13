import { Header } from '../Header/Header';
import styles from './Layout.module.css';

export function Layout({children}) {
  console.log('Layout');
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}