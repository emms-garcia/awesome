import { browserHistory } from 'react-router';

import api from '../utils/api';

export const RECEIVE_USER_FAILED = 'RECEIVE_USER_FAILED';
export const RECEIVE_USER_SUCCESS = 'RECEIVE_USER_SUCCESS';
export const REQUEST_USER = 'REQUEST_USER';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const REQUEST_SIGNIN = 'REQUEST_SIGNIN';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';

export const fetchUser = () => {
    return (dispatch) => {
        dispatch({type: REQUEST_USER});

        return api.get('v1/identity')
            .then((response) => {
                return dispatch({type: RECEIVE_USER_SUCCESS, payload: response.data});
            })
            .catch((error) => {
                localStorage.removeItem('access_token');
                return dispatch({type: RECEIVE_USER_FAILED});
            });

    };
};

export const logIn = (username, password) => {
    return (dispatch) => {
        dispatch({type: REQUEST_LOGIN});

        return api.post('v1/auth', {}, { username, password })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access_token);
                dispatch(fetchUser()).then(() => {
                    browserHistory.push('/dashboard');
                });
            })
            .catch((error) => {
                dispatch({type: LOGIN_FAILED, payload: error.response.data.description});
            });
    };
};

export const signIn = (data) => {
    return (dispatch) => {
        dispatch({type: REQUEST_SIGNIN});

        return api.post('v1/users', {}, data)
            .then((response) => {
                dispatch({type: SIGNIN_SUCCESS, payload: response.data});
            })
            .catch((error) => {
                dispatch({type: SIGNIN_FAILED, payload: error.response.data.messages});
            });

    };
};
