import { useState, useMemo, useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import CreateExam from 'pages/exam-creation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Paper, Slide } from '@mui/material';
import Navbar from 'components/navbar';
import Register from 'layouts/register';
import Login from 'layouts/login';
import User from 'pages/profile/User';
import Home from 'pages/home';
import GiveExam from 'pages/give-exam';
import ExamDetails from 'pages/exam-details';
import getDesignTokens from 'utilities/theme';
import { getCurrentUser } from 'api/user';
import { setUserAndToken } from 'redux/slices/auth';
import ConfirmationDialog from 'components/dialog/confirmation';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const res = await getCurrentUser();
      dispatch(setUserAndToken({ user: res.data.data }));
    } catch (err) {
      console.error(err);
    }
  };

  // The dark mode switch would invoke this method
  const colorMode = useMemo(
    () => ({
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
      <SnackbarProvider
        maxSnack={10}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        TransitionComponent={Slide}
      >
        <CssBaseline />
        <Paper elevation={0} style={{ width: '100%', minHeight: '100vh', height: '100%' }}>
          {!location.pathname.includes('/give') && <Navbar toggleTheme={toggleTheme} />}
          <Login />
          <Register />
          <ConfirmationDialog />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/create-exam' component={CreateExam} />
            <Route exact path='/profile' component={User} />
            <Route exact path='/exam/:id' component={ExamDetails} /> {/*  /exam/:id  */}
            <Route exact path='/exam/:id/give' component={GiveExam} />
            <Redirect to='/' />
          </Switch>
        </Paper>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
