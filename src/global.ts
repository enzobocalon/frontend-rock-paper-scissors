import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body{
    height: 100vh;
    width: 100vw;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`