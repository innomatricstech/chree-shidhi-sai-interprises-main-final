import React, { useState } from 'react';
import { FaTruckMoving, FaRoad, FaMountain, FaHammer, FaTools, FaBuilding, FaWrench, FaTrashAlt } from 'react-icons/fa';
import excavation from "../../assets/services/SSSE13.png"
import road from "../../assets/services/SSSE14.png"
import blasting from "../../assets/services/SSSE10.jpg"
import nonBlasting from "../../assets/services/SSSE12.jpg"
import compaction from "../../assets/services/SSSE21.jpg"
import supplies from "../../assets/services/SSSE15.jpg"
import construction from "../../assets/services/SSSE16.jpg"
import demolition from "../../assets/services/SSSE17.jpg"

const images = {
  excavation,
  road,
  blasting,
  nonBlasting,
  compaction,
  supplies,
  construction,
  demolition,
};

const AboutWhatWeDo = () => {
  const [hoveredItem, setHoveredItem] = useState('excavation'); // Set default to 'excavation'

  return (
    <div className="max-w-7xl mx-auto p-4 text-lg font-normal mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        What Work We Do?
      </h2>
      <div className="flex flex-col md:flex-row">
        <ul className="list-none space-y-2 md:w-1/2">
          <li
            className="flex items-center cursor-pointer  text-justify text-gray-950 font-medium leading-relaxed "
            onMouseEnter={() => setHoveredItem('excavation')}
            onMouseLeave={() => setHoveredItem('excavation')}
          >
            <FaTruckMoving className="text-amber-500 mr-2" />
            Mass Excavation works.
          </li>
          <li
            className="flex items-center cursor-pointer text-justify text-gray-950 font-medium leading-relaxed"
            onMouseEnter={() => setHoveredItem('road')}
            onMouseLeave={() => setHoveredItem('excavation')}
          >
            <FaRoad className="text-amber-500 mr-2" />
            Road widening & land leveling works.
          </li>
          <li
            className="flex items-center cursor-pointer text-justify text-gray-950 font-medium leading-relaxed"
            onMouseEnter={() => setHoveredItem('blasting')}
            onMouseLeave={() => setHoveredItem('excavation')}
          >
            <FaMountain className="text-amber-500 mr-2" />
            Hard rock excavation with controlled muffled blasting.
          </li>
          <li
            className="flex items-center cursor-pointer text-justify text-gray-950 font-medium leading-relaxed"
            onMouseEnter={() => setHoveredItem('nonBlasting')}
            onMouseLeave={() => setHoveredItem('excavation')}
          >
            <FaHammer className="text-amber-500 mr-2" />
            Hard rock excavation with non-blasting methods.
          </li>
          <li
            className="flex items-center cursor-pointer text-justify text-gray-950 font-medium leading-relaxed"
            onMouseEnter={() => setHoveredItem('compaction')}
            onMouseLeave={() => setHoveredItem('excavation')}
          >
            <FaTools className="text-amber-500 mr-2" />
            Backfilling, compaction & site development works.
          </li>
          <li
            className="flex items-center cursor-pointer text-justify text-gray-950 font-medium leading-relaxed"
            onMouseEnter={() => setHoveredItem('supplies')}
            onMouseLeave={() => setHoveredItem('excavation')}
          >
            <FaBuilding className="text-amber-500 mr-2" />
            Soil supplies, GSB supplies & bitumen supplies.
          </li>
          <li
            className="flex items-center cursor-pointer text-justify text-gray-950 font-medium leading-relaxed"
            onMouseEnter={() => setHoveredItem('construction')}
            onMouseLeave={() => setHoveredItem('excavation')}
          >
            <FaWrench className="text-amber-500 mr-2" />
            Construction of precast trenches, hume pipes & embankment works.
          </li>
          <li
            className="flex items-center cursor-pointer text-justify text-gray-950 font-medium leading-relaxed"
            onMouseEnter={() => setHoveredItem('demolition')}
            onMouseLeave={() => setHoveredItem('excavation')}
          >
            <FaTrashAlt className="text-amber-500 mr-2" />
            Concrete breaking, building demolition & debris disposal works.
          </li>
        </ul>

        <div className="md:w-1/2 md:ml-4 mt-6 md:mt-0 flex justify-center items-center relative">
          <img
            className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-100"
            src={images[hoveredItem]}
            alt={`${hoveredItem} illustration`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutWhatWeDo;