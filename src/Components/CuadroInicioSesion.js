import React,{useState, useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../Context/Authcontext";
import { useNavigate, useLocation } from "react-router-dom";



function CuadroInicioSesion() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  

   

  const valoresIniciales = {
   Nombre: "Gahyeon",
    Contrasenia: "123",
    CorreoElectronico: "usuario1@gmail.com",

  };

  const validacion = Yup.object().shape({
    Contrasenia: Yup.string()
      .required("Contraseña es un campo requerido"),
    CorreoElectronico: Yup.string().email()
      .min(3, "El correo electrónico debe tener como mínimo 3 caracteres")
      .max(40, "El correo electrónico debe tener como máximo 40 caracteres")
      .required("Correo electrónico es un campo requerido"),
  });

  // const onSubmit = (data) => {
  //   axios.post("http://localhost:3001/Cuentas", data).then(() => {
  //     console.log(data);
  //     alert("Cuenta registrada Correctamente");
  //   });
  // };

  return (
    <>
  <div className=" place-content-center   grid  w-full max-w-3/4 mx-auto bg-paleta-AzulOscuro font-Outfit overflow-auto">
        <div className="w-full justify-center self-center text-center mt-2 mb-1.5">
          <h1 className="text-white text-5xl font-bold  mb-6 ">ContApp</h1>
          <h2 className="text-white text-3xl font-normal self-center  mb-8  ">
            Inicio de Sesión
          </h2>
        </div>
        <div className=" bg-paleta-MoradoFondo/70 w-full max-w-[550px] self-center min-w-min p-16 rounded-3xl mb-24 relative px-20">
          <Formik
            initialValues={valoresIniciales}
            validationSchema={validacion}
            // onSubmit={onSubmit}
            onSubmit={(values) => {
              console.log(values);
              setUser(values);
              const lastPath = localStorage.getItem("lastPath") || "/";
              navigate(lastPath, { replace: true});

            }}
            className=" "
          >
            <Form className="  w-full">
              <div className=" mb-2">
                <div className="mb-10 ">
                  <label
                    className="block text-white  mb-2 "
                    htmlFor="CorreoElectronico"
                  >
                    Correo electrónico
                  </label>

                  <Field
                    autoComplete="off"
                    id="CorreoElectronico"
                    name="CorreoElectronico"
                    placeholder="Ingrese correo electrónico..."
                    className="appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="CorreoElectronico"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-12">
                  <label
                    className="block text-white mb-2"
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

               
               
              <div className="col-span-2 place-items-end  grid grid-cols-2 gap-5">
                <button
                  type="submit"
                  className="self-end px-4 py-2 mt-4 mb-1 font-normal text-white bg-blue-500 rounded-sm shadow-md mr-10"
                  // style={{ position: "absolute", bottom: 20, left: 80 }}
                >
                  Iniciar Sesión
                </button>

                <button
                type="button"
                   className="self-end px-1 py-2 mt-4 mb-1 font-normal text-paleta-AzulClaro shadow-md "
                   >

                    ¿Olvidó su contraseña?
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
