import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const AuthGrid = styled(Grid)`
poaition: relative;
padding-inline: 4rem;
// padding-block: 4rem;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
max-width: 80rem;
gap: 4rem;
${(props) => props.theme.breakpoints.down('sm')} {{
flex-direction: column;
justify-content: center;
align-items: center;
padding-inline: 0rem;
},
`;
