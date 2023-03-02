import React from "react";
import RegistroClientesLayout from "../Components/RegistroClientesLayout";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function RegistroClientes() {
  return (
    <>
      <Header />
      <div>RegistroClientes</div>
      <RegistroClientesLayout />
      <Footer />
    </>
  );
}
