import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PinkGrid = styled(Grid)`
  width: 35rem;
  background: ${(props) => props.theme.palette.background.paper};
  border-radius: 5px;
`;
export const CustomBox = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  margin-block-start: 2rem;
  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
`;
export const AbsoluteBox = styled(Box)`
position: absolute; 
bottom: 0;
left: 33%;
  ${(props) => props.theme.breakpoints.down('lg')} {
    display:none
`;
