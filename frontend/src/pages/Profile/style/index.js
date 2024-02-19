import { styled } from '@mui/material/styles';

export const CustomContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;
