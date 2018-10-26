import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Header from './Header';

const LayoutWrap = styled.div`
  ${props => props.fixedHeader ? css`
    padding-top: ${props.headerHeight}px;
  ` : ''};
`;

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      headerHeight: 0
    }
  }
  
  onSize = size => {
    const { headerHeight } = this.state;
    const {fixedHeader } = this.props;

    if (fixedHeader && size.height !== headerHeight) {
      this.setState({headerHeight: size.height})
    }
  }

  render() {
    const { children, fixedHeader } = this.props;
    const { headerHeight } = this.state;
    return (
      <LayoutWrap headerHeight={headerHeight} fixedHeader={fixedHeader} >
        <Header fixed={fixedHeader} onSize={this.onSize}/>
        {children}
      </LayoutWrap>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  fixedHeader: PropTypes.bool,
};

export default Layout;