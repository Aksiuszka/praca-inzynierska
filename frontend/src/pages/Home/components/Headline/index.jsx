import CardsHeadline from './components/Cards';
import SliderHeadline from './components/Slider';
import FAQHeadline from './components/FAQ';

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
