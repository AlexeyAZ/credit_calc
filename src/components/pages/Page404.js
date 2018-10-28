import React from 'react';

import Container from '../ui/Container';
import Row from '../ui/Row';
import Column from '../ui/Column';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

const Page404 = () => {
  return (
    <Container>
      <Row>
        <Column width={1}>
          <Heading textAlign="center">
            404
          </Heading>
          <Text textAlign="center">
            Page not found
          </Text>
        </Column>
      </Row>
      
    </Container>
  );
};

Page404.propTypes = {
  
};

export default Page404;