import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '../../constants';
import { SliderData as data } from './Data';
import SliderItem from './SliderItem';

const SliderComponent = () => {
  return (
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
  );
};

export default SliderComponent;
