import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import InicioSesion from "../Pages/InicioSesion";
import RegistroProveedores from "../Pages/RegistroProveedores";
import RegistroClientes from "../Pages/RegistroClientes";
import OpcionesProveedores from "../Pages/OpcionesProveedores";
import OpcionesClientes from "../Pages/OpcionesClientes";
import { PrivateRoutes } from "./PrivateRoutes";
import  {UserRoutes}  from "./UserRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="IniciarSesion" element={<InicioSesion />} />
      <Route path="RegistroProveedores" element={<RegistroProveedores />} />
      <Route path="RegistroClientes" element={<RegistroClientes />} />
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <UserRoutes />
           </PrivateRoutes>
        }
      />

      {/* <Route path="OpcionesProveedores" element={<OpcionesProveedores/>} />
            <Route path="OpcionesClientes" element={<OpcionesClientes/>} /> */}
    </Routes>
  );
};
