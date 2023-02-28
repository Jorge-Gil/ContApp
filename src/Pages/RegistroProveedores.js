import React from "react";
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
    <div className="Registro">
    <Formik
      initialValues={valoresIniciales}
      validationSchema={validacion}
      // onSubmit={onSubmit}
    >
      <Form className="contenedorRegistro">
        
        
          <label> Primer nombre</label>
          <ErrorMessage name="Nombre1Cuenta" component="span" />
          <Field
            autoComplete="off"
            id="formatoRegistro"
            name="Nombre1Cuenta"
            placeholder="Ingrese su Primer nombre..."
          />

          <label> Segundo nombre</label>
          <ErrorMessage name="Nombre2Cuenta" component="span" />
          <Field
            autoComplete="off"
            id="formatoRegistro"
            name="Nombre2Cuenta"
            placeholder="Ingrese su Segundo nombre..."
          />

          <label> Primer apellido</label>
          <ErrorMessage name="Apellido1Cuenta" component="span" />
          <Field
            autoComplete="off"
            id="formatoRegistro"
            name="Apellido1Cuenta"
            placeholder="Ingrese su Primer apellido..."
          />

          <label> Segundo apellido</label>
          <ErrorMessage name="Apellido2Cuenta" component="span" />
          <Field
            autoComplete="off"
            id="formatoRegistro"
            name="Apellido2Cuenta"
            placeholder="Ingrese su Segundo apellido..."
          />
     

        <label> Contraseña</label>
          <ErrorMessage name="Contrasenia" component="span" />
          <Field
            autoComplete="off"
            id="formatoRegistro"
            name="Contrasenia"
            placeholder="Ingrese su contraseña..."
          />

        <div className="derechaRegistro">
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
            style={{ display: "block" }}
          >
            <option value="" label="Seleccione su especialidad..." />
            <option value="ContadorFiscal" label="Contador Fiscal" />
            <option value="ContadorGubernamental" label="Contador Gubernamental" />
            <option value="Auditor" label="Auditor" />
            <option value="ConsultorContable" label="Consultor Contable" />
          </select>

         

          <label> Dirección </label>
          <ErrorMessage name="DireccionCuenta" component="span" />
          <Field
            autoComplete="off"
            id="formatoRegistro"
            name="DireccionCuenta"
            placeholder="Ingrese su Dirección..."
          />

          <label> Número de Teléfono </label>
          <ErrorMessage name="TelefonoCuenta" component="span" />
          <Field
            autoComplete="off"
            id="formatoRegistro"
            name="TelefonoCuenta"
            placeholder="Ingrese su Teléfono..."
          />

          <label> Número de Celular </label>
          <ErrorMessage name="CelularCuenta" component="span" />
          <Field
            autoComplete="off"
            id="formatoRegistro"
            name="CelularCuenta"
            placeholder="Ingrese su Número de Celular..."
          />
        </div>
        <div className="botonRegistro">
          <button type="submit"> Registrarse</button>
        </div>
      </Form>
    </Formik>
  </div>
  )
}
export default RegistroProveedores