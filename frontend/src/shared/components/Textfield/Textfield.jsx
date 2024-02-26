import { Stack, Typography } from '@mui/material';

export const Textfield = ({ label, children }) => (
  <Stack gap='0.6rem'>
    <Typography variant='regular'>{label}</Typography>
    <Typography variant='highlighted'>{children}</Typography>
  </Stack>
);
