import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import OpcionesProveedoresAjustesPage from "../Pages/OpcionesProveedoresAjustesPage";
import OpcionesProveedoresClientesPage from "../Pages/OpcionesProveedoresClientesPage";
import OpcionesClientes from "../Pages/OpcionesClientes";
import { PrivateRoutes } from "./PrivateRoutes";

export const UserRoutes = () => {
  return (


    <Routes>
      <Route path="OpcionesProveedoresAjustes" element={<OpcionesProveedoresAjustesPage />} />
      <Route path="OpcionesProveedoresClientes" element={<OpcionesProveedoresClientesPage />} />
      <Route path="OpcionesClientes" element={<OpcionesClientes />} />
    </Routes>
    
  );
};
