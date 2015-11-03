import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './../routes';

const history = createBrowserHistory();
const mountNode = document.getElementById('app');

ReactDom.render(
  <Router children={routes} history={history} />,
  mountNode
);
