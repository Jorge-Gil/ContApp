import React from "react";
import Header from "../Components/Header";
import PerfilCard from "../Components/PerfilCard";
import PerfilDatosCard from "../Components/PerfilDatosCard";
import Footer from "../Components/Footer";

export default function PerfilPage() {
  return (
    <>
      <Header />

      <PerfilCard >
      <PerfilDatosCard />
        </PerfilCard>
      
      <Footer />
    </>
  );
}
