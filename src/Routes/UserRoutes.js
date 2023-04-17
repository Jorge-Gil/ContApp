import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import OpcionesProveedoresAjustesPage from "../Pages/OpcionesProveedoresAjustesPage";
import OpcionesProveedoresClientesPage from "../Pages/OpcionesProveedoresClientesPage";
import OpcionesClientesAjustesPage from "../Pages/OpcionesClientesAjustesPage";
import OpcionesClientesProveedoresPage from "../Pages/OpcionesClientesProveedoresPage";
import BusquedaPage from "../Pages/BusquedaPage";
import PerfilPage from "../Pages/PerfilPage";
import { PrivateRoutes } from "./PrivateRoutes";

export const UserRoutes = () => {
  return (


    <Routes>
      <Route path="OpcionesProveedoresAjustes" element={<OpcionesProveedoresAjustesPage />} />
      <Route path="OpcionesProveedoresClientes" element={<OpcionesProveedoresClientesPage />} />
      <Route path="OpcionesClientesAjustes" element={<OpcionesClientesAjustesPage />} />
      <Route path="OpcionesClientesProveedores" element={<OpcionesClientesProveedoresPage />} />
      <Route path="Busqueda" element={<BusquedaPage />} />
      <Route path="Perfil" element={<PerfilPage />} />
    </Routes>
    
  );
};
