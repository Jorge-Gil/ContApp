import React from "react";
import Header from "../Components/Header";
import OpcionesLayout from "../Components/OpcionesLayout";
import OpcionesClientesProveedores from "../Components/OpcionesClientesProveedores";
import Footer from "../Components/Footer";

export default function OpcionesClientesProveedoresPage() {
  return (
    <>
      <Header />
      
      <OpcionesLayout>
      <OpcionesClientesProveedores />
      </OpcionesLayout>
     
    </>
  );
}
