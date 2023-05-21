import { Stack, TextField, Typography } from '@mui/material';

const CustomInput = ({ onChange, value, placeholder, type, children, sx }) => {
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
      />
    </Stack>
  );
};
export default CustomInput;
