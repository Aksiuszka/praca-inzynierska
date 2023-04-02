import CardsHeadline from './items/Cards';
import SliderHeadline from './items/Slider';
import FAQHeadline from './items/FAQ';

const HeadlineContainer = ({ variant }) => {
  if (variant === 'cards') {
    return <CardsHeadline />;
  }
  if (variant === 'slider') {
    return <SliderHeadline />;
  }
  return <FAQHeadline />;
};
export default HeadlineContainer;
