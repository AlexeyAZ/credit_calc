import React from 'react';

import Container from '../ui/Container';
import Row from '../ui/Row';
import Column from '../ui/Column';

const Index = () =>
  <Container height={2000}>
    <Row>
      <Column width={[1, null, 1/3]} bg="green.main">
        1
        <br/>
        Styled-system is a collection of utility functions that add style props to your React components, which allows for controlling styles based on global theme constants.
      </Column>
      <Column width={[1, null, 1/3]} order={[2, null, 3, 2]}>
        2
      </Column>
      <Column width={[1, null, 1/3]} order={[3, null, 2, 3]}>
        3
      </Column>
    </Row>
  </Container>

export default Index;