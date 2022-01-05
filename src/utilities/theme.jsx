
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
    ...(mode === 'light' ? {
      primary: {
        main: '#1AB273',
        contrastText: '#fff',
        grey: '#bab5b5',
      },
      text: {
        primary: '#000',
        secondary: '#fff',
      },
      divider: '#1AB273',
      background: {
        default: '#f9f9f9',
      },
    }

      :

      {/* 0dc7ca  00dbe2 */
        primary: {
          main: '#ffd670',
          contrastText: '#000',
          grey: '#bab5b5',
        },
        text: {
          primary: '#fff',
          secondary: '#000',
        },
        divider: '#ffd670',
        background: {
          default: '#111',
          paper: '#111',
        },
      }),
  },
});

export default getDesignTokens;
