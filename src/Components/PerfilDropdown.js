import React, { useState, useEffect, useRef, useContext } from "react";
import { PopupMenu } from "react-simple-widgets";
import { AuthContext } from "../Context/Authcontext";
import Gahyeon from "../Images/Gahyeonie.png";
import FlechaCollapsed from "../Images/StateCollapsed_Vector1.png";
import FlechaExpanded from "../Images/StateExpanded_Vector1.png";
import { Link, useNavigate } from "react-router-dom";

function PerfilDropdown() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPerfil, setShowPerfil] = useState(false);

  const togglePerfil = () => {
    setShowPerfil(!showPerfil);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");

  };

  // const refButton = useRef();

  // useEffect(() => {

  //   const hideMenu = e => {
  //     if (e.path[0] !== refButton.current){
  //       setShowPerfil(showPerfil);

  //     }

  //   };

  //   document.body.addEventListener('click', hideMenu);

  //  return () => {
  //   document.body.removeEventListener('click', hideMenu);
  //  }
  // }, []);

  return (
    <div className={user ? "relative mr-16":"relative"}>
      <button
        className={
          showPerfil
            ? "inline-flex items-center p-1 m-0 hover:bg-paleta-MoradoBoton rounded-lg  bg-paleta-FondoPerfil"
            : "inline-flex items-center p-1 m-0 hover:bg-paleta-MoradoBoton rounded-lg"
        }
        onClick={togglePerfil}
      >
        <img
          className="h-12 w-12 mr-2 object-cover rounded-full"
          src={Gahyeon}
          alt="FotoPerfil"
        />
        <p
          className={
            showPerfil ? "text-white font-normal text-lg mr-10" : "hidden"
          }
        >
          {user.primerNombre} 가현이
        </p>
        <img
          className={showPerfil ? "hidden" : "pr-2"}
          src={FlechaCollapsed}
          alt="FlechaCollapsed"
        />
        <img
          className={showPerfil ? "pr-2" : "hidden"}
          src={FlechaExpanded}
          alt="FlechaExpanded"
        />
      </button>

      {showPerfil && (
        <div className="absolute  w-full bg-paleta-FondoPerfil text-white grid rounded-md  ">
          <div className=" border-b-2 border-b-gray-900 mx-1">
            <Link to="/OpcionesProveedoresAjustes">
            <button className="text-left p-2 w-full hover:bg-paleta-MoradoBoton rounded-md">
              Opciones
            </button>
            </Link>
          </div>
          <div className=" border-b-2 border-b-gray-900 mb-1 mx-1">
            <button
              className="text-left text-red-500 p-2 w-full hover:bg-paleta-MoradoBoton rounded-md hover:text-red-200 "
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PerfilDropdown;
