import { useEffect, useRef } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { Box, Stack } from '@mui/system';
import CustomBtn from '../../../shared/components/Button';
import Headline from '../../../shared/components/Headline';
import CustomInput from '../../../shared/components/Input';

export const EmailUI = ({ onSubmit, loading, updateParentRefs }) => {
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
    <Stack gap='3rem' width='100%' justifyContent='center' alignItems='center'>
      <Headline blackLabel='Adopcja' pinkLabel='Udana ' />
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
            <CustomInput placeholder='' ref={emailRef}>
              Temperament
            </CustomInput>
            <CustomInput placeholder='' ref={emailRef}>
              Prescreening
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
    </Stack>
  );
};
