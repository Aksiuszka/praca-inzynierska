import Cards from '../components/Cards/CardsContainer';
import Hero from '../components/Hero';
import Headline from '../components/Headline/HeadlineContainer';
import FaqContainer from '../components/FAQ/FaqContainer';
import CTA from '../components/CTA';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <Hero />
      <Headline variant='cards' />
      <Cards />
      <Headline />
      <FaqContainer />
      <Headline variant='slider' />
      <Slider />
      <CTA />
    </div>
  );
};
export default Home;
