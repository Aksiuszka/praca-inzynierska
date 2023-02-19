import Cards from './components/CardsContainer';
import Hero from './components/Hero';
import HeadlineContainer from './components/HeadlineContainer';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Hero />
      <HeadlineContainer variant='cards' />
      <Cards />
      <HeadlineContainer />
    </div>
  );
};
export default Home;
