import React from 'react';
import { TextField, Typography, Button } from '@mui/material';

const TextInputField = ({
  label,
  placeholder,
  disabled = false,
  required,
  name,
  type,
  onChange,
  value,
  fullWidth,
  row = '',
  rowMax = '',
  multiline,
  style = {},
  labelStyle = {},
  labelClassName,
  className,
  variant,
  showActionBtn = false,
  actionBtnText = '',
  actionOnClick = () => { },
}) => {
  return (
    <div>
      <Typography
        align='left'
        variant='p'
        style={{ color: disabled ? '#D9D7D7' : null, ...labelStyle }}
        className={labelClassName}
        sx={{}}
      >
        {label}
        {required ? <span style={{ color: 'red' }}>*</span> : null}
      </Typography>

      <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}>
        <TextField
          fullWidth={fullWidth}
          type={type}
          name={name}
          disabled={disabled}
          required={required}
          size='small'
          variant={variant || 'outlined'}
          placeholder={placeholder}
          onChange={onChange}
          rows={row}
          rowsMax={rowMax}
          multiline={multiline}
          value={value}
          style={{ marginRight: '1rem', ...style }}
          className={className}
        />
        {showActionBtn && (
          <Button variant='contained' onClick={(e) => actionOnClick(e)}>
            {actionBtnText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TextInputField;
