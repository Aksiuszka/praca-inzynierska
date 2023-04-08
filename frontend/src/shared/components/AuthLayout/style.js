import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material/Grid';

export const AuthGrid = styled(Grid)`
padding-inline: 4rem;
padding-block: 4rem;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
max-width: 50rem;
[theme.breakpoints.down('lg')]: {
flex-direction: column;
justify-content: center,
align-items: center,
},
`;
