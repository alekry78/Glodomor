import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif !important;
   -moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
    width:100vw;
    height:100vh;
  }
  html{
    box-sizing:border-box !important;
    -moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
  }
  div#root{
  width:100%;
  height:100%;
  }
`;

export default GlobalStyle;