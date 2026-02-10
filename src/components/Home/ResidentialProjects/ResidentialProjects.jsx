import React from 'react'
import p1 from "../../../assets/proj1.jpg"
import p2 from "../../../assets/proj2.jpg"
import p3 from "../../../assets/proj3.jpg"
import p4 from "../../../assets/proj4.jpg"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const ResidentialProjects = () => {
  return (
    <>

<div className="flex items-center justify-center mb-16 my-12 px-32">
        <div className="flex-grow border-t w-[70px] border-black"></div>
        <h1 className="text-4xl md:text-2xl font-semibold text-center mx-4 text-amber-500">
          RESIDENTIAL PROJECTS
        </h1>
        <div className="flex-grow border-t w-[70px] border-black"></div>
      </div>

      {/* //carousel */}
        <div className="relative -mx-[116px] md:-mx-0 w-[600px] px-36 md:w-full h-[300px] md:h-[500px] lg:h-[500px] ">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="h-full"
      >
        <div className="relative">
          <img src={p1} alt="Slide 1" className="object-cover object-top w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className=" opacity-0"></div>
        </div>
        <div className="relative">
          <img src={p2} alt="Slide 2" className="object-cover object-top w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className=" opacity-50"></div>
        </div>
        <div className="relative">
          <img src={p3} alt="Slide 3" className="object-cover object-top w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className=" opacity-50"></div>
        </div>
        <div className="relative">
          <img src={p4} alt="Slide 4" className="object-cover object-center w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className=" opacity-50"></div>
        </div>
       
      </Carousel>
    </div>
    </>
  )
}

export default ResidentialProjects
