import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
function Busqueda() {
  return (
    <div className="flex place-content-center w-full max-w-full mx-auto bg-paleta-AzulOscuro font-Outfit  text-white h-screen text-center ">
      <div className="mt-16 ml-8 bg-paleta-MoradoFondo/70 w-full max-w-[1600px] self-center min-w-min p-16 py-12 rounded-3xl mb-24  px-16 shadow-lg h-full max-h-[85%]">
        <div className="flex mb-16">
          <h1 className="text-4xl ">
            Mostrando todos los resultados para: {"Consultor contable"}
          </h1>
          <button
            type="submit"
            className="self-end p-2 ml-10 font-normal text-white bg-paleta-MoradoBoton rounded-sm shadow-md "
          >
            Filtrar por ubicación
          </button>
        </div>

        <div className="mt-6">
          <div className="border-b-2 pb-2 pl-2 flex">
            <div className="flex-1">
              <p className="text-2xl">Nombre</p>
            </div>
            <div className="flex-1">
              <p className="text-2xl">Especialidad</p>
            </div>
            <div className="flex-1">
              <p className="text-2xl">Dirección</p>
            </div>
            <div className="flex-1">
              <p className="text-2xl">Teléfono</p>
            </div>
            <div className="flex-1">
              <p className="text-2xl">Celular</p>
            </div>
            <div className="flex-1">
              <p className="text-2xl">Correo electrónico</p>
            </div>
          </div>
          
          <div className="pb-1 pl-2 flex mt-4">
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Kim Minji</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Consultor Contable</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Carrera 41B #83-43</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">4372842</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">3135738292</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">kim.minji@naver.com</p>
            </NavLink>
          </div>

          <div className="pb-1 pl-2 flex mt-4">
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Kim Minji</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Consultor Contable</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Carrera 41B #83-43</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">4372842</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">3135738292</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">kim.minji@naver.com</p>
            </NavLink>
          </div>

          <div className="pb-1 pl-2 flex mt-4">
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Kim Minji</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Consultor Contable</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Carrera 41B #83-43</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">4372842</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">3135738292</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">kim.minji@naver.com</p>
            </NavLink>
          </div>

          <div className="pb-1 pl-2 flex mt-4">
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Kim Minji</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Consultor Contable</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">Carrera 41B #83-43</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">4372842</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">3135738292</p>
            </NavLink>
            <NavLink to={"/Perfil"} className="flex-1">
              <p className="text-xl">kim.minji@naver.com</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Busqueda;
