import React from 'react';
import { FaDigging, FaMountain, FaHammer } from 'react-icons/fa';
import { GiEarthCrack } from 'react-icons/gi';
import ExcavationHero from './ExcavationHero';
import ExcavationText from './ExcavationText';

import exc from "../../../assets/services/SSSE14.png"
import ContactBody from '../../Contact/ContactBody';

const services = [
  {
    icon: <GiEarthCrack className="text-cyan-500 text-3xl" />,
    title: "Earthworks",
    description: "Specializing in mass excavation, we prioritize safety and care to safeguard buried infrastructure such as sewer lines and water pipes.",
  },
  {
    icon: <FaMountain className="text-amber-500 text-3xl" />,
    title: "Backfilling and Embankment Works",
    description: "We use high-quality materials like soil, murram, and gravel for stable backfilling and embankment projects.",
  },
  {
    icon: <FaHammer className="text-zinc-500 text-3xl" />,
    title: "Rock Cutting and Breaking Works",
    description: "Utilizing advanced technology, our team provides precise rock cutting and breaking services.",
  },
];

const ExcavationServices = () => {
  return (
    <div className="bg-gray-50">
      {/* <ExcavationText /> */}
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Excavation Services</h2>
          {/* <div className="mt-2 h-1 w-20 bg-yellow-300 mx-auto"></div> */}
        </div>
        
        <div className="bg-white overflow-hidden shadow-lg rounded-none">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500 to-blue-500">
                  <th className="text-left text-white px-6 py-3">Service</th>
                  <th className="text-left text-white px-6 py-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">{service.icon}</div>
                        <div className="font-medium">{service.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{service.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Our Expertise in Excavation
              </h2>
              <div className="h-1 w-20 bg-yellow-300 mb-8"></div>
              <p className="text-justify text-gray-600 leading-relaxed mb-4">
                At SCS, we leverage over 30 years of extensive experience and unwavering professionalism in providing top-tier excavation services. Our solid reputation in the industry is built on a track record of successfully handling diverse and challenging excavation projects across India.
              </p>
              <p className="text-justify text-gray-600 leading-relaxed mb-4">
                We pride ourselves on our continuous innovation and adaptability to the latest industry standards, pushing the boundaries of what's possible in excavation. From our modest beginnings to becoming a recognized leader in the field, we consistently deliver excavation solutions that not only meet but exceed our clients' expectations.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img src={exc} alt="Excavation Expertise" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <ContactBody/> */}
    </div>
  );
};

export default ExcavationServices;