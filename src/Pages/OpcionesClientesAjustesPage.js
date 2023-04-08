import React from "react";
import Header from "../Components/Header";
import OpcionesLayout from "../Components/OpcionesLayout";
import OpcionesClientesAjustes from "../Components/OpcionesClientesAjustes";
import Footer from "../Components/Footer";

export default function OpcionesClientesAjustesPage() {
  return (
    <>
      <Header />
      
      <OpcionesLayout>
      <OpcionesClientesAjustes />
      </OpcionesLayout>
     
    </>
  );
}
