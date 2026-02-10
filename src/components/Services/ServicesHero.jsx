import React from 'react'
import serviceBg from "../../assets/serviceBg.jpg"
const ServicesHero = () => {
  return (
        
    <div className='relative w-full h-[400px]' >
    <img src={serviceBg} className='object-cover w-full h-full mix-blend-multiply' alt="Background Image"/>
    <div className='absolute inset-0 bg-blue-400 opacity-40'></div>
  </div>
  )
}

export default ServicesHero
