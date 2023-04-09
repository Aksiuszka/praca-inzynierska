import { Stack, TextField, Typography } from '@mui/material';

const CustomInput = ({ onChange, value, placeholder, type, children }) => {
  return (
    <Stack>
      <Typography variant='regular'>{children}</Typography>
      <TextField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant='standard'
      />
    </Stack>
  );
};
export default CustomInput;
