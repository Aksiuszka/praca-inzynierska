import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
`;
