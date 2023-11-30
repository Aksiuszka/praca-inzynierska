import { Grid, Typography } from '@mui/material';
import { Line } from './style';

const FaqItem = ({ number, title, content, variant, noLine }) => {
  return (
    <>
      <Grid container>
        <Grid item md={2}>
          <Typography
            variant='headline'
            sx={{
              paddingInlineEnd: '0.75rem',
              color: (theme) => (variant === 'result' ? '#F379A1' : theme.palette.primary.dark),
            }}
          >
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
      {!noLine && <Line />}
    </>
  );
};
export default FaqItem;
