import { FC, FormEvent, useContext } from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../models/auth/AuthContext';
import { Snackbar } from '../../components/Snackbar/Snackbar';
import { StyledLogin } from './StyledLogin';
import { useLogin } from '../../models/auth/useLogin';

export const Login: FC = () => {
  const { login, error, isLoading } = useLogin();
  const [hasError, setHasError] = useState(!!error);
  const { token } = useContext(AuthContext);

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
      password: data.get('password') as string,
    });
  };

  if (token) {
    return <Navigate to='/create-burger' replace />;
  }

  return (
    <StyledLogin>
      <h1>Login To My Burger</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' required autoComplete='off' />

        <br />
        <br />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' required autoComplete='off' />

        <br />
        <br />
        <br />

        <input type='submit' className='primaryBtn' disabled={isLoading} value={isLoading ? 'LOADING...' : 'LOGIN'}/>
      </form>

      {hasError ? (
        <Snackbar
          onClose={() => setHasError(false)}
          text={error}
          type='error'
        />
      ) : null}
    </StyledLogin>
  );
};
