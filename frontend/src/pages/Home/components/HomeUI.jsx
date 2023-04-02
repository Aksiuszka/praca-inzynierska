import Cards from './Cards';
import Hero from './Hero';
import Headline from './Headline';
import Faq from './FAQ';
import CTA from './CTA';
import Slider from './Slider';

const Home = () => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <Hero />
      <Headline variant='cards' />
      <Cards />
      <Headline />
      <Faq />
      <Headline variant='slider' />
      <Slider />
      <CTA />
    </div>
  );
};
export default Home;
