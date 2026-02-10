import React from 'react'
import contactBg from "../../../assets/coverHero.png"

const CoreHero = () => {
  return (
    <div className='relative w-full h-[250px]'>

      <img
        src={contactBg}
        className='object-cover w-full h-full mix-blend-multiply'
        alt="Core values section background"
      />

    </div>
  )
}

export default CoreHero
