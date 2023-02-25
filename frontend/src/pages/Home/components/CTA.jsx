import Button from '../../../shared/components/Button';
import CoffeeGirl from '../../../shared/assets/images/misc/CoffeGirl';
import { CTAContainer, CustomGrid, StyledTypography } from '../style';

const CTA = () => {
  return (
    <CTAContainer container>
      <CustomGrid item sm={12} md={5}>
        <CoffeeGirl />
      </CustomGrid>
      <CustomGrid container item direction='column' md={7}>
        <StyledTypography variant='decoratedSmall'>
          Ready to find the friend of <br />
          your life?
        </StyledTypography>
        <StyledTypography variant='decorated'>Join the community</StyledTypography>
        <Button variant='regular' label='sign up now' />
      </CustomGrid>
    </CTAContainer>
  );
};
export default CTA;
