import React, { useState } from "react";
import Jiu from "../Images/Jiu.png";
import Online from "../Images/Online.png";
import Offline from "../Images/Offline.png";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";



function PerfilCard({ children }) {
    const [likes, setLikes] = useState(20);
    const [liked, setLiked] = useState(false);
    const [dislikes, setDislikes] = useState(2);
    const [disliked, setDisliked] = useState(false);
  
    const handleLike = () => {
      if (!liked && !disliked) {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);
      } else if (liked && !disliked) {
        setLikes((prevLikes) => prevLikes - 1);
        setLiked(false);
      } else if (!liked && disliked) {
        setLikes((prevLikes) => prevLikes + 1);
        setDislikes((prevDislikes) => prevDislikes - 1);
        setLiked(true);
        setDisliked(false);
      }
    };
  
    const handleDislike = () => {
      if (!disliked && !liked) {
        setDislikes((prevDislikes) => prevDislikes + 1);
        setDisliked(true);
      } else if (disliked && !liked) {
        setDislikes((prevDislikes) => prevDislikes - 1);
        setDisliked(false);
      } else if (!disliked && liked) {
        setDislikes((prevDislikes) => prevDislikes + 1);
        setLikes((prevLikes) => prevLikes - 1);
        setDisliked(true);
        setLiked(false);
      }
    };

  

  return (
    <div className="flex place-content-center w-full max-w-full mx-auto bg-paleta-AzulOscuro font-Outfit text-white h-screen text-center">
      <div className="ml-20 mt-12 bg-paleta-MoradoFondo/70 w-full max-w-[500px] self-center min-w-min p-16 rounded-3xl mb-24 relative px-8 shadow-lg h-[70%] justify-center min-h-[550px] md:mt-20">
        <img
          className="h-[200px] w-[200px] mx-auto object-cover rounded-full border-2 border-paleta-MoradoBoton"
          src={Jiu}
          alt="FotoPerfil"
        />
        <div className="flex items-center mt-4 text-center justify-center">
          <img className="h-7 w-7 mr-2" src={Offline} alt="Offline" />
          <h1 className="text-4xl">Kim Minji</h1>
        </div>
        <div className="flex items-center mt-6 text-center justify-center">
          <HiOutlineEnvelope className="h-8 w-8 mr-2" />
          <h1 className="text-2xl">kim.minji@naver.com</h1>
        </div>
        <h1 className="text-3xl mt-6">Calificar</h1>

        <div className="flex items-center mt-6 text-center justify-center">
          <p className="text-3xl font-semibold mr-2 pt-2">{likes}</p>
          <button className="mr-10" onClick={handleLike}>
            {liked ? (
              <HiThumbUp className="h-12 w-12 text-paleta-AzulResaltado" />
            ) : (
              <HiThumbUp className="h-12 w-12 text-white" />
            )}
          </button>
          <button className="mr-2" onClick={handleDislike}>
            {disliked ? (
              <HiThumbDown className="h-12 w-12 text-paleta-AzulResaltado" />
            ) : (
              <HiThumbDown className="h-12 w-12 text-white" />
            )}
          </button>
          <p className="text-3xl font-semibold mr-2 pt-2">{dislikes}</p>
        </div>
      </div>

      {children}
    </div>
  );
}

export default PerfilCard;
