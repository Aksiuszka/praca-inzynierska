/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { CustomContainer } from '../style';
import Input from '../../../shared/components/Input';
import ProfileLogo from '../../../shared/assets/svg/ProfileLogo';

export const UserProfileContainer = () => {
  const [fetchedDataList, setFetchedDataList] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    temperament: '',
    prescreening: '',
  });

  const [file, setFile] = useState();
  const { email, username } = useSelector((data) => data.auth);
  const docRef = doc(db, 'users', email);

  useEffect(() => {
    const fetchUserData = async () => {
      if (email && Object.keys(fetchedDataList).length === 0) {
        const userdata = await getDoc(docRef);
        const fetchedInstitutionList = userdata.data();
        setFetchedDataList(fetchedInstitutionList);
        if (fetchedDataList.length !== 0) {
          setFormData(fetchedInstitutionList);
        }
      }
    };

    fetchUserData();
  }, [email, fetchedDataList]);

  return (
    <form>
      <CustomContainer style={{ marginBlock: '2rem' }}>
        <CustomContainer
          style={{ flexDirection: 'column', justifyContenf: 'center', alignItems: 'center' }}
        >
          {file ? (
            <img
              src={file}
              alt='img'
              style={{
                borderRadius: '50%',
                width: '7rem',
                height: '7rem',
                objectFit: 'cover',
                fontFamily: 'Poppins',
              }}
            />
          ) : (
            <ProfileLogo />
          )}
          <label htmlFor='upload-input'>
            Wybierz zdjęcie
            <input
              id='upload-input'
              style={{ display: 'none' }}
              name='img'
              onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
              type='file'
            />
          </label>
        </CustomContainer>
        <Typography variant='decorated'>Informacje Profilowe</Typography>
      </CustomContainer>
      <CustomContainer>
        <Grid container item sm={12} md={6} sx={{ gap: '2rem', flexDirection: 'column' }}>
          <Input
            sx={{ width: '23rem' }}
            name='email'
            value={(formData.email && formData.email) || ''}
          >
            Email
          </Input>
          <Input
            sx={{ width: '23rem' }}
            name='prescreening'
            value={(formData.prescreening && formData.prescreening) || ''}
          >
            Prescreening
          </Input>
          <Input
            sx={{ width: '23rem' }}
            name='temperament'
            value={(formData.temperament && formData.temperament) || ''}
          >
            Temperament
          </Input>
        </Grid>
      </CustomContainer>
    </form>
  );
};
