import Headline from './Headline/Main';

const PrivacyUI = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}
    >
      <Headline variant='main' />
      <Headline />
      <Headline />
    </div>
  );
};
export default PrivacyUI;
