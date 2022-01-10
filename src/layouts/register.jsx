
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { DialogActions, DialogContent, DialogTitle, Dialog } from 'components/dialog';
import { dialogNames, hideVisibility, enableVisibility } from 'redux/slices/dialog-visibility';
import { Grid, Button } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import TextInputField from 'components/text-input-field';
import DatePicker from 'components/date-time-picker/date';
import DropdownField from 'components/dropdown-field';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './a.css';

import { registerNewUser } from 'api/user';
import { setUserAndToken } from 'redux/slices/auth';

const genders = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];


const useStyles = makeStyles((theme) => ({
  MaxWidth: {
    maxWidth: '600px !important',
  },
}));


const Register = () => {

  const classes = useStyles();
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
    gender: genders[0].value,
    phoneNumber: '',
  });
  const dispatch = useDispatch();

  const { [dialogNames.register]: registerVisibility } = useSelector((state) => state.dialogVisibility);

  const handleClose = () => {
    dispatch(hideVisibility(dialogNames.register));
  };

  const handleDataChange = (key, value) => {
    setNewUserData((u) => ({ ...u, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const body = JSON.parse(JSON.stringify(newUserData));
      body.dob = '2018-03-29T13:34:00.000';
      const res = await registerNewUser(body);
      console.log(res);
      dispatch(setUserAndToken({ user: res.data.data.user, token: res.data.data.token }));
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={registerVisibility} handleClose={handleClose} maxWidth='xs' style={{ padding: '3rem' }}   >

      <DialogTitle style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold' }} > Register </DialogTitle>

      <DialogContent  >
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} style={{ margin: "auto" }}>
            <TextInputField
              name='name'
              label='Name'
              placeholder='John Doe'
              fullWidth={true}
              required
              value={newUserData.name}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={5} style={{ margin: "auto" }} >
            <TextInputField
              name='email'
              label='Email'
              placeholder='johndoe@gmail.com'
              fullWidth
              required
              value={newUserData.email}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={5} style={{ margin: "auto" }} >
            <TextInputField
              name='password'
              type={showPassword ? 'text' : 'password'}
              label='Password'
              placeholder='********'
              fullWidth
              required
              endIcon={showPassword ? <Visibility /> : <VisibilityOff />}
              endIconOnClick={() => setShowPassword(!showPassword)}
              value={newUserData.password}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={5} style={{ margin: "auto" }} >
            <TextInputField
              name='phoneNumber'
              label='Phone Number'
              placeholder='+91-1234567890'
              fullWidth
              required
              value={newUserData.phoneNumber}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={5} style={{ margin: "auto" }} >
            <DatePicker
              fullWidth
              label='Date of Birth'
              name='dob'
              required
              value={newUserData.dob}
              onChange={(newDate) => handleDataChange('dob', newDate)}
            />
          </Grid>
          <Grid item xs={12} md={5} style={{ margin: "auto" }} >
            <TextInputField
              name='address'
              label='Address'
              placeholder='JohnHouse, JohnStreet, JohnTown, JohnCountry'
              fullWidth
              required
              value={newUserData.address}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={5} style={{ margin: "auto" }} >
            <TextInputField
              name='institution'
              label='Institute'
              placeholder='University/College/School'
              fullWidth
              required
              value={newUserData.institute}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={5} style={{ margin: "auto" }} >
            <DropdownField
              label='Gender'
              fullWidth
              options={genders}
              name='gender'
              required
              value={newUserData.gender}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} ml={3} style={{ margin: 'auto' }} >
            <TextInputField
              name='bio'
              label='Bio'
              multiline
              row={3}
              placeholder='About you'
              fullWidth={true}
              value={newUserData.bio}
              onChange={(e) => handleDataChange(e.target.name, e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions>
          <Button style={{ margin: '1rem auto 0 auto' }} variant='contained' onClick={() => handleSubmit()}>
            Register
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
