import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    REQUEST_USER,
    RECEIVE_USER_FAILED,
    RECEIVE_USER_SUCCESS,
    SIGNIN_FAILED,
    SIGNIN_SUCCESS,
} from '../actions/auth';

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    loadingUser: true,
    loginErrorMessages: [],
    registerErrorMessages: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FAILED:
            return {
                ...state,
                loginErrorMessages: [action.payload],
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginErrorMessages: [],
            };
        case REQUEST_USER:
            return {
                ...state,
                loadingUser: true,
            };
        case RECEIVE_USER_FAILED:
            return {
                ...state,
                currentUser: null,
                isAuthenticated: false,
                loadingUser: false,
            };
        case RECEIVE_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticated: true,
                loadingUser: false,
        };
        case SIGNIN_FAILED:
            return {
                ...state,
                registerErrorMessages: { ...action.payload },
            };
        case SIGNIN_SUCCESS:
            return {
                ...state,
                registerErrorMessages: {},
            };
        default:
            return state;
    }
};
