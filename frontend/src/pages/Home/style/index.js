import { styled } from '@mui/material/styles';

export const CustomGrid = styled('div')`
  && {
    width: 39rem;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    margin: 0;
  }
`;
export const AccentTypography = styled('span')`
  color: ${(props) => props.theme.palette.text.accent};
`;
