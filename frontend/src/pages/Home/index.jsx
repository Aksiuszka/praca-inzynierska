import Cards from './components/CardsContainer';
import Hero from './components/Hero';
import HeadlineContainer from './components/HeadlineContainer';
import FAQContainer from './components/FAQContainer';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Hero />
      <HeadlineContainer variant='cards' />
      <Cards />
      <HeadlineContainer />
      <FAQContainer />
    </div>
  );
};
export default Home;
