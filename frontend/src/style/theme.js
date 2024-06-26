/* eslint-disable import/no-mutable-exports */
import { createTheme } from '@mui/material/styles';

let theme = createTheme();

theme = createTheme({
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
      paper: '#FFF3F1',
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
      green: '#DDF3E7',
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
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '2.7rem',
      },
    },
    decorated: {
      fontFamily: 'Futura',
      fontSize: '3.2rem',
      alignSelf: 'center',
      textAlign: 'center',
      [theme.breakpoints.down('lg')]: {
        fontSize: '2.9rem',
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.9rem',
      },
    },
    decoratedSmall: {
      fontFamily: 'Futura',
      fontSize: '1.5rem',
      [theme.breakpoints.between('xs', 'md')]: {
        fontSize: '1.2rem',
      },
    },
    regular: {
      fontFamily: 'Poppins',
      fontSize: '1rem',
      letterSpacing: '0.1em',
      [theme.breakpoints.down('lg')]: {
        fontSize: '0.95rem',
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '0.85rem',
      },
    },
    headline: {
      fontFamily: 'Poppins',
      fontSize: '2rem',
      fontWeight: '800',
      color: '#2D2D2D',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontWeight: '700',
        fontSize: '1.7rem',
      },
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
      color: '#2D2D2D',
    },
    accent: {
      fontFamily: 'Poppins',
      fontSize: '2rem',
      fontWeight: '600',
      color: '#586378',
      letterSpacing: '0.1em',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.2rem',
      },
    },
  },
});
export default theme;
