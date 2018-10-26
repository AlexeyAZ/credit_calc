const breakpoints = [
  '320px',
  '576px',
  '768px',
  '992px',
  '1200px'
];

const theme = {
  main: {
    WidgetLoading: {
      size: '20px'
    },
    breakpoints,
    space: [
      0,
      2,
      4,
      8,
      16,
      32,
      64,
      128
    ],
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    },
    fonts: {
      BasisGrotesquePro: {
        main: 'BasisGrotesquePro, Arial, Helvetica, sans-serif',
        fallback: 'Arial, Helvetica, sans-serif'
      },
      BasisGrotesqueProMono: {
        main: 'BasisGrotesqueProMono, Arial, Helvetica, sans-serif',
        fallback: 'Arial, Helvetica, sans-serif'
      }
    },
    defaultFont: 'BasisGrotesqueProMono',
    fontSizes: [
      12,
      14,
      16,
      20,
      24,
      32,
      48,
      64
    ],
    colors: {
      green: {
        main: '#00FC00'
      },
      blue: {
        darkest: '#080d26'
      },
      gray: {
        light: '#B7BAD0'
      }
    },
    radii: [0, 2, 4]
  }
};

export { breakpoints };
export default theme;
