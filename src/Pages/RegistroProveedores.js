import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RegistroProveedoresLayout from "../Components/RegistroProveedoresLayout";

function RegistroProveedores() {
  return (
    <>
      <Header />
      <RegistroProveedoresLayout />
      <Footer />
    </>
  );
}
export default RegistroProveedores;
