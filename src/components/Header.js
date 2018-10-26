import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import sizeMe from 'react-sizeme';
import { space, color } from 'styled-system';

import Container from './ui/Container';

const HeaderWrap = styled.div`
  ${props => props.fixed ? css`
    transition: background-color 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  ` : ''};
  ${space};
  ${color};
`;

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      top: 0
    }
  }

  componentDidMount() {
    this.setState({ top: window.scrollY });
    let scroll = false;

    document.addEventListener('scroll', () => {
      if (scroll) {
        clearTimeout(scroll);
      }
      scroll = setTimeout(() => {
        this.setState({ top: window.scrollY });
      }, 100);
    });
  }

  render() {
    const { fixed } = this.props;
    const { top } = this.state;

    return (
      <HeaderWrap py={4} fixed={fixed} bg={fixed && top > 0 ? 'green.main' : 'transparent'}>
        <Container>
          Header
        </Container>
      </HeaderWrap>
    );
  }
}

Header.propTypes = {
  fixed: PropTypes.bool,
};

export default sizeMe({ monitorHeight: true })(Header);