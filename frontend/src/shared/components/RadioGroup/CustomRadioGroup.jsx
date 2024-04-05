import PropTypes from 'prop-types';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const CustomRadioGroup = ({ onChange }) => {
  const handleRadioChange = (event) => {
    onChange(event);
  };

  return (
    <FormControl component='fieldset' sx={{ width: '100', display: 'flex', alignItems: 'center' }}>
      <RadioGroup
        required
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
        <FormControlLabel value='yes' control={<Radio />} label='Tak' />
        <FormControlLabel value='no' control={<Radio />} label='Nie' />
      </RadioGroup>
    </FormControl>
  );
};

CustomRadioGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default CustomRadioGroup;
