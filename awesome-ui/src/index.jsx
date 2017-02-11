import 'styles/main.scss';
import 'materialize-css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Redirect from='/' to='dashboard' />
            {routes}
        </Router>
    </Provider>, document.getElementById('app')
);
