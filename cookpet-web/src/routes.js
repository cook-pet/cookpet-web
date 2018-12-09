import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
    </Route>
  </Router>
);

export default Routes;