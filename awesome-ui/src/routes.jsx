import React from 'react';
import { Route } from 'react-router';

import DashboardPage from './components/pages/DashboardPage';
import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';
import WidgetLibraryPage from './components/pages/WidgetLibraryPage';

import { requireAuthentication } from './components/auth/authenticatedComponent';
import { requireNoAuthentication } from './components/auth/notAuthenticatedComponent';

export default (
    <Route path='/'>
        <Route path='dashboard' component={requireAuthentication(DashboardPage)} />
        <Route path='library' component={requireAuthentication(WidgetLibraryPage)} />
        <Route path='login' component={requireNoAuthentication(LoginPage)}/>

        <Route path='*' component={NotFoundPage} />
    </Route>
);
