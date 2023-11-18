import { Accordion } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomAccordion = styled(Accordion)`
  border-radius: 1rem;
  margin-block: 1.5rem;
  box-shadow: none;
  padding: 1rem;
  &.MuiAccordion-root:before {
    background-color: transparent;
  }
  &.MuiAccordion-root:first-child {
    border-radius: 1rem;
  }
`;
