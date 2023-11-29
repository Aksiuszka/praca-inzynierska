import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { ColumnContainer, CustomGrid, RightButtonContainer } from '../../../shared/styles/styles';
import FlegmaticPet from '../../../shared/assets/images/results/petTest/Flegmatic';
import Button from '../../../shared/components/Button';
import SliderComponent from '../../../shared/components/Slider';
import { getPetTestResultInfo } from '../utils/getPetTestResultInfo';
import { ROUTES } from '../../../shared/constants';
import NotReady from '../../../shared/assets/images/results/prescreening/NotReady.png';
import NotBad from '../../../shared/assets/images/results/prescreening/NotBad.png';
import Ready from '../../../shared/assets/images/results/prescreening/Ready.png';

export const ResultContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = useMemo(() => location, [location]);
  const { category } = state || {};

  const result = 'melancholic';

  const { data, color } = getPetTestResultInfo(result);

  const renderTest = (type) => {
    switch (type) {
      case 'prescreen':
        return navigate(ROUTES.prescreening);
      case 'smartTest':
        return navigate(ROUTES.smartTest);
      case 'petTest':
        return navigate(ROUTES.petTest);
      default:
        return navigate(ROUTES.dashboard);
    }
  };

  const renderHeroImg = (type = 'notready') => {
    switch (type) {
      case 'ready':
        return <img src={Ready} alt='ready' />;
      case 'notbad':
        return <img src={NotBad} alt='almost ready' />;
      case 'notready':
        return <img src={NotReady} alt='not ready' />;
      default:
        return null;
    }
  };

  const getHeroImgInfo = (type) => {
    let title;
    let content;

    switch (type) {
      case 'ready':
        title = 'Ready!';
        content =
          ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
        break;
      case 'notbad':
        title = 'Not Bad!';
        content =
          ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
        break;
      case 'notready':
        title = 'Not Ready!';
        content =
          ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
        break;
      default:
        title = 'Default Title';
        content = 'Default Content Lorem ipsum...';
    }

    return { title, content };
  };

  const handleSubmit = () => {
    navigate(ROUTES.dashboard);
  };
  const handleBack = () => {
    renderTest(category);
  };

  if (category === 'prescreen') {
    const { title, content } = getHeroImgInfo('notready');
    return (
      <ColumnContainer>
        <CustomGrid color='red' width='100%'>
          <Grid item width='50%'>
            {category && renderHeroImg('notready')}
          </Grid>
          <Grid item width='50%'>
            <Typography variant='headline'>{title}</Typography>
            <br />
            <Typography variant='paragraph'>{content}</Typography>
          </Grid>
        </CustomGrid>
        <RightButtonContainer>
          <Button variant='regular' label='Twoje wyniki' onClick={handleSubmit} />
          <Button label='cofnij' onClick={handleBack} />
        </RightButtonContainer>
      </ColumnContainer>
    );
  }
  return (
    category === 'petTest' && (
      <ColumnContainer>
        <FlegmaticPet />
        <SliderComponent variant='petTest' information={data} color={color} />
        <RightButtonContainer>
          <Button variant='regular' label='Twoje wyniki' onClick={handleSubmit} />
          <Button label='cofnij' onClick={handleBack} />
        </RightButtonContainer>
      </ColumnContainer>
    )
  );
};
