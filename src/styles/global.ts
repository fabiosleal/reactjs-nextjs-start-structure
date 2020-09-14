import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font: 400 62.5% Roboto, sans-serif;
    /** 1rem = 10px */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;
