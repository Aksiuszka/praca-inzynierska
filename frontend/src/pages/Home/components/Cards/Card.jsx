import { Typography, Grid } from '@mui/material';
import { Card, ImageContainer } from '../../style';

const CardItem = ({ picture, title, content, sx }) => {
  return (
    <Grid sx={{ position: 'relative', padding: '1rem' }} item>
      <ImageContainer>{picture}</ImageContainer>
      <Card sx={sx}>
        <Typography variant='headline'>{title}</Typography>
        <Typography variant='paragraph'>{content}</Typography>
      </Card>
    </Grid>
  );
};
export default CardItem;
