import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const CustomRadioGroup = () => {
  return (
    <FormControl component='fieldset'>
      <RadioGroup row>
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
        <FormControlLabel value='no' control={<Radio />} label='No' />
      </RadioGroup>
    </FormControl>
  );
};
export default CustomRadioGroup;
