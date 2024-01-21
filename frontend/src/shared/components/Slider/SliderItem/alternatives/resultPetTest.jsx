import { Typography } from '@mui/material';
import { SharpBox } from '../../style';

const ResultItem = ({ content, color }) => {
  return (
    <SharpBox color={color}>
      <Typography variant='paragraph'>{content}</Typography>
    </SharpBox>
  );
};
export default ResultItem;
