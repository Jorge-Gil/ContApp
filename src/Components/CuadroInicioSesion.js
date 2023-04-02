import React,{useRef} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PreviewImagen from "./PreviewImagen";

function CuadroInicioSesion() {


  const valoresIniciales = {
   
    Contrasenia: "",
    Nombre1Cuenta: "",
    Nombre2Cuenta: "",
    Apellido1Cuenta: "",
    Apellido2Cuenta: "",
    Cedula: "",
    CorreoElectronico: "",
    DireccionCuenta: "",
    TelefonoCuenta: "",
    CelularCuenta: "",
    FotoPerfil: "",
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
    Cedula: Yup.string()
      .min(10, "La Cédula debe tener como mínimo 10 caracteres")
      .max(11, "La Cédula debe tener como máximo 11 caracteres")
      .required("Cédula es un campo requerido"),
   

    DireccionCuenta: Yup.string()
      .min(3, "La dirección debe tener como mínimo 3 caracteres")
      .max(40, "La dirección debe tener como máximo 40 caracteres")
      .required("Dirección es un campo requerido"),

    CorreoElectronico: Yup.string()
      .min(3, "El correo electrónico debe tener como mínimo 3 caracteres")
      .max(40, "El correo electrónico debe tener como máximo 40 caracteres")
      .required("Correo electrónico es un campo requerido"),
    TelefonoCuenta: Yup.string()
      .min(3, "El número de teléfono debe tener como mínimo 3 caracteres")
      .max(12, "El número de teléfono debe tener como máximo 12 caracteres")
      .required("Número de teléfono es un campo requerido"),
    CelularCuenta: Yup.string()
      .min(3, "El número de celular debe tener como mínimo 3 caracteres")
      .max(10, "El número de teléfono debe tener como máximo 10 caracteres")
      .required("Número de celular es un campo requerido"),

      FotoPerfil: Yup
      .mixed()
      .nullable()
      .test(
        "FILE_SIZE",
        "El archivo es muy grande",
        (value) => value && value.size <= (1024*1024)*10)
      .test("FILE_FORMAT", "Solo formatos .jpg, .jpeg y .png", (value) => value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type))

  });

  // const onSubmit = (data) => {
  //   axios.post("http://localhost:3001/Cuentas", data).then(() => {
  //     console.log(data);
  //     alert("Cuenta registrada Correctamente");
  //   });
  // };

  return (
    <>
      <div className=" justify-center grid w-full bg-paleta-AzulOscuro font-Outfit overflow-auto">
        <div className="w-full justify-center self-center text-center mt-2 mb-1.5">
          <h1 className="text-white text-5xl font-bold  mb-6 ">ContApp</h1>
          <h2 className="text-white text-3xl font-medium self-center  mb-8  ">
            Inicio de Sesión
          </h2>
        </div>
        <div className=" bg-paleta-MoradoFondo/70 w-full max-w-[1600px] min-w-min p-16 rounded-3xl mb-10 relative">
          <Formik
            initialValues={valoresIniciales}
            validationSchema={validacion}
            // onSubmit={onSubmit}
            onSubmit={(values) => {
              console.log(values);
            }}
            className=" "
          >
           
            <Form className="  w-full">
              <div className=" mb-2">
                <div className="mb-4 ">
                  <label
                    className="block text-white  mb-2 text-center"
                    htmlFor="Nombre1Cuenta"
                  >
                   Correo electrónico
                  </label>

                  <Field
                    autoComplete="off"
                    id="Nombre1Cuenta"
                    name="Nombre1Cuenta"
                    placeholder="Ingrese su Primer nombre..."
                    className="appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="Nombre1Cuenta"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

             

                <div className="mb-4">
                  <label
                    className="block text-white mb-2 text-center"
                    htmlFor="Contrasenia"
                  >
                    Contraseña 
                  </label>

                  <Field
                    autoComplete="off"
                    type="password"
                    id="Contrasenia"
                    name="Contrasenia"
                    placeholder="Ingrese su contraseña..."
                    className="appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="Contrasenia"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

               
              <div className="col-span-2 place-items-end">
                <button
                  type="submit"
                  className="self-end px-4 py-2 mt-4 font-normal text-white bg-paleta-MoradoBoton rounded-sm shadow-md "
                  style={{ position: "absolute", bottom: 20, right: 60 }}
                >
                  Registrarse
                </button>
                </div>
              </div>
              
            </Form>
              
          </Formik>
        </div>
      </div>
    </>
  );
}
export default CuadroInicioSesion;
