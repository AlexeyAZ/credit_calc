import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import FontFaceObserver from 'fontfaceobserver';

const FontContext = React.createContext({
  fonts: {}
});

const withFont = Component =>
  function FontComponent(props) {
    return (
      <FontContext.Consumer>
        {value =>
          <Component fonts={value.fonts} {...props} />
        }
      </FontContext.Consumer>
    )
  }

class FontProvider extends Component {
  static propTypes = {
    fonts: PropTypes.array,
    children: PropTypes.node
  }

  constructor(props) {
    super(props);

    this.state = {
      fonts: {},
      fontsLoaded: false
    };
  }

  componentDidMount() {
    const { fonts } = this.props;
    const siteFonts = {};

    fonts.forEach(font => {
      siteFonts[font] = false;
    });

    this.setState({ fonts: siteFonts });
  }

  componentDidUpdate() {
    const { fontsLoaded } = this.state;

    if (!fontsLoaded) {
      for (const key in this.state.fonts) {
        const font = new FontFaceObserver(key);

        font.load().then(() => {
          const newState = Object.assign({}, this.state.fonts);
          newState[key] = true;

          this.setState({ fonts: newState });
        });
      }
      this.setState({ fontsLoaded: true });
    }
  }

  render() {
    const {children} = this.props;
    return (
      <FontContext.Provider value={this.state}>
        {children}
      </FontContext.Provider>
    )
  }
}

const StyledFontLoader = styled.div`
  font-family: ${props => props.font};
`;

const FontLoader = ({ theme, children, fonts, font = theme.defaultFont, ...props }) => {
  let fontFamily = theme.fonts[font].fallback;

  if (font && fonts && fonts[font]) {
    fontFamily = fonts[font] ? theme.fonts[font].main : theme.fonts[font].fallback;
  }
  return (
    <StyledFontLoader font={fontFamily} {...props}>
      {children}
    </StyledFontLoader>
  );
};

export { FontContext, FontProvider, withFont };
export default withTheme(withFont(FontLoader));