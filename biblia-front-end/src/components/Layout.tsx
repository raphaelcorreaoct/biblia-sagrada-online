import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { getToken } from '../services/bibliaServices';

export default function Layout({ children }) {
    useEffect(() => {
        if (!window.localStorage.getItem('access_token')) {
            getToken();
        }
    }, []);

    return (
        <>
            <Header />

            <main className="container m-auto my-5 max-w-[1024px] px-3 xl:px-0">{children}</main>

            <Footer />
        </>
    );
}
