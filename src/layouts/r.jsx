import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DialogActions, DialogContent, DialogTitle, Dialog } from 'components/dialog';
import { dialogNames, hideVisibility } from 'redux/slices/dialog-visibility';
import { setUser } from 'redux/slices/auth';
import TextInputField from 'components/text-input-field';
import DatePicker from 'components/date-time-picker/date';
import DropdownField from 'components/dropdown-field';
import { Button } from '@mui/material';
import { registerNewUser } from 'api/user';

const genders = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const Register = () => {
  const dispatch = useDispatch();

  const { [dialogNames.register]: registerVisibility } = useSelector((state) => state.dialogVisibility);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    dob: '',
    address: '',
    image: '',
    password: '',
    institution: '',
    phoneNumber: '',
    gender: genders[0].value,
  });

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleDobChange = (newDate) => {
    setFormData((f) => ({ ...f, dob: '2018-03-29T13:34:00.000' }));
  };

  const handleClose = () => {
    dispatch(hideVisibility(dialogNames.register));
  };

  const handleRegister = async () => {
    try {
      const res = await registerNewUser(formData);
      console.log(res);
      setUser(res.data.data);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={registerVisibility} handleClose={() => handleClose()}>
      <DialogTitle style={{ textAlign: 'center' }}>Welcome Back</DialogTitle>
      <DialogContent>
        <TextInputField
          fullWidth
          label='Name'
          placeholder='John Doe'
          name='name'
          value={formData.name}
          onChange={(e) => handleChange(e)}
          style={{ marginBottom: '1rem' }}
        />
        <TextInputField
          fullWidth
          label='Email'
          placeholder='john@gmail.com'
          name='email'
          value={formData.email}
          onChange={(e) => handleChange(e)}
          style={{ marginBottom: '1rem' }}
        />
        <TextInputField
          fullWidth
          label='Password'
          placeholder='••••••••'
          type='password'
          name='password'
          value={formData.password}
          onChange={(e) => handleChange(e)}
          style={{ marginBottom: '1rem' }}
        />
        <DatePicker
          fullWidth
          label='Date of Birth'
          name='dob'
          value={formData.dob}
          onChange={(newDate) => handleDobChange(newDate)}
          style={{ marginBottom: '1rem' }}
        />
        <TextInputField
          fullWidth
          label='Address'
          placeholder='JohnHouse, JohnStreet, JohnTown, JohnCountry'
          name='address'
          value={formData.address}
          onChange={(e) => handleChange(e)}
          style={{ marginBottom: '1rem' }}
        />
        <TextInputField
          fullWidth
          label='Institution'
          placeholder='University/College/School'
          name='institution'
          value={formData.institution}
          onChange={(e) => handleChange(e)}
          style={{ marginBottom: '1rem' }}
        />
        <TextInputField
          fullWidth
          label='Phone Number'
          placeholder='1234567890'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={(e) => handleChange(e)}
          style={{ marginBottom: '1rem' }}
        />
        <TextInputField
          fullWidth
          label='Bio'
          placeholder='About You'
          name='bio'
          value={formData.bio}
          onChange={(e) => handleChange(e)}
          style={{ marginBottom: '1rem' }}
        />
        <DropdownField label='Gender' fullWidth options={genders} name='gender' value={formData.gender} onChange={(e) => handleChange(e)} />
        <DialogActions>
          <Button style={{ margin: '1rem auto 0 auto' }} variant='contained' onClick={() => handleRegister()}>
            Register
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
