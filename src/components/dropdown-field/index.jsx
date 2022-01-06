import React from 'react';
import { TextField, Typography, Select, MenuItem } from '@mui/material';

const Dropdown = ({
  label,
  disabled,
  value,
  onChange,
  required = false,
  options,
  name,
  fullWidth,
  labelStyle = {},
  labelClassName,
  style = {},
}) => {
  return (
    <div>
      <Typography align='left' variant='p' style={{ color: disabled ? '#D9D7D7' : null, ...labelStyle }} className={labelClassName}>
        {label}
        {required ? <span style={{ color: 'red' }}>*</span> : null}
      </Typography>

      <div>
        <Select
          fullWidth={fullWidth}
          displayEmpty
          required={required}
          size='small'
          variant='outlined'
          name={name}
          value={value}
          onChange={onChange}
          style={{ marginTop: '0.5rem', ...style }}
        >
          {options &&
            options.map((item, idx) => (
              <MenuItem key={idx} value={item.value || item}>
                {item.label || item}
              </MenuItem>
            ))}
        </Select>
      </div>
    </div>
  );
};

export default Dropdown;
