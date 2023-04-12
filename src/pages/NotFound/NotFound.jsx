import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      Not Found <br /><br /><br />



      <NavLink to="/create-burger">Create Burger</NavLink>
    </div>
  );
}
