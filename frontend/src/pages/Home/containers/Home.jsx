import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Headline from '../components/Headline';
import FaqContainer from '../components/FAQ';
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
