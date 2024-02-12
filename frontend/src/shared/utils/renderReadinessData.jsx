import NotReady from '../assets/images/results/prescreening/NotReady.png';
import NotBad from '../assets/images/results/prescreening/NotBad.png';
import Ready from '../assets/images/results/prescreening/Ready.png';

export const renderHeroImg = (type) => {
  switch (type) {
    case 'ready':
      return <img src={Ready} alt='ready' />;
    case 'notbad':
      return <img src={NotBad} alt='almost ready' />;
    case 'notReady':
      return <img src={NotReady} alt='not ready' />;
    default:
      return null;
  }
};

export const getHeroImgInfo = (type) => {
  let title;
  let content;

  switch (type) {
    case 'ready':
      title = 'Ready!';
      content =
        ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
      break;
    case 'notbad':
      title = 'Not Bad!';
      content =
        ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
      break;
    case 'notReady':
      title = 'Not Ready!';
      content =
        ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
      break;
    default:
      title = 'Default Title';
      content = 'Default Content Lorem ipsum...';
  }

  return { title, content };
};
