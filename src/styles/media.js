import { css } from 'styled-components';
import { breakpoints } from './theme';

const media = breakpoints.map(breakpoint =>
  (...args) => css`
    @media (min-width: ${breakpoint}) {
      ${css(...args)}
    }
  `
);

export default media;
