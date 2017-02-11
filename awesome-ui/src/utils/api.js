import axios from 'axios';

const baseUrl = 'http://192.168.99.100/';

const getHeaders = () => {
    const token = localStorage.getItem('access_token') || null;
    return {
        'Authorization': `JWT ${token}`,
    };
};

export default {
    get: (url, params = {}) => {
        return axios({
            headers: getHeaders(),
            method: 'get',
            responseType: 'json',
            url: `${baseUrl}${url}`,
            params,
        });
    },

    post: (url, params = {}, data = {}) => {
        return axios({
            headers: getHeaders(),
            method: 'post',
            responseType: 'json',
            url: `${baseUrl}${url}`,
            data,
            params,
        });
    },
};
