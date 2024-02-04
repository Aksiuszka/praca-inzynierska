import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const CustomRadioGroup = ({ onChange }) => {
  const handleRadioChange = (event) => {
    onChange(event);
  };

  return (
    <FormControl component='fieldset' sx={{ width: '100', display: 'flex', alignItems: 'center' }}>
      <RadioGroup
        row
        onChange={handleRadioChange}
        sx={{
          width: '100',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem',
          fontFamily: 'Poppins',
        }}
      >
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
        <FormControlLabel value='no' control={<Radio />} label='No' />
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
