/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Select, MenuItem, InputLabel, FormControl, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { db } from '../../../config/firebase';
import { CustomContainer } from '../styles';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import { VOIVODESHIPS } from '../constants';
import { Modal } from '../../../shared/components/Modal';
import DigitalPet from '../../../shared/assets/images/misc/DigitalPet';

export const PetFormContainer = () => {
  const [formData, setFormData] = useState({
    species: '',
    name: '',
    breed: '',
    town: '',
    post: '',
    email: '',
    birthDate: '',
    area: '',
    phone: '',
    temperament: '',
    note: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const { email } = useSelector((data) => data.auth);
  let saveData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storage = getStorage();
    const imageRef = ref(storage, `pets/${uuid()}`);
    const uploadTask = uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            saveData = url;
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(formData.email, email, 'jndjhdshjsd');
    const petRef = doc(db, 'pets', email, 'PetArray', formData.name);
    const temperamentRef = doc(db, 'pets', formData.temperament, 'PetArray', formData.name);

    await uploadTask;
    const downloadURL = await getDownloadURL(imageRef);
    const submitData = {
      ...formData,
      file: downloadURL || null,
    };
    if (submitData && email) {
      await setDoc(petRef, {
        species: submitData.species,
        name: submitData.name,
        breed: submitData.breed,
        town: submitData.town,
        post: submitData.post,
        email,
        birthDate: submitData.birthDate,
        area: submitData.area,
        phone: submitData.phone,
        temperament: submitData.temperament,
        note: submitData.note,
        file: submitData.file,
      });
      await setDoc(temperamentRef, {
        species: submitData.species,
        name: submitData.name,
        breed: submitData.breed,
        town: submitData.town,
        post: submitData.post,
        email,
        birthDate: submitData.birthDate,
        area: submitData.area,
        phone: submitData.phone,
        temperament: submitData.temperament,
        note: submitData.note,
        file: submitData.file,
      });
      setIsModalOpen(true);
      navigate('/pet-list');
    }
  };
  const handleClick = () => {
    navigate('/petTest');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const submitData = {
  //     ...formData,
  //     file: file || null,
  //   };
  //   if (submitData && submitData.email && file) {
  //     setDoc(doc(db, 'pets', submitData.email), {
  //       species: submitData.species,
  //       name: submitData.name,
  //       breed: submitData.breed,
  //       town: submitData.town,
  //       post: submitData.post,
  //       email: submitData.email,
  //       birthDate: submitData.birthDate,
  //       area: submitData.area,
  //       phone: submitData.phone,
  //       temperament: submitData.temperament,
  //       note: submitData.note,
  //       file: submitData.file,
  //     });
  //     setIsModalOpen(true);
  //     navigate('/pet-list');
  //   }
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              <DigitalPet />
            )}
            <label htmlFor='upload-input'>
              Wybierz zdjęcie
              <input
                id='upload-input'
                style={{ display: 'none' }}
                accept='image/png,image/jpeg'
                name='img'
                onChange={(e) => setFile(e.target.files[0])}
                type='file'
              />
            </label>
          </CustomContainer>
          <Typography variant='decorated'>Dodaj podopiecznego</Typography>
        </CustomContainer>
        <CustomContainer
          style={{
            flexDirection: 'column',
            justifyContenf: 'end',
            alignItems: 'end',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <Alert severity='info' onClose={() => {}} sx={{ width: '100%' }}>
            Jeśli nie znasz temperamentu zwierzęcia, kliknij na przycisk ,,Wykonaj PetTest dla
            zwierzęcia''
          </Alert>
          <Button variant='outline' label='Wykonaj Pettest dla zwierzęcia' onClick={handleClick} />
        </CustomContainer>
        <CustomContainer>
          <Grid container item sm={12} md={6} sx={{ gap: '2rem', flexDirection: 'column' }}>
            <Input sx={{ width: '23rem' }} name='name' onChange={handleChange}>
              Nazwa
            </Input>
            <Input sx={{ width: '23rem' }} name='breed' onChange={handleChange}>
              Rasa
            </Input>
            <Input sx={{ width: '23rem' }} name='town' onChange={handleChange}>
              Miasto
            </Input>
            <Input sx={{ width: '23rem' }} name='post' onChange={handleChange}>
              Kod Pocztowy
            </Input>
            <Input sx={{ width: '23rem' }} name='email' value={email}>
              Email do kontaktu
            </Input>
          </Grid>
          <Grid container item sm={12} md={6} sx={{ gap: '2rem', flexDirection: 'column' }}>
            <FormControl sx={{ marginBlockStart: '1.3rem' }}>
              <InputLabel sx={{ fontFamily: 'Poppins' }}>Gatunek</InputLabel>
              <Select
                sx={{ width: '23rem' }}
                id='demo-simple-select'
                label='Gatunek'
                value={formData.species}
                onChange={handleChange}
                name='species'
              >
                <MenuItem value='Pies'>Pies</MenuItem>
                <MenuItem value='Kot'>Kot</MenuItem>
              </Select>
            </FormControl>
            <Input sx={{ width: '23rem' }} name='birthDate' onChange={handleChange}>
              Oszacowany Rok Urodzenia
            </Input>
            <FormControl sx={{ marginBlockStart: '1.3rem' }}>
              <InputLabel sx={{ fontFamily: 'Poppins' }}>Województwo</InputLabel>
              <Select
                sx={{ width: '23rem' }}
                id='demo-simple-select'
                label='Województwo'
                onChange={handleChange}
                value={formData.area}
                name='area'
              >
                {VOIVODESHIPS.map((voivodeship) => (
                  <MenuItem key={voivodeship} value={voivodeship}>
                    {voivodeship}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Input sx={{ width: '23rem' }} name='phone' onChange={handleChange}>
              Telefon do kontaktu
            </Input>
            <FormControl sx={{ marginBlockStart: '1.3rem' }}>
              <InputLabel sx={{ fontFamily: 'Poppins' }}>Temperament</InputLabel>
              <Select
                sx={{ width: '23rem' }}
                id='demo-simple-select'
                label='Temperament'
                value={formData.temperament}
                onChange={handleChange}
                name='temperament'
              >
                <MenuItem value='choleric'>Choleryk</MenuItem>
                <MenuItem value='melancholic'>Melancholik</MenuItem>
                <MenuItem value='sanguine'>Sangwinik</MenuItem>
                <MenuItem value='flegmatic'>Flegmatyk</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </CustomContainer>
        <div style={{ marginTop: '1.5rem' }}>
          <Input sx={{ width: '100%' }} name='note' onChange={handleChange} type='text' multiline>
            Notka o zwierzęciu
          </Input>
        </div>

        <Button
          variant='regular'
          label='Zapisz zwierzę'
          type='submit'
          sx={{ marginTop: '3rem', width: '100%' }}
        />
      </form>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} variant='login'>
          <Typography variant='headline'>Zapisany! 👌</Typography>
          <Typography variant='paragraph'>Udało Ci się zapisać pupila do bazy! ✨</Typography>
          <Button variant='regular' label='Zaloguj się' />
        </Modal>
      )}
    </>
  );
};
