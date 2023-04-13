import styled from 'styled-components';
import { deviceMediaQuery } from '../../styles/breakpoints';

export const StyledIngredientsList = styled.div/* scss */`
  border: 1px solid lightgrey;
  width: 20rem;
  border-radius: 0.5rem;
  height: fit-content;
  overflow-y: auto;
  position: sticky;
  top: 4.5rem;
  background-color: white;
  z-index: 2;

  .title {
    font-size: 1.5rem;
    font-weight: bolder;
    padding: 0.5rem;
    border-bottom: 2px solid black;
  }

  .ingredients {
    max-height: calc(80vh - 6rem);
    overflow-y: auto;

    .ingredientBtn {
      display: flex;
      gap: 0.25rem;
      width: 100%;
      padding: 0.5rem;
      font-size: 1.2rem;
      border-bottom: 1px solid lightgrey;
      transition: background-color 0.4s;
      justify-content: space-between;

      &:hover,
      &:focus-visible {
        background-color: lightgray;
      }

      .info {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        img {
          width: 1rem;
          height: 1rem;
          display: inline;
        }

        .name::first-letter {
          text-transform: uppercase;
        }
      }
    }
  }

  .clearBurgerBtn {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: 0.5rem;
    display: block;
  }

  .userHelp {
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-top: 1px dashed lightgray;
  }

  @media only screen and ${deviceMediaQuery.mobile} {
    max-height: unset;
    width: 100%;

    .ingredients {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      padding: 0.5rem;
      overflow-y: auto;
      max-height: 20vh;

      .ingredientBtn {
        border: 1px solid lightgray;
        border-radius: 0.5rem;
        width: fit-content;
        gap: 1rem;
      }
    }
  }
`;
