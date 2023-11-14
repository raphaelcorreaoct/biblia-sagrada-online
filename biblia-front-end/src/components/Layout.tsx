
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return <>
    <Header />

    <main className="container m-auto my-5 max-w-[1024px]">
      {children}
    </main>


    <Footer />
  </>;
}
