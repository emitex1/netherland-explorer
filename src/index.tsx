import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme, responsiveFontSizes } from '@material-ui/core';
import { orange, purple } from '@material-ui/core/colors';

const theme = responsiveFontSizes(createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: orange[400]
    }
  }
}));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
