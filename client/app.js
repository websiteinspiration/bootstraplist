import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';

import routes from '../app/routes';
import store from '../app/store';
import * as actions from '../app/actions';
import Root from '../app/containers/root';

import { setupRealtime } from './Realtime';

import '../style/pure.css';
import '../style/main.styl';
import '../style/spinner.styl';

/**
 * Render the page
 */
ReactDOM.render(
  <Root store={store} routing={routes} />,
  document.getElementById('app')
);

/**
 * Set up client-side realtime comms
 */
setupRealtime(store, actions);
