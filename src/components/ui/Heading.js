import styled from 'styled-components';
import Text from './Text';

const Heading = styled(Text)``;

Heading.defaultProps = {
  as: 'h2',
  mb: '1em',
  fontSize: 3,
  fontWeight: 'bold',
};

export default Heading;