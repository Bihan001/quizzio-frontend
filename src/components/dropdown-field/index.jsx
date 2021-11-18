import React from 'react';
import { TextField, Typography, Select, MenuItem } from '@mui/material';

const Dropdown = ({
  label,
  disabled,
  value,
  handler,
  required,
  options,
  name,
  fullWidth,
  labelStyle = {},
  labelClassName,
  style = {},
}) => {
  return (
    <>
      <Typography
        align='left'
        variant='p'
        style={{ color: disabled ? '#D9D7D7' : null, ...labelStyle }}
        className={labelClassName}
      >
        {label}
        {required ? <span style={{ color: 'red' }}>*</span> : null}
      </Typography>

      <div>
        <Select
          fullWidth={fullWidth}
          displayEmpty
          size='small'
          variant='outlined'
          name={name}
          value={value}
          onChange={handler}
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
    </>
  );
};

export default Dropdown;
