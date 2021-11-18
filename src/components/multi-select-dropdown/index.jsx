import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const getStyles = (opt, value, theme) => {
  return {
    fontWeight: value.indexOf(opt) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
};

const MultiSelect = (props) => {
  const { value, onChange, options, label, placeholder = '', required, style, disabled, labelStyle, labelClassName } = props;
  const theme = useTheme();

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
      <br />
      <Select
        multiple
        displayEmpty
        required={required}
        value={value}
        size='small'
        onChange={onChange}
        input={<OutlinedInput />}
        style={{ marginTop: '0.5rem', width: '100%', ...style }}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.length === 0 && placeholder}
            {selected.length > 0 && selected.map((value) => <Chip key={value} label={value} />)}
          </Box>
        )}
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt} style={getStyles(opt, value, theme)}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default MultiSelect;
