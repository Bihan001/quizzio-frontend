import React from 'react';
import { TextField, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';

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
  endIcon,
  startIcon,
  endIconOnClick = () => { },
  startIconOnClick = () => { },
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
          style={{ marginRight: showActionBtn ? '1rem' : 0, ...style }}
          className={className}
          InputProps={{
            startAdornment: startIcon && (
              <InputAdornment position='start'>
                <IconButton fullWidth edge='start' onClick={(e) => startIconOnClick(e)}>
                  {startIcon}
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: endIcon && (
              <InputAdornment position='start'>
                <IconButton fullWidth style={{ marginRight: -15 }} edge='start' onClick={(e) => endIconOnClick(e)}>
                  {endIcon}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/*   Password  */}
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
