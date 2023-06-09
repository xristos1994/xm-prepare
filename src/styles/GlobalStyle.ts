import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle/* css */`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: Arial, sans-serif;
    background: var(--main-bg-color);
    color: var(--main-color);
  }

  * {
    box-sizing: border-box;
  }

  button,
  input[type='submit'] {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    text-align: inherit;
    outline: none;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable 'input' types in iOS */
    -webkit-appearance: none;

    cursor: pointer;
  }

  button:disabled,
  input[type='submit']:disabled {
    opacity: 0.6;
    cursor: default;
  }

  button::-moz-focus-inner,
  input[type='submit']::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  .linkBtn:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .linkBtn:focus-visible,
  input[type='submit']:focus-visible {
    border: 2px solid currentColor;
  }

  label {
    font-size: 1.5rem;
  }

  input {
    height: 2rem;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    background: var(--main-bg-color);
  }
`
