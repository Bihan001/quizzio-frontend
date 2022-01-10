import React from 'react';
import { TextField, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/system';

const Input = styled('input')({
  display: 'none',
});

const FileUploadField = ({
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
  accept = 'image/*',
  uploadIcon = <PhotoCamera />,
  uploadDisabled = false,
  actionOnClick = () => {},
}) => {
  return (
    <div>
      <Typography align='left' variant='p' style={{ ...labelStyle }} className={labelClassName}>
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
          rows={row}
          rowsMax={rowMax}
          multiline={multiline}
          value={value}
          style={{ ...style }}
          className={className}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <label>
                  <Input accept={accept} type='file' onChange={onChange} />
                  <IconButton disabled={uploadDisabled} color='primary' component='span' style={{ marginRight: -11 }}>
                    {uploadIcon}
                  </IconButton>
                </label>
              </InputAdornment>
            ),
          }}
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

export default FileUploadField;
