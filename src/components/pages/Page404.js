import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

import Container from '../ui/Container';

const Page404 = props => {
  return (
    <Container>
      <p>
        404
      </p>
      <p>
        Page not found
      </p>
    </Container>
  );
};

Page404.propTypes = {
  
};

export default Page404;