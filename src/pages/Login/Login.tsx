import { FC, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../models/auth/useAuth';
import { Snackbar } from '../../components/Snackbar/Snackbar';
// @ts-ignore
import styles from './Login.module.css';

export const Login: FC = () => {
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

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget as HTMLFormElement);

    login({
      name: data.get('name') as string,
      password: data.get('password') as string
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
        <input
          type='text'
          name='name'
          required
          autoComplete='off'
        />

        <br />
        <br />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          required
          autoComplete='off'
        />

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
