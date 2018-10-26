import styled from 'styled-components';
import {
  flex,
  order,
  color,
  display,
  space,
  position,
  width
} from 'styled-system';

const Column = styled.div(
  flex,
  order,
  color,
  display,
  space,
  position,
  width
);

Column.defaultProps = {
  flex: '1 1 auto',
  p: 4,
}

Column.propTypes = {
  ...flex.propTypes,
  ...order.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...space.propTypes,
  ...position.propTypes,
  ...width.propTypes,
}

export default Column;