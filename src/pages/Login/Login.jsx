import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../models/auth/useAuth';
import { Snackbar } from '../../components/Snackbar/Snackbar';
import styles from './Login.module.css';

export function Login() {
  const { login, error, token } = useAuth();
  const [hasError, setHasError] = useState(!!error);

  useEffect(() => {
    setHasError(!!error);
  }, [error, setHasError]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setHasError(false);
      }, 3000);
    }
  }, [error, setHasError]);

  const onSubmit = (event) => {
    event.preventDefault();

    const loginForm = document.forms[0];

    login({
      name: loginForm.name.value,
      password: loginForm.password.value,
    });
  };

  if (token) {
    return <Navigate to='/create-burger' replace />;
  }

  return (
    <div className={styles.loginContainer}>
      <h1>Login To My Burger</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' required />

        <br />
        <br />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' required />

        <br />
        <br />
        <br />

        <input type='submit' className='primaryBtn' />
      </form>

      {hasError ? (
        <Snackbar
          onClose={() => setHasError(false)}
          text={error}
          type='error'
        />
      ) : null}
    </div>
  );
}
