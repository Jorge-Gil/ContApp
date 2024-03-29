import React,{useRef, useState} from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import PreviewImagen from "./PreviewImagen";
import axios from "axios";

function RegistroProveedoresLayout() {

  const [imageFile, setImageFile] = useState(null);

  const valoresIniciales = {
    especialidad: "",
    contrasenia: "",
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    cedula: "",
    correo: "",
    direccion: "",
    telefono: "",
    celular: "",
    fotoPath: "",
  };

  const fileRef = useRef(null);

  const validacion = Yup.object().shape({
    contrasenia: Yup.string()
      .min(3, "La contraseña debe tener como mínimo 3 caracteres")
      .max(20, "La contraseña debe tener como máximo 20 caracteres")
      .required("Contraseña es un campo requerido"),
      primerNombre: Yup.string()
      .min(3, "El primer nombre debe tener como mínimo 3 caracteres")
      .max(20, "El primer nombre debe tener como máximo 20 caracteres")
      .required("Primer nombre es un campo requerido"),
      segundoNombre: Yup.string()
      .min(3, "El segundo nombre debe tener como mínimo 3 caracteres")
      .max(20, "El segundo nombre debe tener como máximo 20 caracteres")
      .notRequired(),
      primerApellido: Yup.string()
      .min(3, "El primer apellido debe tener como mínimo 3 caracteres")
      .max(20, "El primer apellido debe tener como máximo 20 caracteres")
      .required("Primer apellido es un campo requerido"),
      segundoApellido: Yup.string()
      .min(3, "El segundo apellido debe tener como mínimo 3 caracteres")
      .max(20, "El segundo apellido debe tener como máximo 20 caracteres")
      .notRequired(),
      cedula: Yup.string()
      .min(10, "La Cédula debe tener como mínimo 10 caracteres")
      .max(11, "La Cédula debe tener como máximo 11 caracteres")
      .required("Cédula es un campo requerido"),
      especialidad: Yup.string()
      .min(3, "La especialidad debe tener como mínimo 3 caracteres")
      .max(30, "La especialidad debe tener como máximo 30 caracteres")
      .required("Especialidad es un campo requerido"),

      direccion: Yup.string()
      .min(3, "La dirección debe tener como mínimo 3 caracteres")
      .max(40, "La dirección debe tener como máximo 40 caracteres")
      .required("Dirección es un campo requerido"),

      correo: Yup.string()
      .min(3, "El correo electrónico debe tener como mínimo 3 caracteres")
      .max(40, "El correo electrónico debe tener como máximo 40 caracteres")
      .email("El correo electrónico debe ser válido")
      .required("Correo electrónico es un campo requerido"),
      telefono: Yup.string()
      .min(3, "El número de teléfono debe tener como mínimo 3 caracteres")
      .max(12, "El número de teléfono debe tener como máximo 12 caracteres")
      .required("Número de teléfono es un campo requerido"),
      celular: Yup.string()
      .min(3, "El número de celular debe tener como mínimo 3 caracteres")
      .max(10, "El número de teléfono debe tener como máximo 10 caracteres")
      .required("Número de celular es un campo requerido"),

      fotoPath: Yup.mixed()
      .nullable()
      .test(
        "FILE_SIZE",
        "El archivo es muy grande",
        (value) =>{ if (value){ return value.size <= (1024 * 1024 * 10)} else return true}
      )
      .test(
        "FILE_FORMAT",
        "Solo formatos .jpg, .jpeg y .png",
        (value) =>{
        if  (value){ return ["image/jpg", "image/jpeg", "image/png"].includes(value.type)} else return true} 
      ),

  });

  const onSubmit = (data) => {
    const imagePath = URL.createObjectURL(imageFile);
    data.tipoUsuario = "Proveedor";
    data.likes =0
    data.dislikes =0
    data.fotoPath = imagePath;
    console.log(data);
    axios.post("http://localhost:3001/auth/register", data).then(() => {

      // data.tipoUsuario = "Proveedor";
      console.log(data);
     
      alert("Cuenta registrada Correctamente");
    });
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   const fotoPath = URL.createObjectURL(file);
  //   setFieldValue("fotoPath", fotoPath);
  // };

  return (
    <>
      <div className=" justify-center grid w-full bg-paleta-AzulOscuro font-Outfit">
        <div className="w-full justify-center self-center text-center mt-2 mb-1.5">
          <h1 className="text-white text-5xl font-bold  mb-6 ">ContApp</h1>
          <h2 className="text-white text-3xl font-normal self-center  mb-8  ">
            Registro para proveedores
          </h2>
        </div>
        <div className=" bg-paleta-MoradoFondo/70 w-full max-w-[1600px] min-w-min p-16 rounded-3xl mb-10 relative">
          <Formik
            initialValues={valoresIniciales}
            validationSchema={validacion}
            onSubmit={onSubmit}
            // onSubmit={(values) => {
            //   console.log(values);
            // }}
            className=" "
          >
              {({ values, setFieldValue }) => (
            <Form className="  w-full">
              <div className="grid grid-cols-4 gap-10 mb-2">
                <div className="mb-4 ">
                  <label
                    className="block text-white  mb-2 text-center"
                    htmlFor="primerNombre"
                  >
                    Primer nombre *
                  </label>

                  <Field
                    autoComplete="off"
                    id="primerNombre"
                    name="primerNombre"
                    placeholder="Ingrese su Primer nombre..."
                    className="appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="primerNombre"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-white mb-2 text-center"
                    htmlFor="segundoNombre"
                  >
                    Segundo nombre
                  </label>

                  <Field
                    autoComplete="off"
                    id="segundoNombre"
                    name="segundoNombre"
                    placeholder="Ingrese su Segundo nombre..."
                    className="appearance-none border rounded w-full  max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="segundoNombre"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-white mb-2 text-center"
                    htmlFor="primerApellido"
                  >
                    Primer apellido +
                  </label>
                  <Field
                    autoComplete="off"
                    id="primerApellido"
                    name="primerApellido"
                    placeholder="Ingrese su Primer apellido..."
                    className="appearance-none border rounded w-full  max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="primerApellido"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-white mb-2 text-center"
                    htmlFor="segundoApellido"
                  >
                    Segundo apellido
                  </label>
                  <Field
                    autoComplete="off"
                    id="segundoApellido"
                    name="segundoApellido"
                    placeholder="Ingrese su Segundo apellido..."
                    className="appearance-none border rounded w-full  max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="segundoApellido"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-10 mb-2">
                <div className="mb-4">
                  <label
                    className="block text-white  mb-2 text-center"
                    htmlFor="cedula"
                  >
                    N° Cédula *
                  </label>
                  <Field
                    autoComplete="off"
                    id="cedula"
                    name="cedula"
                    placeholder="Ingrese su Número de cédula..."
                    className="appearance-none border rounded w-full  max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="cedula"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-white text-center">
                    Correo electrónico *
                  </label>
                  <Field
                    autoComplete="off"
                    id="correo"
                    name="correo"
                    placeholder="Ingrese su Correo..."
                    className="w-full px-4 py-2 mt-2 text-gray-700  max-w-xs bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="correo"
                    component="span"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <label className="block text-white text-center">
                    Teléfono fijo *
                  </label>
                  <Field
                    autoComplete="off"
                    id="formatoRegistro"
                    name="telefono"
                    placeholder="Ingrese su Teléfono..."
                    className="w-full px-4 py-2 mt-2 text-gray-700  max-w-xs bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="telefono"
                    component="span"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <label className="block text-white text-center">
                    Celular *
                  </label>
                  <Field
                    autoComplete="off"
                    id="formatoRegistro"
                    name="celular"
                    placeholder="Ingrese su Número de Celular..."
                    className="w-full px-4 py-2 mt-2 text-gray-700 max-w-xs  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="celular"
                    component="span"
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* <label> Especialidad</label>
  <ErrorMessage name="Especialidad" component="span" />
  <Field
    autoComplete="off"
    id="formatoRegistro"
    name="Especialidad"
    placeholder="Ingrese su Especialidad..."
  /> */}
              <div className="grid grid-cols-4 gap-10 mb-6">
                <div>
                  <label
                    className="block text-white  text-center"
                    htmlFor="especialidad"
                  >
                    Especialidad *
                  </label>
                  <Field
                   autoComplete="off"
                   id="especialidad"
                  name="especialidad" as="select"  className="w-full px-4 py-2 mt-2 text-gray-700  max-w-xs bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring">
                 
                    <option value="" label="Seleccione su especialidad..." >Seleccione su especialidad </option>
                    <option value="ContadorFiscal" label="Contador Fiscal" > Contador Fiscal</option>
                    <option
                      value="ContadorGubernamental"
                      label="Contador Gubernamental"
                    > Contador Gubernamental</option>
                    <option value="Auditor" label="Auditor" > Auditor</option>
                    <option
                      value="ConsultorContable"
                      label="Consultor Contable"
                    > Consultor Contable</option>
                 
                  </Field>
                  <ErrorMessage
                    name="especialidad"
                    component="span"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <label className="block text-white text-center">
                   
                    Dirección *
                  </label>

                  <Field
                    autoComplete="off"
                    id="formatoRegistro"
                    name="direccion"
                    placeholder="Ingrese su Dirección..."
                    className="w-full px-4 py-2 mt-2 text-gray-700  max-w-xs bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="direccion"
                    component="span"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-white mb-2 text-center"
                    htmlFor="contrasenia"
                  >
                    Contraseña *
                  </label>

                  <Field
                    autoComplete="off"
                    type="password"
                    id="contrasenia"
                    name="contrasenia"
                    placeholder="Ingrese su contraseña..."
                    className="appearance-none border rounded w-full py-2 px-3  max-w-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="contrasenia"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4 items-center text-center">
  <label
    className="block text-white mb-2"
    htmlFor="fotoPath"
  >
    Foto de perfil
  </label>
  <input
    type="file"
    hidden
    id="fotoPath"
    ref={fileRef}
    placeholder="Ingrese su foto..."
    className="self-center appearance-none rounded-full w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:cursor-pointer"
    onChange={(event) => {
      setFieldValue(
        "fotoPath",
        event.currentTarget.files[0]
      );setImageFile(event.target.files[0])
    }}
  />
  {values.fotoPath && <PreviewImagen file={values.fotoPath} />}
  <button
  type= "button"
    className="self-center appearance-none rounded-full bg-slate-200 font-bold max-w-xs py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline hover:cursor-pointer"
    onClick={() => fileRef.current.click()}
  >
    Seleccionar archivo
  </button>
  <ErrorMessage
    name="fotoPath"
    component="span"
    className="text-red-500 text-sm"
  />
</div>

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
            </Form>
              )}
          </Formik>
        </div>
      </div>
    </>
  );
}
export default RegistroProveedoresLayout;
