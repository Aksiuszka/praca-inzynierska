/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Stack, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { CustomContainer } from '../style';
import DigitalPet from '../../../shared/assets/images/misc/DigitalPet';
import CustomButton from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { Textfield } from '../../../shared/components/Textfield';
import { Modal } from '../../../shared/components/Modal';

export const PetProfileContainer = () => {
  const [file, setFile] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    town: '',
    post: '',
    area: '',
    phone: '',
    age: '',
    temperament: '',
    note: '',
  });
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleReturn = () => {
    setIsModalOpen(true);
  };
  const handleContinue = () => {
    navigate('/email');
  };

  return (
    <div style={{ width: '70%' }}>
      <CustomContainer style={{ marginBlock: '2rem', justifyContent: 'start' }}>
        <CustomContainer
          style={{
            flexDirection: 'column',
            justifyContenf: 'start',
            alignItems: 'start',
          }}
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
        </CustomContainer>
        <CustomContainer
          style={{ flexDirection: 'column', justifyContenf: 'center', alignItems: 'start', gap: 1 }}
        >
          <Typography variant='decorated' sx={{ margin: 0, padding: 0 }}>
            Faficzek
          </Typography>
          <Typography variant='paragraph'>Warszawskie schronisko Cztery Łapy</Typography>
        </CustomContainer>
      </CustomContainer>
      <CustomContainer
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'start',
          marginBlock: '3rem',
        }}
      >
        <Typography color='#4E5460' variant='decoratedSmall'>
          Dane zwierzecia
        </Typography>

        <CustomButton variant='regular' label='adoptuj mnie' onClick={handleClick} />
      </CustomContainer>
      <hr style={{ border: '2px solid pink', marginBottom: '2rem' }} />
      <CustomContainer>
        <Grid container item sm={12} md={6} sx={{ gap: '2rem', flexDirection: 'column' }}>
          <Textfield label='Imię'> {(formData.name && formData.name) || 'Faficzekk'}</Textfield>
          <Textfield label='Miasto'> {(formData.town && formData.town) || 'Warszawa'}</Textfield>
          <Textfield label='Wiek'> {(formData.age && formData.age) || '3lata'}</Textfield>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={6}
          sx={{
            gap: '2rem',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
          }}
        >
          <Textfield label='Adres'>
            {(formData.address && formData.address) || 'Faficzekk'}
          </Textfield>
          <Textfield label='Telefon'> {(formData.phone && formData.phone) || 'Warszawa'}</Textfield>
          <Textfield label='Temperament'>
            {(formData.temperament && formData.temperament) || '3lata'}
          </Textfield>
        </Grid>
      </CustomContainer>
      <CustomContainer
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'start',
          marginBlock: '3rem',
        }}
      >
        <Typography color='#4E5460' variant='decoratedSmall'>
          Dodatkowe informacje
        </Typography>
      </CustomContainer>
      <CustomContainer
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'start',
          marginBlock: '3rem',
          background: '#FFF0F5',
          padding: '3rem',
          borderRadius: '1rem',
        }}
      >
        <Typography color='#4E5460' variant='paragraph'>
          {(formData.note && formData.note) || 'Fallback notki'}
        </Typography>
      </CustomContainer>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} variant='login'>
          <Typography variant='headline'>Przeczytaj zanim zaadoptujesz!</Typography>
          <Typography variant='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
          </Typography>
          <CustomContainer>
            <CustomButton variant='regular' label='Kontynuuj' onClick={handleContinue} />
            <CustomButton label='Powrót' onClick={handleReturn} />
          </CustomContainer>
        </Modal>
      )}
    </div>
  );
};