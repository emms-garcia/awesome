import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import widgets from './widgets';

export default combineReducers({
    routing: routerReducer,
    auth,
    widgets,
});
