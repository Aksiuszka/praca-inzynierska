import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './style/theme';
import './style/general.css';
import App from './App';
import { store } from './store/store';
import { LanguageProvider } from './shared/context/language';

import './locales';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='866841545206-9tcafesl34jpqhuaibjp04jl56hbu5if.apps.googleusercontent.com'>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <LanguageProvider>
              <CssBaseline />
              <App />
            </LanguageProvider>
          </StyledEngineProvider>
        </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
