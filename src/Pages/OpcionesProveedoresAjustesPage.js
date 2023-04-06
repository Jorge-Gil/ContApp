import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OpcionesLayout from "../Components/OpcionesLayout";
import  OpcionesProveedoresAjustes from "../Components/OpcionesProveedoresAjustes";

export default function OpcionesProveedoresAjustesPage() {
  return (
    <>
      <Header />
      <OpcionesLayout >

     <OpcionesProveedoresAjustes />
     </OpcionesLayout>
    </>
  );
}
