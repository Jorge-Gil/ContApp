import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

function PerfilDatosCard() {

    const valoresIniciales = {
   
        Comentario: "",

      };

      const validacion = Yup.object().shape({
        Comentario: Yup.string()
          .min(3, "El comentario debe tener como mínimo 3 caracteres")
          .max(500, "El comentario debe tener como máximo 500 caracteres"),
    
     
      });

      const comentarioEnviado = () => {
        Swal.fire({
          title: "Comentario enviado exitosamente",
          icon: "success",
        });
      };

  return (
    <div className="-mt-12  ml-8 bg-paleta-MoradoFondo/70 w-full font-Outfit max-w-[1000px] self-center min-w-min p-16 rounded-3xl mb-24  px-16 shadow-lg h-[70%] justify-center min-h-[550px] md:mt-20">
      <div className=" text-left">
        <div className=" border-b-2 pb-2 pl-2 grid grid-flow-col">
          <div className="self-start grid ">
            <p className="text-4xl "> Datos del proveedor </p>
          </div>
        </div>

        <div className="p-6 grid grid-flow-col grid-cols- mt-7 text-center 2xl::grid-flow-row">
          <div className="max-w-[300px]">
            <div className="max-w-[200px] self-center">
              <p className="text-3xl border-b-2 pb-2">Especialidad</p>
            </div>
            <div className="flex ">
              <p className="text-2xl mt-2">{"Consultor Contable"}</p>
            </div>
          </div>

          <div className="max-w-[300px]">
            <div className="max-w-[200px] self-center">
              <p className="text-3xl border-b-2 pb-2">Dirección</p>
            </div>
            <div className="flex ">
              <p className="text-2xl mt-2">{"Carrera 41B #83-43"}</p>
            </div>
          </div>

          <div className="max-w-[300px]">
            <div className="max-w-[200px] self-center">
              <p className="text-3xl border-b-2 pb-2">Teléfono</p>
            </div>
            <div className="flex justify-center">
              <p className="text-2xl mt-2">{"4372842"}</p>
            </div>
          </div>
        </div>

        <div className="px-6 pt-2 grid grid-flow-col grid-cols- mt-1 text-center">
          <div className="max-w-[300px]">
            <div className="max-w-[200px] self-center">
              <p className="text-3xl border-b-2 pb-2">Celular</p>
            </div>
            <div className="flex justify-center max-w-[200px]">
              <p className="text-2xl mt-2">{"3135738292"}</p>
            </div>
          </div>
        </div>

        <div className="p-6 grid grid-flow-col mt-7 mb-4">
          <div className="max-w-[600px] flex items-center">
            <button className="max-w-[600px] flex items-center">
            <RiMessage2Fill className="h-8 w-8 mr-2 text-white" />
            <p className="text-2xl mr-2">Enviar mensaje</p>
            </button>
          </div>
          <Formik initialValues={valoresIniciales}  validationSchema={validacion} onSubmit={() => {comentarioEnviado()}}>
  <Form className="flex flex-col">
    <div className="flex flex-col">
      <label htmlFor="Comentario" className="text-2xl text-center">Escribir un comentario</label>
      <Field
        as="textarea"
        name="Comentario"
        id="Comentario"
        placeholder="Escribe un comentario..."
        className="border-2 border-gray-300 p-2 rounded-lg text-black"
        rows="5"
      />
      <ErrorMessage name="Comentario" />

      <button
        type="submit"
        className="bg-paleta-MoradoBoton text-white font-bold py-1 px-6 rounded-lg mt-2 self-end"
      >
        Enviar
      </button>

    </div>
  </Form>
</Formik>


                
        </div>
      </div>
    </div>
  );
}

export default PerfilDatosCard;
