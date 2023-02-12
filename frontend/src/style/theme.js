import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    action: {
      selected: '#F4E6EB',
      hover: '#FFEDEC',
      disabled: '#9B9B9B',
    },
    primary: {
      main: '#2D2D2D',
      light: '#FFFFFF',
      dark: '#586378',
    },
    background: {
      default: '#FFFFFF',
    },
    secondary: {
      main: '#F7D2CA',
      light: '#F4E6EB',
      dark: '#F379A1',
    },
    accent: {
      main: '#FFE7BE',
      light: '#C9957',
      dark: '#812C02',
    },
    pastels: {
      pink: '#FFF6FA',
      yellow: '#FFF6E3',
      orange: '#FFF3F1',
      grey: '#D5D3DE',
    },
    icons: {
      default: '#3E3E3E',
      pink: '#DF7CA8',
      orange: '#CE716A',
      yellow: '#CFB279',
      white: '#FFFFFF',
    },
    text: {
      primary: '#2D2D2D',
      secondary: '#586378',
      accent: '#F379A1',
    },
  },
  typography: {
    display: {
      fontFamily: 'Futura',
      fontSize: '4.875rem',
    },
    regular: {
      fontFamily: 'Poppins',
      fontSize: '1.25rem',
    },
    headline: {
      fontFamily: 'Poppins',
      fontSize: '3rem',
    },
    highlighted: {
      fontFamily: 'Poppins',
      fontSize: '1.1rem',
      fontWeight: '800',
      color: '#2D2D2D',
    },
    paragraph: {
      fontFamily: 'Poppins',
      fontSize: '1rem',
    },
    accent: {
      fontFamily: 'Poppins',
      fontSize: '2.25rem',
      color: '#586378',
    },
  },
});
export default theme;
