import React from "react";
import Header from "../Components/Header";
import OpcionesLayout from "../Components/OpcionesLayout";
import Footer from "../Components/Footer";
import OpcionesProveedoresLayout from "../Components/OpcionesProveedoresLayout";

export default function OpcionesProveedores() {
  return (
    <>
      <Header />
      <OpcionesProveedoresLayout />
      <OpcionesLayout />

      <Footer />
    </>
  );
}
