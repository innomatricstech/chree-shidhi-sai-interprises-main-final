import React from 'react'
import { FaHardHat, FaProjectDiagram, FaUsers, FaRocket, FaHandshake, FaShieldAlt, FaMedal, FaTrophy } from 'react-icons/fa';

const Commitment = () => {
  return (
    <div>
        <section className="mb-7 ">
          <h2 className="text-3xl font-semibold  text-yellow-300">Our Commitment to Professionalism</h2>
          <div className='w-[300px] md:w-[500px] h-[2px] bg-yellow-300 my-4'></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaHandshake />, title: "Client-Centric Approach", description: "We prioritize clear communication and responsiveness, ensuring our clients are informed and satisfied throughout the project lifecycle." },
              { icon: <FaShieldAlt />, title: "Safety & Compliance", description: "Safety is paramount in everything we do. We strictly adhere to safety standards and regulations, implementing rigorous protocols to protect our team and the community." },
              { icon: <FaMedal />, title: "Quality Assurance", description: "We uphold rigorous quality standards to ensure every project meets and exceeds industry benchmarks." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-zinc-950">
                <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>      
    </div>
  )
}

export default Commitment
