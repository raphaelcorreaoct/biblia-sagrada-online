import httpClient from './httpClient';

export const getToken = async () => {
    const { data } = await httpClient.put('/users/token', {
        email: 'raphael.correa.b@gmial.com',
        password: 'googleJoe1993!#',
    });

    window.localStorage.setItem('access_token', data.token);
};

export const getBooks = async () => {
    return await httpClient.get('/books');
};
