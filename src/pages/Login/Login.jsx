import { useAuth } from '../../models/auth/useAuth';
import styles from './Login.module.css';

export function Login() {
  const { login, error } = useAuth();

  const onSubmit = (event) => {
    event.preventDefault();

    const loginForm = document.forms[0];

    login({
      name: loginForm.name.value,
      password: loginForm.password.value
    });
  }

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={onSubmit}>
         <label>Name</label>
         <input type="text" name="name" required />

         <label>Password</label>
         <input type="password" name="password" required />

         <input type="submit" />
      </form>

      { error ? (
        <div> {error} </div>
      ) : null }
    </div>
  );
}
