import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
// import Meta from './Meta';

const theme = {
  bg: '#102A43',
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    /* font-size: 10px; */
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    /* font-size: 1.5rem; */
    /* line-height: 2; */
    font-family: "Lato", "proxima-nova", Arial, Helvetica, sans-serif !important;
    background-color: ${theme.bg};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  .row {
    padding: 0;
    margin: 0;
  }
`;

const Page = props => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Meta /> */}
      {props.children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Page;
