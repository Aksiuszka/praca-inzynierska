/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { CustomContainer } from '../style';
import DigitalPet from '../../../shared/assets/images/misc/DigitalPet';
import CustomButton from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
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
      <CustomContainer>
        <Grid container item sm={12} md={6} sx={{ gap: '2rem', flexDirection: 'column' }}>
          <Input sx={{ width: '33rem' }} name='name' value={(formData.name && formData.name) || ''}>
            Imię
          </Input>
          <Input sx={{ width: '33rem' }} name='town' value={(formData.town && formData.town) || ''}>
            Miasto
          </Input>
          <Input sx={{ width: '33rem' }} name='post' value={(formData.post && formData.post) || ''}>
            Wiek
          </Input>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={6}
          sx={{
            gap: '2rem',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'end',
          }}
        >
          <Input
            sx={{ width: '33rem' }}
            name='address'
            value={(formData.address && formData.address) || ''}
          >
            Adres
          </Input>
          <Input
            sx={{ width: '33rem' }}
            name='phone'
            value={(formData.phone && formData.phone) || ''}
          >
            Telefon do kontaktu
          </Input>
          <Input
            sx={{ width: '33rem' }}
            name='phone'
            value={(formData.phone && formData.phone) || ''}
          >
            Temperament
          </Input>
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
          Tu jest wpisana notka
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
