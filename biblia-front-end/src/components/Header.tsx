export default function Header() {
    return (
        <header className="bg-blue-500 p-4">
            <div className="container mx-auto flex items-center justify-between max-w-[1024px]">
                <div className="flex items-center">
                    <h1 className="text-white text-lg font-semibold">Bíblia Online</h1>
                </div>
                <nav className="items-center space-x-4 hidden xl:flex">
                    <a href="#" className="text-white">
                        Home
                    </a>
                    <a href="#" className="text-white">
                        Sobre
                    </a>

                    {/* Menu Dropdown */}
                    <div className="relative group">
                        <a href="#" className="text-white cursor-pointer">
                            Serviços
                        </a>
                        <div className="absolute hidden bg-white text-gray-800 p-2 mt-2 space-y-2 group-hover:block">
                            <a href="#">Serviço 1</a>
                            <a href="#">Serviço 2</a>
                            <a href="#">Serviço 3</a>
                        </div>
                    </div>
                </nav>
                {/* Campo de Busca */}
                <div className="items-center hidden xl:flex">
                    <input type="text" placeholder="Buscar" className="p-2 border border-gray-300 rounded-md mr-4" />
                </div>

                {/* Menu Horizontal */}
            </div>
        </header>
    );
}
