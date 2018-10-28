import styled from 'styled-components';
import Box from './Box';

const Card = styled(Box)``;

Card.defaultProps = {
  borderRadius: '10px',
  boxShadow: '2px 2px 3px rgba(0,0,0,0.2)',
  p: ['40px 20px 20px', null, '50px 40px 30px'],
  bg: 'white'
};

export default Card;