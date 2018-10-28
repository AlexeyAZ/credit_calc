import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutWrap = styled.div``;

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <LayoutWrap>
        {children}
      </LayoutWrap>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;