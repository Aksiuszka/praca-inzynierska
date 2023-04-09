import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: column;
`;
