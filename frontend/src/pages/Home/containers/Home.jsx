import Cards from '../components/Cards/CardsContainer';
import Hero from '../components/Hero';
import Headline from '../components/Headline';
import FaqContainer from '../components/FAQ/FaqContainer';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Hero />
      <Headline variant='cards' />
      <Cards />
      <Headline />
      <FaqContainer />
    </div>
  );
};
export default Home;
