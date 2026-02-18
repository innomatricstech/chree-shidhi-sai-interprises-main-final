import React from "react";
import { Link } from "react-router-dom";

const HomeHeroText = () => {
  return (
    <div className="container absolute md:absolute lg:absolute lg:right-96 lg:top-[300px]">
      
      <div className="text-left px-4 md:mx-[45%] w-[300px]">

        {/* Company Name */}
        <h1 className="text-2xl text-white font-bold mb-2 md:text-6xl lg:text-7xl leading-tight">
          Shree Chethana
          <span className="block animate-colorChange">Services</span>
        </h1>

        {/* Tagline */}
        <p className="text-sm md:text-base my-4 text-white lg:text-lg">
          Redefining{" "}
          <span className="text-red-500 font-bold">Architecture</span>
        </p>

        {/* Contact Button */}
        <Link to={"/contact"}>
          <button
            className="w-44 h-12 max-w-xs px-4 py-2 bg-gray-50 text-zinc-950
            hover:text-white font-bold shadow-md hover:bg-amber-400
            focus:outline-none focus:ring-2 focus:ring-amber-300
            focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Contact Us
          </button>
        </Link>

      </div>
    </div>
  );
};

export default HomeHeroText;
