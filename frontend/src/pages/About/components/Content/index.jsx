import { ContentContainer } from '../../style';
import Contact from './components/Contact';
import Slider from './components/Slider';
import Values from './components/Values';


const Content = () => {
  return (
    <ContentContainer>
      <Slider />
      <Values />
      <Contact />
    </ContentContainer>
  );
};
export default Content;
