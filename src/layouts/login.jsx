import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { DialogActions, DialogContent, DialogTitle, Dialog } from 'components/dialog';
import { dialogNames, hideVisibility } from 'redux/slices/dialog-visibility';
import { setUserAndToken } from 'redux/slices/auth';
import TextInputField from 'components/text-input-field';
import { loginWithEmailAndPassword } from 'api/user';

const Login = () => {
  const dispatch = useDispatch();

  const { [dialogNames.login]: loginVisibility } = useSelector((state) => state.dialogVisibility);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    dispatch(hideVisibility(dialogNames.login));
  };

  const handleLogin = async () => {
    try {
      const res = await loginWithEmailAndPassword(email, password);
      console.log(res);
      dispatch(setUserAndToken({ user: res.data.data.user, token: res.data.data.token }));
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={loginVisibility} maxWidth='lg' handleClose={() => handleClose()}>
      <DialogTitle style={{ textAlign: 'center' }}>Welcome Back</DialogTitle>
      <DialogContent>
        <TextInputField
          fullWidth
          label='Email'
          placeholder='john@gmail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '1rem' }}
        />
        <TextInputField
          fullWidth
          label='Password'
          placeholder='••••••••'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <DialogActions>
          <Button style={{ margin: '1rem auto 0 auto' }} variant='contained' onClick={() => handleLogin()}>
            Login
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
