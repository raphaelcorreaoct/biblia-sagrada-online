import { useCallback, useEffect, useState } from 'react';
import httpClient from '../../services/httpClient';

export default function useHomeModel() {
    const [books, setBooks] = useState([]);

    const getRandomNumber = useCallback((n: number) => {
        const numeroAleatorio = Math.random();
        const resultado = Math.floor(numeroAleatorio * (n + 1));
        return resultado;
    }, []);

    const getVerseToday = async () => {
        const { data } = await httpClient.get('/books');
        // const randomNumber = getRandomNumber(data.length);
        // const randomBook = data[randomNumber];
        // setBooks(data);

        // console.log(randomBook);

        console.log(data);
    };

    useEffect(() => {
        if (!books.length) {
            getVerseToday();
        }

        console.log(books);
    }, []);

    return {};
}
