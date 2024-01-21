import { useEffect, useRef } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { Box, Stack } from '@mui/system';
import CustomBtn from '../../../shared/components/Button';
import Headline from '../../../shared/components/Headline';
import CustomInput from '../../../shared/components/Input';
import { AbsoluteBox, CustomBox, PinkGrid } from '../styles/style';
import ContactList from './ContactList';
import { SOCIALMEDIA, SOCIALMEDIALINKSFE } from '../../../shared/constants';
import Cat from '../../../shared/assets/images/misc/Cat';

const ContactUI = ({ onSubmit, loading, updateParentRefs }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (nameRef.current && emailRef.current && messageRef.current) {
      updateParentRefs({
        nameRef,
        emailRef,
        messageRef,
      });
    }
  }, [nameRef, emailRef, messageRef, updateParentRefs]);

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
        <form onSubmit={onSubmit}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Grid
              item
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '40rem',
                gap: '2rem',
              }}
            >
              <CustomInput placeholder='' ref={nameRef}>
                Imię
              </CustomInput>
              <CustomInput placeholder='' ref={emailRef}>
                Email
              </CustomInput>
              <CustomInput placeholder='' ref={messageRef} multiline rows={5}>
                Wiadomość
              </CustomInput>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <CustomBtn variant='regular' label='Wyslij' type='submit' />
              </Box>
            </Grid>
          )}
        </form>
      </Grid>
    </Stack>
  );
};
export default ContactUI;
