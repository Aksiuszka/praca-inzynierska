import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const CustomRadioGroup = ({ onChange }) => {
  const handleRadioChange = (event) => {
    onChange(event);
  };

  return (
    <FormControl component='fieldset'>
      <RadioGroup row onChange={handleRadioChange}>
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
        <FormControlLabel value='no' control={<Radio />} label='No' />
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
