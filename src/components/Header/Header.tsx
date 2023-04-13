import { FC } from 'react';
import { useAuth } from '../../models/auth/useAuth';
import { StyledHeader } from './StyledHeader';

export const Header: FC = () => {
  const { token, logout } = useAuth();

  return (
    <StyledHeader>
      <span className='title'>My Burger</span>

      {token ? (
        <button
          title='Logout'
          onClick={logout}
          className={'logoutBtn linkBtn'}
        >
          &#x23FB; <span>Logout</span>
        </button>
      ) : null}
    </StyledHeader>
  );
};
