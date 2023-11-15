import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://www.abibliadigital.com.br/api/',
});

httpClient.interceptors.request.use(
    config => {
        const token = window.localStorage.getItem('access_token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

export default httpClient;
