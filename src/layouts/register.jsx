import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
} from 'components/dialog';
import { Grid, Button } from '@mui/material';
import TextInputField from 'components/text-input-field';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {
  dialogNames,
  hideVisibility,
  enableVisibility,
} from 'redux/slices/dialog-visibility';

import { registerNewUser } from 'api/user';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    bio: '',
    dob: '',
    address: '',
    image: '',
    institution: '',
    password: '',
    gender: '',
    phoneNumber: '',
  });
  const dispatch = useDispatch();

  const { [dialogNames.register]: registerVisibility } = useSelector(
    (state) => state.dialogVisibility
  );

  const handleClose = () => {
    dispatch(hideVisibility(dialogNames.register));
  };

  const handleDataChange = (key, value) => {
    const userData = { ...newUserData };
    userData[key] = value;
    setNewUserData(userData);
  };

  const handleSubmit = async () => {
    const res = await registerNewUser(newUserData);
    console.log(res);
    if (res) {
      console.log('open login modal');
      dispatch(hideVisibility(dialogNames.register));
      dispatch(enableVisibility(dialogNames.login));
    } else console.log('Error occured');
  };

  return (
    <Dialog
      open={registerVisibility}
      handleClose={handleClose}
      maxWidth="xs"
      style={{ padding: '3rem' }}
    >
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              name="name"
              label="Name"
              placeholder="name"
              required
              fullWidth
              value={newUserData.name}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              name="email"
              label="Email"
              placeholder="email"
              required
              fullWidth
              value={newUserData.email}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              name="bio"
              label="Bio"
              placeholder="bio"
              required
              fullWidth
              value={newUserData.bio}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              name="dob"
              label="Date Of Birth"
              type="date"
              placeholder="Dob"
              required
              fullWidth
              value={newUserData.dob}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              name="address"
              label="Address"
              multiline
              row={2}
              placeholder="type here..."
              required
              fullWidth
              value={newUserData.address}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              name="institution"
              label="Institute"
              placeholder="institute"
              fullWidth
              value={newUserData.institute}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              name="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              placeholder="New password"
              fullWidth
              endIcon={showPassword ? <Visibility /> : <VisibilityOff />}
              endIconOnClick={() => setShowPassword(!showPassword)}
              value={newUserData.password}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              name="gender"
              label="Gender"
              placeholder="Gender"
              fullWidth
              value={newUserData.gender}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              name="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
              fullWidth
              value={newUserData.phoneNumber}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            lg={12}
            md={12}
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '100%',
            }}
          >
            <Button onClick={() => handleClose()} variant="outlined">
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
