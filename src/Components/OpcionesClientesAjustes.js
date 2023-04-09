import React, { useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import AgregarFoto from "../Images/AgregarFoto.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PreviewImagen from "./PreviewImagen";
import Swal from "sweetalert2";

function OpcionesClientesAjustes() {
  const valoresIniciales = {
    Contrasenia: "",
  
    CorreoElectronico: "",
    DireccionCuenta: "",
    TelefonoCuenta: "",
    CelularCuenta: "",
    FotoPerfil: "",
  };

  const fileRef = useRef(null);

  const validacion = Yup.object().shape({
    Contrasenia: Yup.string()
      .min(3, "La contraseña debe tener como mínimo 3 caracteres")
      .max(20, "La contraseña debe tener como máximo 20 caracteres"),

  

    DireccionCuenta: Yup.string()
      .min(3, "La dirección debe tener como mínimo 3 caracteres")
      .max(40, "La dirección debe tener como máximo 40 caracteres"),

    CorreoElectronico: Yup.string()
      .min(3, "El correo electrónico debe tener como mínimo 3 caracteres")
      .max(40, "El correo electrónico debe tener como máximo 40 caracteres")
      .email("El correo electrónico no es válido"),

    TelefonoCuenta: Yup.string()
      .min(3, "El número de teléfono debe tener como mínimo 3 caracteres")
      .max(12, "El número de teléfono debe tener como máximo 12 caracteres"),

    CelularCuenta: Yup.string()
      .min(3, "El número de celular debe tener como mínimo 3 caracteres")
      .max(10, "El número de teléfono debe tener como máximo 10 caracteres"),

    FotoPerfil: Yup.mixed()
      .nullable()
      .test("FILE_SIZE", "El archivo es muy grande", (value) => {
        if (value) {
          return value.size <= 1024 * 1024 * 10;
        } else return true;
      })
      .test("FILE_FORMAT", "Solo formatos .jpg, .jpeg y .png", (value) => {
        if (value) {
          return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
        } else return true;
      }),
  });

  const PerfilActualizado = () => {
    Swal.fire({
      title: "Perfil actualizado exitosamente",
      icon: "success",
    });
  };

  return (
    <div className="mt-20 ml-8 bg-paleta-MoradoFondo/70 w-full max-w-[1000px] self-center min-w-min p-16 rounded-3xl mb-24  px-20 shadow-lg">
      <div className="flex">
        <NavLink
          className={(args) =>
            `${
              args.isActive
                ? "text-paleta-AzulResaltado px-3 border-b-2 border-paleta-AzulResaltado flex-grow w-[33%] pb-1"
                : "border-b-2 flex-grow"
            }`
          }
          to="/OpcionesClientesAjustes"
        >
          <button className="self-start grid grid-flow-col">
            <p className="text-2xl text-center">Ajustes de cuenta</p>
          </button>
        </NavLink>

        <NavLink
          className={(args) =>
            `${
              args.isActive
                ? "text-paleta-AzulResaltado border-b-2 flex-grow"
                : "border-b-2 w-full "
            }`
          }
          to="/OpcionesClientesProveedores"
        >
          <button className=" grid grid-flow-col pl-60">
            <p className="text-2xl text-center">Proveedores</p>
          </button>
        </NavLink>
      </div>
      <div className="mt-6 text-left">
        <Formik
          initialValues={valoresIniciales}
          validationSchema={validacion}
          // onSubmit={onSubmit}
          onSubmit={(values) => {
            console.log(values);
          }}
          className=" "
        >
          {({ values, setFieldValue }) => (
            <Form className="  w-full">
              <div className="mt-6 text-left border-b-2 pb-6">
                <label className="text-xl pl-2" htmlFor="FotoPerfil">
                  Tu foto de perfil
                </label>
                <div className="max-w-[180px]">
                  <input
                    type="file"
                    hidden
                    id="FotoPerfilAjustes"
                    ref={fileRef}
                    placeholder="Ingrese su foto..."
                    className="self-center appearance-none rounded-full w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:cursor-pointer"
                    onChange={(event) => {
                      setFieldValue("FotoPerfil", event.currentTarget.files[0]);
                    }}
                  />

                  <button
                    type ="button"
                    className="self-center appearance-none  font-bold  text-gray-800 leading-tight focus:outline-none focus:shadow-outline hover:cursor-pointer "
                    onClick={() => fileRef.current.click()}
                  >
                    {!values.FotoPerfil && (
                      <PreviewImagen file={values.FotoPerfil} />
                    ) ? (
                      <img
                        src={AgregarFoto}
                        alt="AgregarFoto"
                        className="mt-4 w-40 h-40 mb-0.5  hover:cursor-pointer rounded-lg"
                      />
                    ) : (
                      <PreviewImagen file={values.FotoPerfil} />
                    )}
                  </button>
                  <ErrorMessage
                    name="FotoPerfil"
                    component="span"
                    className="text-red-500 text-sm "
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 mt-6  mb-4">
                <div className="mr-4">
                  <label className="block text-white ">Dirección</label>

                  <Field
                    autoComplete="off"
                    id="formatoAjustes"
                    name="DireccionCuenta"
                    placeholder="Ingrese su nueva Dirección..."
                    className="w-full px-4 py-2 mt-2 text-gray-700  max-w-md  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="DireccionCuenta"
                    component="span"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <label className="block text-white">Correo electrónico</label>
                  <Field
                    autoComplete="off"
                    id="formatoAjustes"
                    name="CorreoElectronico"
                    placeholder="Ingrese su nuevo Correo..."
                    className="w-full px-4 py-2 mt-2 text-gray-700  max-w-md bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="CorreoElectronico"
                    component="span"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 mb-6">
                <div className="mr-4">
                  <label className="block text-white ">
                    Número de Teléfono
                  </label>
                  <Field
                    autoComplete="off"
                    id="formatoAjustes"
                    name="TelefonoCuenta"
                    placeholder="Ingrese su nuevo Teléfono..."
                    className="w-full px-4 py-2 mt-2 text-gray-700  max-w-md bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="TelefonoCuenta"
                    component="span"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <label className="block text-white">Número de Celular</label>
                  <Field
                    autoComplete="off"
                    id="formatoAjustes"
                    name="CelularCuenta"
                    placeholder="Ingrese su nuevo Número de Celular..."
                    className="w-full px-4 py-2 mt-2 text-gray-700 max-w-md  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="CelularCuenta"
                    component="span"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2  mb-6">
                
                 

                <div className="mb-4">
                  <label
                    className="block text-white mb-2 "
                    htmlFor="Contrasenia"
                  >
                    Contraseña
                  </label>

                  <Field
                    autoComplete="off"
                    type="password"
                    id="Contrasenia"
                    name="Contrasenia"
                    placeholder="Ingrese su nueva contraseña..."
                    className="appearance-none border rounded w-full py-2 px-3  max-w-[96%] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="Contrasenia"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="col-span-2 place-items-end mt-14">
                <button
                  type="submit"
                  className="self-end px-4 py-2  font-semibold  bg-paleta-AzulResaltado rounded-md shadow-md text-gray-800 "
                  // style={{ position: "absolute", bottom: 20, left: 80 }}
                  onClick={PerfilActualizado}
                >
                  Actualizar Perfil
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default OpcionesClientesAjustes;

