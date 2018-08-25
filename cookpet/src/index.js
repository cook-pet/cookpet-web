import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/index.css';
import NatsumeTheme from './NatsumeTheme';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider muiTheme={NatsumeTheme}>
        <App />
    </MuiThemeProvider>
  </BrowserRouter>
  , document.getElementById('root'));
