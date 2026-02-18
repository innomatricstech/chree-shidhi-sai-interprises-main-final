import React from "react";
import { Link } from "react-router-dom";

const HomeHeroText = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">

      {/* Company Name */}
      <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
        Shree Chethana
        <span className="block animate-colorChange">
          Services
        </span>
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-lg md:text-2xl text-white">
        Redefining{" "}
        <span className="text-red-500 font-bold">
          Architecture
        </span>
      </p>

      {/* Button */}
      <Link to="/contact">
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded shadow-md hover:bg-amber-400 hover:text-white transition duration-300">
          Contact Us
        </button>
      </Link>

    </div>
  );
};

export default HomeHeroText;
