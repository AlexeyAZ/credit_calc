import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import 'rc-slider/assets/index.css';

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
    background-color: ${props => props.theme.colors.gray.light};
    color: ${props => props.theme.colors.gray.darkest};
    font-family: 'Roboto';
    font-size: ${props => props.theme.fontSizes[2]}px;
    line-height: 1.2;
  }

  .root {}

  .rc-slider-mark-text {
    user-select: none;
  }
`;

export default GlobalStyle;