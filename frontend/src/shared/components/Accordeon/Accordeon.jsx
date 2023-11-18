import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CustomAccordion } from './style';
import Arrow from '../../assets/icons/Arrow';

export const Accordeon = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <CustomAccordion key={`custom-group-key-${index + 123}`}>
          <AccordionSummary
            expandIcon={<Arrow />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{ marginInline: '2rem' }}
          >
            <Typography variant='highlighted' sx={{ fontWeight: '500' }}>
              Question {index + 1} : {item}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Test</Typography>
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </div>
  );
};
