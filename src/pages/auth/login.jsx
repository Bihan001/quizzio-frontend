import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Divider, FormControlLabel, Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonIcon from '@mui/icons-material/Person';
import './login.css';

const Login = () => {
  return (
    <div>
      <div classname='icon'>
        <div classname='icon_class'>
          <PersonIcon fontsize='large' />
        </div>
        <div classname='text'>Log In</div>
      </div>

      <div classname='row m-2'>
        <TextField id='email' classname='p-2' type='text' variant='outlined' label='Enter Your Email' fullwidth />
        <TextField id='password' classname='p-2' type='text' variant='outlined' label='Enter Your Password' fullwidth />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontsize='small' />}
              checkedIcon={<CheckBoxIcon fontsize='small' />}
              name='checked1'
            />
          }
          label='Remember me'
        />
        <Button variant='contained' color='primary'>
          Log In
        </Button>
      </div>
      <Divider variant='middle' />
      <p classname='text-center'>
        <Link to='Signup' classname='text-black-50'>
          <h5>Create Account</h5>
        </Link>
      </p>
    </div>
  );
};

export default Login;
