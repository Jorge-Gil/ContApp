import React, { useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import AgregarFoto from "../Images/AgregarFoto.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PreviewImagen from "./PreviewImagen";

function OpcionesProveedoresClientes() {
  

  return (
    <div className="mt-20 ml-8 bg-paleta-MoradoFondo/70 w-full max-w-[1000px] self-center min-w-min p-16 rounded-3xl mb-24  px-20 shadow-lg h-full max-h-[85%]">
      <div className="flex">
        <NavLink
          className={(args) =>
            `${
              args.isActive
                ? "border-b-2 w-full "
                : "border-b-2 flex-grow pb-1 px-3"
            }`
          }
          to="/OpcionesProveedoresAjustes"
        >
          <button className="self-start grid grid-flow-col">
            <p className="text-2xl text-center">Ajustes de cuenta</p>
          </button>
        </NavLink>

        <NavLink
          className={(args) =>
            `${
              args.isActive
                ? "text-paleta-AzulResaltado px-3 border-b-2  flex-grow w-[1%] pb-1 text-left  mr-0"
                : "border-b-2 flex-grow pb-1 px-3 "
            }`
          }
          to="/OpcionesProveedoresClientes"
        >
          <button className=" grid grid-flow-col pl-60">
            <p className="text-2xl text-center"></p>
          </button>
        </NavLink>

        <NavLink
          className={(args) =>
            `${
              args.isActive
                ? "text-paleta-AzulResaltado px-3 border-b-2 border-paleta-AzulResaltado flex-grow w-[23.5%] pb-1 text-left"
                : "border-b-2 flex-grow pb-1 px-3 "
            }`
          }
          to="/OpcionesProveedoresClientes"
        >
          <button className=" grid grid-flow-col pl-[15%]">
            <p className="text-2xl text-center">Clientes</p>
          </button>
        </NavLink>

        <NavLink
          className={(args) =>
            `${
              args.isActive
                ? "text-paleta-AzulResaltado px-3 border-b-2  flex-grow w-[18%] pb-1 text-left -ml-20"
                : "border-b-2 flex-grow pb-1 px-3 "
            }`
          }
          to="/OpcionesProveedoresClientes"
        >
          <button className=" grid grid-flow-col pl-60">
            <p className="text-2xl text-center"></p>
          </button>
        </NavLink>
        
      </div>


      <div className="mt-6 text-left">
       <div className=" border-b-2 pb-2 pl-2 grid grid-flow-col">
       
          <div className="self-start grid ">
            <p className="text-2xl "> Nombre </p>
          </div>
          <div className="self-start ">
            <p className="text-2xl"> Dirección </p>
          </div>
          <div className="self-start ">
            <p className="text-2xl "> Teléfono </p>
          </div>
       
          <div className="self-start ">
            <p className="text-2xl "> Celular </p>
          </div>

      </div>
      <div className="pb-1 pl-2 flex grid-flow-col text-xl pt-5 ">
  <button className="self-start text-left mr-24">
    <p className="text-left">Kim Minji</p>
  </button>
  <button className="self-start text-left ml-6 mr-14 ">
    <p className="text-left">Carrera 41B #83-43</p>
  </button>
  <button className="self-start text-left mr-10">
    <p className="">4372842</p>
  </button>
  <button className="self-start text-left mx-auto">
    <p className="">3135738292</p>
  </button>
</div>

<div className="pb-1 pl-2 flex grid-flow-col text-xl pt-5 ">
  <button className="self-start text-left mr-24">
    <p className="text-left">Kim Minji</p>
  </button>
  <button className="self-start text-left ml-6 mr-14 ">
    <p className="text-left">Carrera 41B #83-43</p>
  </button>
  <button className="self-start text-left mr-10">
    <p className="">4372842</p>
  </button>
  <button className="self-start text-left mx-auto">
    <p className="">3135738292</p>
  </button>
</div>

    <div className="pb-1 pl-2 flex grid-flow-col text-xl pt-5 ">
  <button className="self-start text-left mr-24">
    <p className="text-left">Kim Minji</p>
  </button>
  <button className="self-start text-left ml-6 mr-14 ">
    <p className="text-left">Carrera 41B #83-43</p>
  </button>
  <button className="self-start text-left mr-10">
    <p className="">4372842</p>
  </button>
  <button className="self-start text-left mx-auto">
    <p className="">3135738292</p>
  </button>
</div>


    </div>
    </div>
  );
}


export default OpcionesProveedoresClientes