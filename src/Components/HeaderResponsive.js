<header className="bg-paleta-AzulOscuro font-Outfit">
  <nav className=" mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap items-center justify-between h-16">
      <Link to="/" className="flex-shrink-0 flex items-center">
        <img className="h-12 w-12 mr-2" src={Logo} alt="Placeholder" />
        <h1 className="text-white font-bold text-lg">ContApp</h1>
      </Link>
      <div className="flex-1 flex justify-center lg:ml-6 max-w:96">
        <div className="w-full lg:max-w-5xl">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          {location.pathname !== "/RegistroProveedores" &&
          location.pathname !== "/RegistroClientes" &&
          location.pathname !== "/IniciarSesion" ? (
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon
                  className="h-5 w-5 text-gray-800"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full  border border-transparent rounded-md py-2 pl-10 pr-3 text-base placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 "
                placeholder="Buscar"
              />
            </div>
          ) : null}
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
      <Chat />
      {user && <PerfilDropdown />}
      {!user && (
        <div className="hidden lg:block lg:ml-4 ">
          <div className="flex space-x-4">
            {location.pathname !== "/RegistroProveedores" &&
            location.pathname !== "/RegistroClientes" &&
            location.pathname !== "/IniciarSesion" ? (
              <>
                <Link
                  to="/RegistroProveedores"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Quiero ser proveedor
                </Link>
                <Link
                  to="/RegistroClientes"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Quiero ser cliente
                </Link>
                <Link
                  to="/IniciarSesion"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Iniciar sesión
                </Link>
              </>
            ) : null}

            {location.pathname === "/IniciarSesion" ? (
              <>
                <Link
                  to="/RegistroProveedores"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Registro para proveedores
                </Link>

                <Link
                  to="/RegistroClientes"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Registro para clientes
                </Link>
              </>
            ) : null}

            {location.pathname === "/RegistroProveedores" ||
            location.pathname === "/RegistroClientes" ? (
              <>
                <Link
                  to="/IniciarSesion"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Iniciar sesión
                </Link>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  </nav>
</header>

<style>
@media (max-width: 640px) {
  .font-Outfit h1,
  .font-Outfit a {
    font-size: 1.2rem;
  }

  .flex-wrap {
    flex-direction: column;
  }

  .hidden {
    display: none !important;
  }
}
</style>
