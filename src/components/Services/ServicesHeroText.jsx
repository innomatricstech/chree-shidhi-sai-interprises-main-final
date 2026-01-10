import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ExcavationText = () => {
  return (
    <div className="container absolute -my-[50%] lg:-my-[0%] md:-my-[0%] md:labsolute md:top-0
     lg:absolute lg:right-30 lg:top-[290px]">
      <div className="text-left px-4 md:mx-[37%] lg:w-[600px]">
    
    
        <h1 className="text-3xl text-white font-bold mb-2 md:text-5xl lg:text-6xl">
        SERVICES
</h1>
<div className='flex flex-row px-12 gap-x-2 md:px-1 md:gap-x-6  items-center'>
        <Link to={"/"} className="text-zinc-50 font-medium relative text-sm md:text-xl hover:text-amber-400 group">
  HOME 
  </Link>
  <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
        <Link to={"/"} className="text-zinc-50 font-medium relative text-sm md:text-xl hover:text-amber-400 group">
  SERVICES
  </Link>
  
     </div>   
        
      </div>
    </div>
  )
}

export default ExcavationText


