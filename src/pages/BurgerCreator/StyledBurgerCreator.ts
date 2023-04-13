import styled from 'styled-components';
import { deviceMediaQuery } from '../../styles/breakpoints';

export const StyledBurgerCreator = styled.div/* scss */`
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  @media only screen and ${deviceMediaQuery.mobile} {
    flex-direction: column;
    align-items: center;
}
`;


