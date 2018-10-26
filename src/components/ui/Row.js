import styled from 'styled-components';
import {
  color,
  display,
  flexWrap,
  space,
  width,
} from 'styled-system';

const Row = styled.div(
  color,
  display,
  flexWrap,
  space,
  width,
);

Row.defaultProps = {
  display: ['block', null, 'flex'],
  mx: -4
}

Row.propTypes = {
  ...color.propTypes,
  ...display.propTypes,
  ...flexWrap.propTypes,
  ...space.propTypes,
  ...width.propTypes
}

export default Row;