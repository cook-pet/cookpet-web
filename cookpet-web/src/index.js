import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

  // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
