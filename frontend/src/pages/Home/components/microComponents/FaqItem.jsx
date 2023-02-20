import { Grid, Typography } from '@mui/material';
import { Line } from '../../style';

const FaqItem = ({ number, title, content }) => {
  return (
    <>
      <Grid container>
        <Grid item md={2}>
          <Typography variant='headline' sx={{ color: (theme) => theme.palette.primary.dark }}>
            {number}
          </Typography>
        </Grid>
        <Grid item md={10}>
          <Typography variant='headline'>{title}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={2} />
        <Grid item md={10}>
          <Typography variant='paragraph'>{content}</Typography>
        </Grid>
      </Grid>
      <Line />
    </>
  );
};
export default FaqItem;
