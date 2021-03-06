import styled from 'styled-components';
import {
  borders,
  borderColor,
  color,
  display,
  space,
  overflow,
  position,
  height,
  width,
  maxWidth,
} from 'styled-system';

const Container = styled.div(
  borders,
  borderColor,
  color,
  display,
  space,
  overflow,
  position,
  height,
  width,
  maxWidth
);

Container.defaultProps = {
  px: 4,
  mx: 'auto',
  maxWidth: '1024px',
};

Container.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...space.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...height.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
}

export default Container;