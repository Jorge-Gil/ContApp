import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import OpcionesProveedores from "../Pages/OpcionesProveedores";
import OpcionesClientes from "../Pages/OpcionesClientes";
import { PrivateRoutes } from "./PrivateRoutes";

export const UserRoutes = () => {
  return (


    <Routes>
      <Route path="OpcionesProveedores" element={<OpcionesProveedores />} />
      <Route path="OpcionesClientes" element={<OpcionesClientes />} />
    </Routes>
    
  );
};
