import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { TextField, Typography } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const styles = (theme) => ({
  textField: {
    width: 192,
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#1AB273 !important',
    },
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'rgba(0, 0, 0, 0.15) !important',
    color: 'black',
    // backgroundColor:'white'
  },
  disable: {
    color: '#D9D7D7',
    fontSize: 12,
    height: 1,
  },
});

const DateField = (props) => {
  const {
    dateTime,
    setDateTime,
    changeDateTime,
    optionIndex,
    classes,
    width,
    height,
    name,
    value,
    onChange,
    label,
    disabled,
    type = 'datetime-local',
    required,
    fullWidth = false,
  } = props;

  return (
    <>
      <Typography align='left' variant='p' style={{ color: disabled ? '#D9D7D7' : null }}>
        {label}
        {required ? <span style={{ color: 'red' }}>*</span> : null}
      </Typography>

      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            inputFormat='dd/MM/yyyy'
            name={name}
            value={value}
            onChange={onChange}
            renderInput={(params) => <TextField fullWidth={fullWidth} size='small' style={{ marginTop: '0.5rem' }} {...params} />}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default withStyles(styles)(DateField);
