import React from 'react'
import { FaHardHat, FaProjectDiagram, FaUsers, FaRocket, FaHandshake, FaShieldAlt, FaMedal, FaTrophy } from 'react-icons/fa';
// import "./Industry.css"
import industryBg from "../../../assets/contactBg.jpg"
const WhyUs = () => {
  return (
    <>

           <div className='relative w-full h-[200px] md:h-[700px]' >
  <img src={industryBg} className='object-cover w-full h-full mix-blend-multiply' alt="Background Image"/>
  <div className='absolute inset-0 bg-blue-400 opacity-40'></div>
</div>


<div className=' md:absolute  top-[10rem] lg:-my-[0%] md:-my-[0%] md:labsolute md:top-0
     lg:absolute lg:right-30 lg:top-[130rem]'>
          <div className='py-12 md:p-6'
          >
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">What We Offer to You</h2>
          <div className='w-[300px] md:w-[500px] h-[2px] bg-yellow-300 my-4'></div>
          </div>
        <div className="grid grid-cols-1 p-7 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaHardHat />, title: "20 Years of Industry Leadership", description: "Our long-standing presence in the industry reflects our commitment to delivering exceptional results." },
              { icon: <FaProjectDiagram />, title: "Diverse Project Portfolio", description: "From residential developments to large-scale infrastructure, we have demonstrated expertise in tackling various construction challenges." },
              { icon: <FaUsers />, title: "Skilled Team of Experts", description: "Our professionals are highly trained and experienced, ensuring precision and efficiency in every task." },
              { icon: <FaRocket />, title: "Advanced Technology & Methods", description: "We utilize cutting-edge technology and innovative methods for superior project outcomes, including precise rock cutting and efficient land development." },
              { icon: <FaTrophy  />, title: "Industry Recognition", description: "Our dedication to excellence has earned us recognition within the industry and repeat business from satisfied clients." },
            ].map((item, index) => (
              <div key={index} className="bg-blue-950 p-6 
              rounded-none shadow-lg transition-all duration-300 hover:bg-zinc-950">
                <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-xl text-cyan-600 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          </div>     
    </>
  )
}

export default WhyUs
