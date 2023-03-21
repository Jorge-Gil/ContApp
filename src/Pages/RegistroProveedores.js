import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
 function RegistroProveedores() {
   
        const valoresIniciales = {
        Especialidad: "",
          Contrasenia: "",
          Nombre1Cuenta: "",
          Nombre2Cuenta: "",
          Apellido1Cuenta: "",
          Apellido2Cuenta: "",
          
        
          DireccionCuenta: "",
          TelefonoCuenta: "",
          CelularCuenta: "",
        };
      
        const validacion = Yup.object().shape({
        
          Contrasenia: Yup.string()
            .min(3, "La contraseña debe tener como mínimo 3 caracteres")
            .max(20, "La contraseña debe tener como máximo 20 caracteres")
            .required("Contraseña es un campo requerido"),
          Nombre1Cuenta: Yup.string()
            .min(3, "El primer nombre debe tener como mínimo 3 caracteres")
            .max(20, "El primer nombre debe tener como máximo 20 caracteres")
            .required("Primer nombre es un campo requerido"),
          Nombre2Cuenta: Yup.string()
            .min(3, "El segundo nombre debe tener como mínimo 3 caracteres")
            .max(20, "El segundo nombre debe tener como máximo 20 caracteres")
            .notRequired(),
          Apellido1Cuenta: Yup.string()
            .min(3, "El primer apellido debe tener como mínimo 3 caracteres")
            .max(20, "El primer apellido debe tener como máximo 20 caracteres")
            .required("Primer apellido es un campo requerido"),
          Apellido2Cuenta: Yup.string()
            .min(3, "El segundo apellido debe tener como mínimo 3 caracteres")
            .max(20, "El segundo apellido debe tener como máximo 20 caracteres")
            .notRequired(),
          Especialidad: Yup.string()
            .min(3, "La especialidad debe tener como mínimo 3 caracteres")
            .max(30, "La especialidad debe tener como máximo 15 caracteres")
            .required("Genero es un campo requerido"),
    
          DireccionCuenta: Yup.string()
            .min(3, "La dirección debe tener como mínimo 3 caracteres")
            .max(40, "La cédula debe tener como máximo 40 caracteres")
            .required("Dirección es un campo requerido"),
          TelefonoCuenta: Yup.string()
            .min(3, "El número de teléfono debe tener como mínimo 3 caracteres")
            .max(12, "El número de teléfono debe tener como máximo 12 caracteres")
            .required("Número de teléfono es un campo requerido"),
          CelularCuenta: Yup.string()
            .min(3, "El número de celular debe tener como mínimo 3 caracteres")
            .max(10, "El número de teléfono debe tener como máximo 10 caracteres")
            .required("Número de celular es un campo requerido"),
        });

    
      
  return (
    <>
    <Header />
    <div className="flex justify-center">
  <Formik
    initialValues={valoresIniciales}
    validationSchema={validacion}
    // onSubmit={onSubmit}
  >
    <Form className="w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Nombre1Cuenta">
          Primer nombre
        </label>
        <ErrorMessage name="Nombre1Cuenta" component="span" className="text-red-500 text-sm" />
        <Field
          autoComplete="off"
          id="Nombre1Cuenta"
          name="Nombre1Cuenta"
          placeholder="Ingrese su Primer nombre..."
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Nombre2Cuenta">
          Segundo nombre
        </label>
        <ErrorMessage name="Nombre2Cuenta" component="span" className="text-red-500 text-sm" />
        <Field
          autoComplete="off"
          id="Nombre2Cuenta"
          name="Nombre2Cuenta"
          placeholder="Ingrese su Segundo nombre..."
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Apellido1Cuenta">
          Primer apellido
        </label>
        <ErrorMessage name="Apellido1Cuenta" component="span" className="text-red-500 text-sm" />
        <Field
          autoComplete="off"
          id="Apellido1Cuenta"
          name="Apellido1Cuenta"
          placeholder="Ingrese su Primer apellido..."
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Apellido2Cuenta">
          Segundo apellido
        </label>
        <ErrorMessage name="Apellido2Cuenta" component="span" className="text-red-500 text-sm" />
        <Field
          autoComplete="off"
          id="Apellido2Cuenta"
          name="Apellido2Cuenta"
          placeholder="Ingrese su Segundo apellido..."
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Contrasenia">
          Contraseña
        </label>
        <ErrorMessage name="Contrasenia" component="span" className="text-red-500 text-sm" />
        <Field
          autoComplete="off"
          type="password"
          id="Contrasenia"
          name="Contrasenia"
          placeholder="Ingrese su contraseña..."
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
  {/* <label> Especialidad</label>
  <ErrorMessage name="Especialidad" component="span" />
  <Field
    autoComplete="off"
    id="formatoRegistro"
    name="Especialidad"
    placeholder="Ingrese su Especialidad..."
  /> */}
  <select
    name="Especialidad"
    // value={opciones.Genero}
    id="formatoRegistro"
    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="" label="Seleccione su especialidad..." />
    <option value="ContadorFiscal" label="Contador Fiscal" />
    <option value="ContadorGubernamental" label="Contador Gubernamental" />
    <option value="Auditor" label="Auditor" />
    <option value="ConsultorContable" label="Consultor Contable" />
  </select>

  <div>
    <label className="block text-gray-700"> Dirección </label>
    <ErrorMessage name="DireccionCuenta" component="span" className="text-red-500" />
    <Field
      autoComplete="off"
      id="formatoRegistro"
      name="DireccionCuenta"
      placeholder="Ingrese su Dirección..."
      className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  <div>
    <label className="block text-gray-700"> Número de Teléfono </label>
    <ErrorMessage name="TelefonoCuenta" component="span" className="text-red-500" />
    <Field
      autoComplete="off"
      id="formatoRegistro"
      name="TelefonoCuenta"
      placeholder="Ingrese su Teléfono..."
      className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  <div>
    <label className="block text-gray-700"> Número de Celular </label>
    <ErrorMessage name="CelularCuenta" component="span" className="text-red-500" />
    <Field
      autoComplete="off"
      id="formatoRegistro"
      name="CelularCuenta"
      placeholder="Ingrese su Número de Celular..."
      className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  <div className="col-span-2">
    <button
      type="submit"
      className="w-full px-4 py-2 mt-4 font-medium text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Registrarse
    </button>
  </div>
</div>

      </Form>
    </Formik>
  </div>
  <Footer />
  </>
  )
}
export default RegistroProveedores