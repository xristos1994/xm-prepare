import styled from 'styled-components';

export const StyledBurgerCreator = styled.div/* scss */`
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
}
`;


