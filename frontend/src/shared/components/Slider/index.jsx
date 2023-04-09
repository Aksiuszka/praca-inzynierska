import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '../../constants';
import { SliderHome as data, SliderAbout as pictures } from './Data';
import SliderItem from './SliderItem';
import { SliderContainer } from './style';
import AlternativeItem from './SliderItem/alternatives/about';

const SliderComponent = ({ variant }) => {
  return (
    <SliderContainer>
      {variant === 'about' ? (
        <Slider {...settings}>
          {pictures.map((item) => (
            <AlternativeItem key={item.id} picture={item.picture} />
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {data.map((item) => (
            <SliderItem
              key={item.id}
              picture={item.picture}
              login={item.login}
              city={item.city}
              rating={item.rating}
              content={item.content}
            />
          ))}
        </Slider>
      )}
    </SliderContainer>
  );
};

export default SliderComponent;
