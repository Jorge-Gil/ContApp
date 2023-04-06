import React, { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { BsGear, BsBoxArrowLeft } from "react-icons/bs";
import { Link, useNavigate, NavLink } from "react-router-dom";

function OpcionesLayout({ children }) {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="flex place-content-center w-full max-w-full mx-auto bg-paleta-AzulOscuro font-Outfit  text-white h-screen text-center ">
      <div className="ml-20 mt-12 bg-paleta-MoradoFondo/70 w-full max-w-[260px] self-center min-w-min p-16 rounded-3xl mb-24 relative px-8 shadow-lg h-3/4">
        <NavLink
          className={(args) =>
            `${args.isActive ? "text-paleta-AzulResaltado " : ""}`
          }
          to={["/OpcionesProveedoresAjustes", "/OpcionesProveedoresClientes"]}
        >
          <button className="self-start grid grid-flow-col">
            <BsGear className="h-6 w-6 mr-4 -mb-0.5 " />
            <p className=" text-xl text-center"> Opciones</p>
          </button>
        </NavLink>

        <div className="absolute bottom-0 left-10 mb-8">
          <button
            className="self-end grid grid-flow-col"
            onClick={handleLogout}
          >
            <BsBoxArrowLeft className="h-6 w-6 mr-3.5 -mb-1.5" />
            <p className="text-xl"> Cerrar Sesión</p>
          </button>
        </div>
      </div>

      {children}
    </div>
  );
}

export default OpcionesLayout;
