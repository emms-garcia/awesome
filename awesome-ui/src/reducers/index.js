import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import account from './account';
import login from './login';
import signin from './signin';

export default combineReducers({
    routing: routerReducer,
    account,
    login,
    signin,
});
