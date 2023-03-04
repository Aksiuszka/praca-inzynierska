import { useTranslation } from 'react-i18next';
import keys from '../../../locales/keys';
import Button from '../../../shared/components/Button';
import CoffeeGirl from '../../../shared/assets/images/misc/CoffeGirl';
import { CTAContainer, CustomGrid, StyledTypography } from '../style';

const CTA = () => {
  const { t } = useTranslation();
  return (
    <CTAContainer container>
      <CustomGrid item sm={12} md={5}>
        <CoffeeGirl width='100%' />
      </CustomGrid>
      <CustomGrid container item direction='column' md={7}>
        <StyledTypography variant='decoratedSmall'>
          {t(keys.home.cta.subtext.first)}
          <StyledTypography
            variant='decoratedSmall'
            sx={{ color: (theme) => theme.palette.text.accent }}
          >
            {t(keys.home.cta.subtext.accent)}
          </StyledTypography>
          <br />
          {t(keys.home.cta.subtext.rest)}
        </StyledTypography>
        <StyledTypography variant='decorated' sx={{ color: (theme) => theme.palette.text.accent }}>
          {t(keys.home.cta.mainAccent)}
          <StyledTypography
            variant='decorated'
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            {t(keys.home.cta.main)}
          </StyledTypography>
        </StyledTypography>

        <Button variant='regular' label='sign up now' />
      </CustomGrid>
    </CTAContainer>
  );
};
export default CTA;
