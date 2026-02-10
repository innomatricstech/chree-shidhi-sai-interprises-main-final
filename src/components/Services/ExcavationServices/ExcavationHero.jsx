import React from "react";
import contactBg from "../../../assets/coverHero.png";

const ExcavationHero = () => {
  return (
    <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden">

      {/* Background Image */}
      <img
        src={contactBg}
        alt="Excavation service banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Center Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold tracking-wide">
          Excavation Services
        </h1>
      </div>

    </div>
  );
};

export default ExcavationHero;
