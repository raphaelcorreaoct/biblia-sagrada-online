export default function Footer() {
    return (
        <footer className="bg-blue-200 p-4 mt-20">
            <div className="container max-w-[1024px] p-4 m-auto">
                <section className="flex flex-col md:flex-row items-center flex-1 justify-between border-b-2 pb-5 border-blue-50">
                    <div className="max-w-[300px]">
                        <h3 className="text-2xl">Inscreva-se para receber versículos todos os dias!</h3>
                    </div>

                    <form className="flex items-center flex-1 justify-end">
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            className="p-2 border border-gray-600 rounded-l-md focus:outline-none focus:border-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none">
                            Assinar
                        </button>
                    </form>
                </section>

                <section className="flex justify-between my-10 flex-col md:flex-row">
                    {[1, 2, 3, 4].map(() => (
                        <div>
                            <h3 className="text-xl">Bíblia Online</h3>
                            <ul>
                                <li>
                                    <a href="#" className="text-base text-blue-600 hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base text-blue-600 hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base text-blue-600 hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base text-blue-600 hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-base text-blue-600 hover:underline">
                                        Home
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
        </footer>
    );
}
