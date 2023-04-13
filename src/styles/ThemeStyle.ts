import {createGlobalStyle} from "styled-components"

export const ThemeStyle = createGlobalStyle/* css */`
  :root {
    --main-bg-color: #dae4f8;
    --main-color: blue;

    --header-bg-color: var(--main-bg-color);
    --header-color: var(--main-color);

    --primary: #65b7ff;
    --primaryContrast: black;
  }
`
