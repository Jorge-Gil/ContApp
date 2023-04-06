import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OpcionesLayout from "../Components/OpcionesLayout";
import  OpcionesProveedoresClientes from "../Components/OpcionesProveedoresClientes";

export default function OpcionesProveedoresClientesPage() {
  return (
    <>
      <Header />
      <OpcionesLayout >

     <OpcionesProveedoresClientes />
     </OpcionesLayout>
    </>
  );
}
