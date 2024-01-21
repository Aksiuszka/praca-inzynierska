import { forwardRef } from 'react';
import { Stack, TextField, Typography } from '@mui/material';

const CustomInput = forwardRef(
  ({ onChange, value, placeholder, type, children, sx, multiline, rows }, ref) => (
    <Stack>
      <Typography variant='regular'>{children}</Typography>
      <TextField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant='outlined'
        size='medium'
        sx={sx}
        multiline={multiline}
        rows={rows}
        inputRef={ref}
      />
    </Stack>
  ),
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
