import styled from 'styled-components';
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  display,
  space,
  overflow,
  position,
  top,
  left,
  height,
  width,
  zIndex,
} from 'styled-system';

const css = props => props.css;

const Box = styled('div')(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  display,
  space,
  overflow,
  position,
  top,
  left,
  height,
  width,
  zIndex,
  css
);

Box.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...space.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...top.propTypes,
  ...left.propTypes,
  ...height.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
}

export default Box;