import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CustomRadioGroup from '../RadioGroup/CustomRadioGroup';
import { Header } from './styled';

export const Stepper = ({
  steps,
  activeStep,
  onNext,
  onBack,
  maxSteps,
  onFinalClick,
  onQuestionResponse,
  category,
  renderSmartTestQuestions, // Receive the renderSmartTestQuestions function
}) => {
  const theme = useTheme();
  const isLastStep = activeStep === maxSteps - 1;

  const handleQuestionResponse = (e) => {
    onQuestionResponse(activeStep, e.target.value);
  };

  return (
    <Box sx={{ maxWidth: 1400, flexGrow: 1 }}>
      <Header square elevation={0}>
        <Typography variant='regular' sx={{ fontSize: '1.5rem', fontWeight: '500' }}>
          {steps[activeStep].label}
        </Typography>
      </Header>
      <Box
        sx={{
          height: 255,
          maxWidth: '100%',
          width: '100%',
          pt: 5,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {category !== 'smartTest' ? (
          <CustomRadioGroup
            key={`custom-group-key-${activeStep}`}
            onChange={(e) => handleQuestionResponse(e)}
          />
        ) : (
          // Call the renderSmartTestQuestions function
          renderSmartTestQuestions()
        )}
      </Box>
      <MobileStepper
        variant='text'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          isLastStep ? (
            <Button size='small' onClick={onFinalClick}>
              Koniec
            </Button>
          ) : (
            <Button size='small' onClick={onNext}>
              Następne
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft sx={{ color: '#DF7CA8' }} />
              ) : (
                <KeyboardArrowRight sx={{ color: '#DF7CA8' }} />
              )}
            </Button>
          )
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
