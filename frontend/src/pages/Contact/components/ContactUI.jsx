import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import Headline from '../../../shared/components/Headline';
import CustomInput from '../../../shared/components/Input';
import { AbsoluteBox, CustomBox, PinkGrid } from '../styles/style';
import ContactList from './ContactList';
import { SOCIALMEDIA, SOCIALMEDIALINKSFE } from '../../../shared/constants';
import Cat from '../../../shared/assets/images/misc/Cat';

const ContactUI = () => {
  return (
    <Stack gap='3rem' width='100%'>
      <Headline blackLabel='Us' pinkLabel='Contact ' />
      <Grid
        position='relative'
        container
        spacing={4}
        direction='row'
        justifyContent='center'
        style={{
          width: '100%',
          gap: '1rem',
        }}
      >
        <AbsoluteBox>
          <Cat />
        </AbsoluteBox>
        <PinkGrid item>
          <ContactList />
          <CustomBox>
            {SOCIALMEDIA.map((item, index) => {
              return (
                <div key={item.title}>
                  <a href={SOCIALMEDIALINKSFE[index].route}>{item.icon}</a>
                </div>
              );
            })}
          </CustomBox>
        </PinkGrid>
        <Grid
          item
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40rem',
            gap: '2rem',
          }}
        >
          <CustomInput placeholder=''>Imię</CustomInput>
          <CustomInput placeholder=''>Email</CustomInput>
          <CustomInput placeholder='' multiline rows={5}>
            Wiadomość
          </CustomInput>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default ContactUI;
