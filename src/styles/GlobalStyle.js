import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  html,
  body {
    font-family: 'BasisGrotesquePro';
  }

  .root {}
`;

export default GlobalStyle;