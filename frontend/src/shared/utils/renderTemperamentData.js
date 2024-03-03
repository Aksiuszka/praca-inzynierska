export const getTemperamentInfo = (type) => {
  let title;
  let content;

  switch (type) {
    case 'choleric':
      title = 'Jesteś Cholerykiem';
      content =
        ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
      break;
    case 'sanguine':
      title = 'Jesteś Sangwinikiem';
      content =
        ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
      break;
    case 'flegmatic':
      title = 'Jesteś Flegmatykiem';
      content =
        ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
      break;
    case 'melancholic':
      title = 'Jesteś Melancholikiem';
      content =
        ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
      break;
    default:
      title = 'Default Title';
      content = 'Default Content Lorem ipsum...';
  }

  return { title, content };
};
