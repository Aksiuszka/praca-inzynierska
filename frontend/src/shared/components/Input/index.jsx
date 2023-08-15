import { Stack, TextField, Typography } from '@mui/material';

const CustomInput = ({ onChange, value, placeholder, type, children, sx, multiline, rows }) => {
  return (
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
      />
    </Stack>
  );
};
export default CustomInput;
