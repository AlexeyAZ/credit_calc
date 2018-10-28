import styled from 'styled-components';
import {
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  color,
  space,
  position,
} from 'styled-system';

const Text = styled('p')(
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  color,
  space,
  position,
)

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...position.propTypes,
};

Text.defaultProps = {
  mb: '0.5em',
};

export default Text;