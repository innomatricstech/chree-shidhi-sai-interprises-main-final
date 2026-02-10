// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// const AboutDropDown = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//       <div 
//         className="relative group text-left z-50 "  
//         onMouseEnter={() => setIsOpen(true)} 
//         // onMouseLeave={() => setIsOpen(false)}
//       >
//          <div
//     className="cursor-pointer text-zinc-950 font-medium relative hover:text-amber-400 group"
//   >
//       ABOUT 
//           <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
//           </div>
  
//         {/* Dropdown Menu */}
//         {isOpen && (
//           <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg 
//            py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <li>
//               <Link to={"/aboutUs"} className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
//                 About Us
//               </Link>
//             </li>
//             <li>
//             <Link to={"/team"} className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
              
//               Our Team
//               </Link>
//             </li>
//             <li>
//             <Link to={"/core"} className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
              
//                 Core Principles
//               </Link>
//             </li>
           
//           </ul>
//         )}
//       </div>
//     );
// }

// export default AboutDropDown

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AboutDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="cursor-pointer text-zinc-950 mx-2 md:mx-0
        md:uppercase md:font-medium relative hover:text-amber-400 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        About
        <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
  
      <div 
        className={`
          md:absolute md:left-0 md:mt-2 md:w-60 md:shadow-lg
          w-full overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 md:opacity-100'}
        `}
      >
        <ul 
          className="bg-inherit md:bg-white py-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="about-menu"
        >
          <li role="none">
            <Link 
              to="/aboutUs" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/team" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
          </li>
          {/* <li role="none">
            <Link 
              to="/core" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Core Principles
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}