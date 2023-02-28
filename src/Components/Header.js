import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="bg-paleta-AzulOscuro">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold">ContApp</h1>
          </div>
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full  border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 sm:text-sm"
                  placeholder="Buscar"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block lg:ml-4">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Quiero ser proveedor
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Quiero ser cliente
              </a>
                <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Iniciar sesión
                </a>
            </div>
            </div>
        </div>
        </nav>
    </header>
    );
}

export default Header;