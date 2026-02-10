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
    

    </div>
  );
};

export default ExcavationHero;
