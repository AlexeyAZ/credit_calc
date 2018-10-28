import styled from 'styled-components';
import {
  borders,
  borderColor,
  color,
  space,
  height,
} from 'styled-system';

const css = props => props.css;

const Divider = styled('div')(
  borders,
  borderColor,
  color,
  space,
  height,
  css,
);

Divider.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...height.propTypes,
}

Divider.defaultProps  = {
  height: '1px',
  bg: 'gray.light',
  m: '10px 0'
}

export default Divider;