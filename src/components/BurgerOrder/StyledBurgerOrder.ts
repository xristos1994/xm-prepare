import styled from 'styled-components';

export const StyledBurgerOrder = styled.div/* scss */`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;

  img {
    width: 100%;
  }

  /* NOTE: Every ingredient and the bottom bun have to have margin-top: -1.5rem so as not to have empty space between each other */

  .burgerMarginAdjustment {
    margin-top: -1.5rem;
  }

  .ingredients {
    .ingredient {
      transition: transform 0.2s;
    }

    &:hover, &:focus-within {
      .ingredient {
        opacity: 0.6;
        transform: scale(1);

        &:hover, &:focus {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }
  }

  .bun {
    z-index: 1;
  }
`;