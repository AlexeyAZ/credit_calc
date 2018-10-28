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
      Roboto: {
        main: 'Roboto, Arial, Helvetica, sans-serif',
        fallback: 'Arial, Helvetica, sans-serif'
      },
    },
    defaultFont: 'Roboto',
    fontSizes: [
      12,
      14,
      16,
      20,
      22,
      32,
      48,
      64
    ],
    colors: {
      blue: {
        main: '#4d49f7',
      },
      purple: {
        main: '#6f24e5',
      },
      green: {
        main: '#61dd44',
      },
      orange: {
        main: '#fdcb2f',
      },
      red: {
        main: '#e82d2c',
      },
      gray: {
        light: '#f1f2f4',
        main: '#e8e8e8',
        dark: '#b1aeb9',
        darkest: '#313038',
      }
    },
    radii: [0, 2, 4]
  }
};

export { breakpoints };
export default theme;
