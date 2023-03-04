import { useTranslation } from 'react-i18next';
import keys from '../../../../locales/keys';
import AiCard from '../../../../shared/assets/images/cards/Ai';
import BulbCard from '../../../../shared/assets/images/cards/Bulb';
import HeartCard from '../../../../shared/assets/images/cards/Heart';
import { FlexContainer } from '../../style';
import Card from './Card';

const Cards = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer>
      <Card
        title={t(keys.home.card.yellow.title)}
        content={t(keys.home.card.yellow.content)}
        picture={<HeartCard />}
        sx={{ backgroundColor: (theme) => theme.palette.pastels.yellow }}
      />
      <Card
        title={t(keys.home.card.orange.title)}
        content={t(keys.home.card.orange.content)}
        picture={<BulbCard />}
        sx={{ backgroundColor: (theme) => theme.palette.pastels.orange }}
      />
      <Card
        title={t(keys.home.card.pink.title)}
        content={t(keys.home.card.pink.content)}
        picture={<AiCard />}
        sx={{ backgroundColor: (theme) => theme.palette.pastels.pink }}
      />
    </FlexContainer>
  );
};
export default Cards;
