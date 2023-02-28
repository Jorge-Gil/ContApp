import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Header from "../Components/Header";

function Home() {
  return (
    <>
  <Header />
    <div className="bg-paleta-AzulOscuro max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 font-Outfit">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 px-4">
        <div className="lg:mt-20">
          <h2 className="text-3xl  tracking-tight text-white sm:text-4xl font-extrabold">
            Sobre la App
          </h2>
          <p className="mt-4 text-lg text-white font-Outfit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            arcu aliquam, bibendum urna a, aliquet turpis. In auctor felis eu
            lacus vestibulum, sed iaculis odio tempor. Sed a lacus mauris. Sed
            vulputate, arcu eu tristique dapibus, augue sem ultricies diam,
            vitae malesuada enim lectus vel mi. Nullam eget volutpat mauris.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <div className="lg:mt-20">
          <img
            className="w-full object-cover object-center rounded-lg shadow-md"
            src="https://via.placeholder.com/800x600.png?text=Placeholder+Image"
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  </div>
  </>
);
}

export default Home;
                    
