import { ContentContainer } from '../../style';
import Contact from './components/Contact';
import Slider from './components/Slider';

const Content = () => {
  return (
    <ContentContainer>
      <Slider />
      <Contact />
    </ContentContainer>
  );
};
export default Content;
