import Cards from '../components/Cards/CardsContainer';
import Hero from '../components/Hero';
import Headline from '../components/Headline';
import FaqContainer from '../components/FAQ/FaqContainer';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Hero />
      <Headline variant='cards' />
      <Cards />
      <Headline />
      <FaqContainer />
      <Headline variant='slider' />
      <CTA />
    </div>
  );
};
export default Home;
