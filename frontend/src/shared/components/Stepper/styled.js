import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Header = styled(Paper)`
  display: flex;
  align-items: center;
  height: 130px;
  border-radius: 2rem;
  background: ${(props) => props.theme.palette.pastels.orange};
  ${(props) => props.theme.breakpoints.down('md')} {
    display: none;
  }
  padding: 2.5rem;
`;
