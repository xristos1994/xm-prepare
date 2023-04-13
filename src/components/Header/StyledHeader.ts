import styled from 'styled-components';

export const StyledHeader = styled.header/* scss */ `
  z-index: 10;
  background-color: var(--header-bg-color);
  color: var(--header-color);
  padding: 0.7rem;
  text-align: center;
  position: sticky;
  top: 0;
  box-shadow: 0px 7px 13px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 7px 13px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 13px -2px rgba(0, 0, 0, 0.75);

  .title {
    font-weight: bold;
    font-size: 2rem;
  }

  .logoutBtn {
    position: absolute;
    right: 0.5rem;
    top: 1rem;

    @media only screen and (max-width: 600px) {
      span {
        display: none;
      }
    }
  }
`;
