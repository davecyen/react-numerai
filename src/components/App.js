import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home/Home';
import Profile from './Profile/Profile';

import * as routes from '../constants/routes';

const App = () => (
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
    </div>
  </Router>
);

export default App;
