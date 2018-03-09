import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home/Home';
import Profile from './Profile/Profile';
import Tournaments from './Tournaments/Tournaments';
import Balances from './Balances/Balances';

import * as routes from '../constants/routes';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      light: '#fefefe',
      main: '#030303',
      dark: '#030303',
      contrastText: '#fff',
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: '#f2f2f2',
      main: '#fff',
      dark: '#090909',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#999',
    },
    text: {
      primary: '#fff',
      secondary: '#fff'
    },
    background: {
      paper: '#030303',
      default: '#fff',
    }
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    button: {
      fontSize: 14,
      textTransform: 'none',
      color: '#fff',
      flatPrimary: {
        color: '#fff'
      }
    },
    display1: {
      color: '#fff',
      fontFamily: 'Roboto, sans-serif'
    },
    title: {
      fontSize: 20,
      textTransform: 'uppercase',
    },
    subheading: {
      fontSize: 13
    }
  },
  mixins: {
    toolbar: {
      minHeight: 95,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 95,
      },
      '@media (min-width:600px)': {
        minHeight: 95
      }
    }
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Route
          exact path={routes.HOME}
          component={Home}
        />
        <Route
          exact path={routes.PROFILE}
          component={Profile}
        />
        <Route
          exact path={routes.TOURNAMENTS}
          component={Tournaments}
        />
        <Route
          exact path={routes.BALANCES}
          component={Balances}
        />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
