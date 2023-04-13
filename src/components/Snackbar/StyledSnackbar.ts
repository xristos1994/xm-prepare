import styled from 'styled-components';

export const StyledSnackbar = styled.div/* scss */`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1;

  &.error {
    background-color: lightcoral;
  }

  &.warning {
    background-color: orange;
  }

  &.info {
    background-color: lightblue;
  }

  &.success {
    background-color: lightgreen;
  }

  .cloceBtn {
    position: absolute;
    top: 0.25rem;
    right: 0.4rem;
  }
`;
