import React from 'react'
import Logo from "../Images/Logo.png";
import Facebook from "../Images/Facebook.png";
import Instagram from "../Images/Instagram.png";
import Twitter from "../Images/Twitter.png";

function Footer() {
  return (
<div>
  <footer className="bg-paleta-AzulFooter  font-Outfit">
    <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 ">
      <div
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <div className="flex-shrink-0 flex justify-center items-center ">
          <img className="h-8 w-8 mr-2" src={Logo} alt="Placeholder" />
          <h1 className="text-white font-bold text-lg">ContApp</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="px-5 py-5">
          <p className="text-base text-white text-center">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          
          </p>
          <hr/>
          <p className="text-base text-white text-center">
           Posuere ac, mattis eget, nunc. 
          
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="px-5 py-2 flex items-center">
          <a href='https://www.facebook.com' target="_blank" className=" py-2 px-4">
        <img className="h-12 w-12 mr-2" src={Facebook} alt="Placeholder" />
        </a>
        <a href='https://www.instagram.com' target="_blank" className=" py-2 px-4">
        <img className="h-12 w-12 mr-2" src={Instagram} alt="Placeholder" />
        </a>
        <a href='https://www.twitter.com' target="_blank" className=" py-2 px-4">
        <img className="h-12 w-12 mr-2" src={Twitter} alt="Placeholder" />
        </a>
        </div>
      </div>
    </div>
  </footer>
</div>

   

  
  )
}

export default Footer