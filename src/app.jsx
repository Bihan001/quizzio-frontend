import { useState, useMemo, createContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateExam from 'pages/exam-creation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline, Paper } from '@mui/material';
import Navbar from 'components/navbar';
import Signup from 'pages/auth/signup';
import Login from 'pages/auth/login';
import User from 'pages/profile/User';
const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const getDesignTokens = (mode) => ({
    typography: {
      htmlFontSize: 10,
      fontFamily: "'Inter', sans-serif",
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#1AB273',
              contrastText: '#fff',
            },
            divider: '#1AB273',
            text: {
              primary: '#000',
              secondary: '#000',
              black: '#000',
              white: '#fff',
            },
          }
        : {
            primary: {
              main: '#1AB273',
              contrastText: '#000',
            },
            divider: '#1AB273',
            background: {
              default: '#111',
              paper: '#111',
            },
            text: {
              primary: '#fff',
              secondary: '#fff',
              black: '#000',
              white: '#fff',
            },
          }),
    },
  });

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const toggleTheme = () => {
    setThemeMode((t) => (t === 'light' ? 'dark' : 'light'));
  };

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={0} style={{ width: '100%', minHeight: '100vh' }}>
        <Navbar toggleTheme={toggleTheme} />
        <Switch>
          <Route path='/signup' exact component={Signup} />
          <Route path='/login' exact component={Login} />
          <Route path='/create-exam' component={CreateExam} />
          <Route path='/profile' component={User} />
        </Switch>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
