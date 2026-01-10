import React from 'react';
import { Link } from 'react-router-dom';

const CareerText = () => {
  return (
    <div className="container absolute -my-[50%] lg:-my-[0%] md:-my-[0%] md:labsolute md:top-0
     lg:absolute lg:right-30 lg:top-[290px]">
      <div className="text-left px-4 md:mx-[37%] lg:w-[600px]">
    
    
        <h1 className="text-4xl text-white font-bold mb-2 md:text-5xl lg:text-6xl">
  CAREERS <span className="animate-colorChange">US</span>
</h1>
<div className='flex flex-row px-12 gap-x-2 md:px-20 md:gap-x-6 '>
        <Link to={"/"} className="text-zinc-50 font-medium relative text-xl hover:text-amber-400 group">
  HOME 
  </Link>
  <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>

        <h1 className="text-xl text-white font-bold mb-2 md:text-xl lg:text-xl"> 
  CAREERS 
</h1>
     </div>   
        
      </div>
    </div>
  );
}

export default CareerText;
