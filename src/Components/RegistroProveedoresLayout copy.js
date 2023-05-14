import React,{useRef, useState, useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PreviewImagen from "./PreviewImagen";
import axios from "axios";

function RegistroProveedoresLayout() {
  const [selectedFile, setSelectedFile] = useState(null);

  const valoresIniciales = {
    Especialidad: "",
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

  const PreviewImagen = ({ file }) => {
    const [previewUrl, setPreviewUrl] = useState("");
  
    useEffect(() => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }, [file]);
  
    return (
      <img
        src={previewUrl}
        alt="Preview"
        className="h-40 w-40 object-cover "
      />
    );
  };

  const fileRef = useRef(null);

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
    Especialidad: Yup.string()
      .min(3, "La especialidad debe tener como mínimo 3 caracteres")
      .max(30, "La especialidad debe tener como máximo 30 caracteres")
      .required("Especialidad es un campo requerido"),

    DireccionCuenta: Yup.string()
      .min(3, "La dirección debe tener como mínimo 3 caracteres")
      .max(40, "La dirección debe tener como máximo 40 caracteres")
      .required("Dirección es un campo requerido"),

    CorreoElectronico: Yup.string()
      .min(3, "El correo electrónico debe tener como mínimo 3 caracteres")
      .max(40, "El correo electrónico debe tener como máximo 40 caracteres")
      .email("El correo electrónico debe ser válido")
      .required("Correo electrónico es un campo requerido"),
    TelefonoCuenta: Yup.string()
      .min(3, "El número de teléfono debe tener como mínimo 3 caracteres")
      .max(12, "El número de teléfono debe tener como máximo 12 caracteres")
      .required("Número de teléfono es un campo requerido"),
    CelularCuenta: Yup.string()
      .min(3, "El número de celular debe tener como mínimo 3 caracteres")
      .max(10, "El número de teléfono debe tener como máximo 10 caracteres")
      .required("Número de celular es un campo requerido"),

      FotoPerfil: Yup.mixed()
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
    const formData = new FormData();
    const datos = {
 

      especialidad: formData.get('Especialidad'),
    contrasenia: formData.get('Contrasenia'),
    primerNombre: formData.get('Nombre1Cuenta'),
    segundoNombre: formData.get('Nombre2Cuenta'),
    primerApellido: formData.get('Apellido1Cuenta'),
    segundoApellido: formData.get('Apellido2Cuenta'),
    cedula: formData.get('Cedula'),
    correo: formData.get('CorreoElectronico'),
    direccion: formData.get('DireccionCuenta'),
    telefono: formData.get('TelefonoCuenta'),
    celular: formData.get('CelularCuenta'),
    tipoUsuario: "Proveedor",
    fotoPath: formData.get('FotoPerfil').path,
   
    
    // if (selectedFile) {
    //   fotoPath: formData.append("FotoPerfil", selectedFile);
    // }
  }
  
    axios.post("http://localhost:3001/auth/register", datos).then(() => {
      console.log(data);
      alert("Cuenta registrada Correctamente");
    });
  };

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
                    htmlFor="Nombre1Cuenta"
                  >
                    Primer nombre *
                  </label>

                  <Field
                    autoComplete="off"
                    id="Nombre1Cuenta"
                    name="Nombre1Cuenta"
                    placeholder="Ingrese su Primer nombre..."
                    className="appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    htmlFor="Nombre2Cuenta"
                  >
                    Segundo nombre
                  </label>

                  <Field
                    autoComplete="off"
                    id="Nombre2Cuenta"
                    name="Nombre2Cuenta"
                    placeholder="Ingrese su Segundo nombre..."
                    className="appearance-none border rounded w-full  max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="Nombre2Cuenta"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-white mb-2 text-center"
                    htmlFor="Apellido1Cuenta"
                  >
                    Primer apellido +
                  </label>
                  <Field
                    autoComplete="off"
                    id="Apellido1Cuenta"
                    name="Apellido1Cuenta"
                    placeholder="Ingrese su Primer apellido..."
                    className="appearance-none border rounded w-full  max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="Apellido1Cuenta"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-white mb-2 text-center"
                    htmlFor="Apellido2Cuenta"
                  >
                    Segundo apellido
                  </label>
                  <Field
                    autoComplete="off"
                    id="Apellido2Cuenta"
                    name="Apellido2Cuenta"
                    placeholder="Ingrese su Segundo apellido..."
                    className="appearance-none border rounded w-full  max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="Apellido2Cuenta"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-10 mb-2">
                <div className="mb-4">
                  <label
                    className="block text-white  mb-2 text-center"
                    htmlFor="Cedula"
                  >
                    N° Cédula *
                  </label>
                  <Field
                    autoComplete="off"
                    id="Cedula"
                    name="Cedula"
                    placeholder="Ingrese su Número de cédula..."
                    className="appearance-none border rounded w-full  max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="Cedula"
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
                    id="formatoRegistro"
                    name="CorreoElectronico"
                    placeholder="Ingrese su Correo..."
                    className="w-full px-4 py-2 mt-2 text-gray-700  max-w-xs bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="CorreoElectronico"
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
                    name="TelefonoCuenta"
                    placeholder="Ingrese su Teléfono..."
                    className="w-full px-4 py-2 mt-2 text-gray-700  max-w-xs bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="TelefonoCuenta"
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
                    name="CelularCuenta"
                    placeholder="Ingrese su Número de Celular..."
                    className="w-full px-4 py-2 mt-2 text-gray-700 max-w-xs  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="CelularCuenta"
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
                    htmlFor="Especialidad"
                  >
                    Especialidad *
                  </label>
                  <Field
                   autoComplete="off"
                   id="Especialidad"
                  name="Especialidad" as="select"  className="w-full px-4 py-2 mt-2 text-gray-700  max-w-xs bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring">
                 
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
                    name="Especialidad"
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
                    name="DireccionCuenta"
                    placeholder="Ingrese su Dirección..."
                    className="w-full px-4 py-2 mt-2 text-gray-700  max-w-xs bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
                  />
                  <ErrorMessage
                    name="DireccionCuenta"
                    component="span"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-white mb-2 text-center"
                    htmlFor="Contrasenia"
                  >
                    Contraseña *
                  </label>

                  <Field
                    autoComplete="off"
                    type="password"
                    id="Contrasenia"
                    name="Contrasenia"
                    placeholder="Ingrese su contraseña..."
                    className="appearance-none border rounded w-full py-2 px-3  max-w-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="Contrasenia"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4 items-center text-center">
  <label
    className="block text-white mb-2"
    htmlFor="FotoPerfil"
  >
    Foto de perfil
  </label>
  <input
    type="file"
    id="FotoPerfil"
    name="FotoPerfil"
    onChange={(event) => {
      setSelectedFile(event.target.files[0]);
    }}
    ref={fileRef}
    style={{ display: "none" }}
  />
  <button
    type="button"
    className="bg-paleta-Rosa text-white font-bold py-2 px-4 rounded mt-2"
    onClick={() => {
      fileRef.current.click();
    }}
  >
    Seleccionar archivo
  </button>
  {selectedFile && (
    <PreviewImagen file={selectedFile} />
  )}
  <ErrorMessage
    name="FotoPerfil"
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
