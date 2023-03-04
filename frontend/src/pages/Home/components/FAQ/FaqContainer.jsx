import { useTranslation } from 'react-i18next';
import keys from '../../../../locales/keys';
import { FlexContainer } from '../../style';
import FaqItem from './FaqItem';

const FaqContainer = () => {
  const { t } = useTranslation();
  return (
    <FlexContainer>
      <FaqItem
        number={t(keys.home.faq.one.number)}
        title={t(keys.home.faq.one.title)}
        content={t(keys.home.faq.one.content)}
      />
      <FaqItem
        number={t(keys.home.faq.two.number)}
        title={t(keys.home.faq.two.title)}
        content={t(keys.home.faq.two.content)}
      />
      <FaqItem
        number={t(keys.home.faq.three.number)}
        title={t(keys.home.faq.three.title)}
        content={t(keys.home.faq.three.content)}
      />
    </FlexContainer>
  );
};
export default FaqContainer;
