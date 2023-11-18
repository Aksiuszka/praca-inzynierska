import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Header } from './styled';

export const Stepper = ({ steps, activeStep, onNext, onBack, maxSteps }) => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: 1400, flexGrow: 1 }}>
      <Header square elevation={0}>
        <Typography variant='regular' sx={{ fontSize: '1.5rem', fontWeight: '500' }}>
          {steps[activeStep].label}
        </Typography>
      </Header>
      <Box sx={{ height: 255, maxWidth: '100%', width: '100%', pt: 5 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant='text'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button size='small' onClick={onNext} disabled={activeStep === maxSteps - 1}>
            Następne
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft sx={{ color: '#DF7CA8' }} />
            ) : (
              <KeyboardArrowRight sx={{ color: '#DF7CA8' }} />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={onBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight sx={{ color: '#DF7CA8' }} />
            ) : (
              <KeyboardArrowLeft sx={{ color: '#DF7CA8' }} />
            )}
            Poprzednie
          </Button>
        }
      />
    </Box>
  );
};