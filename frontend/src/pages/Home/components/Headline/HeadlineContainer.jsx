import CardsHeadline from './Cards';
import SliderHeadline from './Slider';
import FAQHeadline from './FAQ';

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
