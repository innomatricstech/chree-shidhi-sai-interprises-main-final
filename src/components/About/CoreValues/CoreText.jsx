import React from 'react';
import { Link } from 'react-router-dom';

const CoreText = () => {
  return (
    <div className="container absolute -my-[50%] lg:-my-[0%] md:-my-[0%] md:labsolute md:top-0
     lg:absolute lg:right-96 lg:top-[190px]">
      <div className="text-left px-4 md:mx-[37%] lg:w-[600px]">
    
    
        <h1 className="text-4xl text-white font-bold mb-2 md:text-3xl lg:text-3xl">
  CORE <span className="animate-colorChange">VALUES</span>
</h1>
<div className='flex flex-row px-12 gap-x-2 md:px-8 md:gap-x-6 '>
<Link to={"/"} className="text-zinc-50 font-medium relative text-sm hover:text-amber-400 group">
  HOME 
  </Link>
  <span className="absolute left-23 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100">

  </span>

        <h1 className="text-sm text-white font-bold mb-2 md:text-sm lg:text-sm"> 
  ABOUT 
</h1>
     </div>   
        
      </div>
    </div>
  );
}

export default CoreText;
