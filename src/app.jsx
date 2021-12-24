import { useState, useMemo, createContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateExam from 'pages/exam-creation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline, Paper } from '@mui/material';
import Navbar from 'components/navbar';
import Signup from 'pages/auth/signup';
import Login from 'pages/auth/login';
import User from 'pages/profile/User';
import Home from 'pages/home';
import GiveExam from 'pages/give-exam';
import ExamDetails from 'pages/exam-details';


const App = () => {
  const [themeMode, setThemeMode] = useState('light');

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
      }, ...(mode === 'light' ?
        {
          primary: {
            main: '#1AB273',
            contrastText: '#fff',
            grey: '#bab5b5  ',
          },
          // secondary: {
          //   light: '#F5F5F5',
          // },
          divider: '#1AB273',
        }

        :

        {
          primary: {
            main: '#0dc7ca',
            contrastText: '#000',
          },
          divider: '#00dbe2',
          background: {
            default: '#111',
            paper: '#111',
          },
        }),
    },
  });

  // The dark mode switch would invoke this method
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const toggleTheme = () => {
    setThemeMode((t) => (t === 'light' ? 'dark' : 'light'));
  };

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Paper elevation={0} style={{ width: '100%', minHeight: '100vh', height: '100%' }}>
        <Navbar toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/login' exact component={Login} />
          <Route path='/create-exam' component={CreateExam} />
          <Route path='/exam-details' component={ExamDetails} />
          <Route path='/profile' component={User} />
          <Route path='/exam/:id/give' component={GiveExam} />
        </Switch>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
