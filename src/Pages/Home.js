import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PC from "../Images/PC.png";

function Home() {
  return (
    <>
      <Header />
      <div className="bg-paleta-AzulOscuro w-auto h-full mx-auto py-6 sm:px-6 lg:px-8 font-Outfit  ">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-20 pr-52 h-screen">
            <div className="lg:mt-20">
              <h2 className="text-3xl  tracking-tight text-white sm:text-4xl font-extrabold font-Outfit">
                Sobre la App
              </h2>
              <p className="mt-4 text-lg text-white font-Outfit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                congue risus consequat sapien lacinia, at euismod nulla cursus.
                In eu est pellentesque, placerat metus ut, blandit nunc. Aenean
                non urna nec justo rhoncus maximus sit amet eget ante. Nulla
                dolor ipsum, auctor vel ex non, tincidunt fringilla lacus.
                Mauris vel dictum urna, non varius magna. Pellentesque malesuada
                lorem est, eu lobortis dui tristique vel. Fusce ullamcorper
                lectus lectus, vel convallis purus ultrices eu. Phasellus
                bibendum ligula libero, eu auctor elit iaculis vitae. Sed
                convallis ipsum nisl, vel iaculis augue mattis eu. Nulla sit
                amet vestibulum enim. Quisque quis pulvinar quam. Donec nisi
                neque, pellentesque at tempus at, elementum sit amet augue. In
                ultrices, leo quis rutrum cursus, libero velit varius ipsum, non
                euismod magna nisl non neque. Pellentesque aliquam, metus ac
                tincidunt sodales, mi diam pharetra felis, quis mattis dolor mi
                vel est. Vestibulum viverra et massa vel fermentum. Donec
                tristique lorem augue, eu vestibulum nunc lacinia non. Aliquam
                erat volutpat. Ut porttitor odio sit amet feugiat vulputate. Sed
                ex risus, porttitor quis ligula sit amet, porta bibendum enim.
                Nulla eu nulla at ex cursus dictum ut id tortor.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="lg:mt-16">
              <img
                className="w-1/2 object-cover object-center rounded-lg shadow-md ml-40 "
                src={PC}
                alt="Placeholder"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
