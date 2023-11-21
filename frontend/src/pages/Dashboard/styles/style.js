import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const getPastelColor = (index) => {
  const pastelColors = ['pink', 'yellow', 'green', 'orange'];
  return pastelColors[index % pastelColors.length];
};

export const LinkBox = styled(Box)(({ theme, index }) => ({
  width: '20rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.pastels[getPastelColor(index)],
  borderRadius: '1.5rem',
  gap: '2rem',
  padding: '7rem 16rem',
  textAlign: 'center',
}));
