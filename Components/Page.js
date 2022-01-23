import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
// import Meta from './Meta';

const theme = {
  bg: '#102A43',
  primary: "#27AB83",
  primaryLight: "#65D6AD",
  neutral: "#D9E2EC"
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    height: 100vh;
    padding: 0;
    margin: 0 0 60px 0;
    font-family: "Lato", "proxima-nova", Arial, Helvetica, sans-serif !important;
    background-color: ${theme.bg};
    background-image: url("./background.png");
    background-size: cover;
    background-repeat: no-repeat;
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
