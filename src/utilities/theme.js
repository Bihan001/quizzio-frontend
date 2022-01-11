

const PRIMARY_COLOR = '#1ab273';
const SECONDARY_COLOR = '#ffd670';

const getDesignTokens = (mode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1400,
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "'Inter', sans-serif",
  },
  palette: {
    mode,
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    ...(mode === 'light'
      ? {
        primary: {
          main: PRIMARY_COLOR,
          contrastText: '#fff',
          grey: '#bab5b5',
        },
        text: {
          primary: '#000',
          secondary: '#555',
        },
        divider: PRIMARY_COLOR,
        background: {
          default: '#fff',
        },
      }

      :

      {
        primary: {
          main: SECONDARY_COLOR,
          contrastText: '#000',
          grey: '#bab5b5',
        },
        text: {
          primary: '#fff',
          secondary: '#ddd',
        },
        divider: SECONDARY_COLOR,
        background: {
          default: '#111',
          paper: '#111',
        },
      }),
  },
});


export default getDesignTokens;
