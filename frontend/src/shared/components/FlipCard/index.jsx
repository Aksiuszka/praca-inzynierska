import { Typography } from '@mui/material';
import { StyledCard, CardInner, CardFront, CardBack } from './style';

const FlipCard = ({ picture, text }) => {
  return (
    <StyledCard>
      <CardInner>
        <CardFront>{picture}</CardFront>
        <CardBack>
          <Typography variant='decoratedSmall'>{text}</Typography>
        </CardBack>
      </CardInner>
    </StyledCard>
  );
};
export default FlipCard;
