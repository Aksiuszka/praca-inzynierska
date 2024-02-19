import { Grid, Typography } from '@mui/material';
import { GridContainer, BottomSection, CustomBox } from '../../styles';
import DigitalPet from '../../../../shared/assets/images/misc/DigitalPet';
import Bin from '../../../../shared/assets/icons/Bin';

export const PetListItem = ({ name, town }) => {
  return (
    <GridContainer container>
      <Grid item xs={12}>
        {/* <TopSection src={img} elevation={3} /> */}
        <DigitalPet />
      </Grid>
      <Grid item xs={12}>
        <BottomSection elevation={3}>
          <CustomBox>
            <Typography variant='decoratedSmall'>{name || 'Fafik'}</Typography>
            <Typography variant='paragraph'>{town || 'Warszawa'}</Typography>
          </CustomBox>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              gap: '10px',
            }}
          >
            <Bin />
            <Typography variant='paragraph'>Usuń</Typography>
          </div>
        </BottomSection>
      </Grid>
    </GridContainer>
  );
};
