import { Grid } from '@mui/material';
import { CustomBox, CustomContainer } from '../style';

const SliderItem = ({ picture, city, login, rating, content }) => {
  return (
    <CustomBox>
      <CustomContainer>
        <Grid item md={4}>
          {picture}
        </Grid>
        <Grid item direction='column' md={4}>
          <div>{login}</div>
          <div>{city}</div>
        </Grid>
        <Grid item md={4}>
          {rating}
        </Grid>
      </CustomContainer>
      <div>{content}</div>
    </CustomBox>
  );
};
export default SliderItem;
