import AiCard from '../../../../shared/assets/images/aiCard';
import BulbCard from '../../../../shared/assets/images/bulbCard';
import HeartCard from '../../../../shared/assets/images/heartCard';
import { FlexContainer } from '../../style';
import Card from './Card';

const Cards = () => {
  return (
    <FlexContainer>
      <Card
        title='10k + users '
        content='Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur
            adipiscing.'
        picture={<HeartCard />}
        sx={{ backgroundColor: (theme) => theme.palette.pastels.yellow }}
      />
      <Card
        title='Perfect Match'
        content='Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur
            adipiscing.'
        picture={<BulbCard />}
        sx={{ backgroundColor: (theme) => theme.palette.pastels.orange }}
      />
      <Card
        title='Smart AI'
        content='Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur
            adipiscing.'
        picture={<AiCard />}
        sx={{ backgroundColor: (theme) => theme.palette.pastels.pink }}
      />
    </FlexContainer>
  );
};
export default Cards;
