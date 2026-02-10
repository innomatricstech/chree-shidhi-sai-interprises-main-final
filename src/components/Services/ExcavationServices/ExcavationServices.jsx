import React from 'react';
import { FaMountain, FaHammer, FaHardHat } from 'react-icons/fa';
import { GiEarthCrack } from 'react-icons/gi';

import exc from "../../../assets/services/SSSE14.png";
 

const services = [
  {
    icon: <GiEarthCrack className="text-cyan-500 text-3xl" />,
    title: "Earthworks",
    description:
      "Specializing in mass excavation, we prioritize safety and care to safeguard buried infrastructure such as sewer lines and water pipes.",
  },
  {
    icon: <FaMountain className="text-amber-500 text-3xl" />,
    title: "Backfilling and Embankment Works",
    description:
      "We use high-quality materials like soil, murram, and gravel for stable backfilling and embankment projects.",
  },
  {
    icon: <FaHammer className="text-zinc-500 text-3xl" />,
    title: "Rock Cutting and Breaking Works",
    description:
      "Utilizing advanced technology, our team provides precise rock cutting and breaking services.",
  },
  {
    icon: <FaHardHat className="text-red-500 text-3xl" />,
    title: "Building Demolition & Dismantling",
    description:
      "Complete demolition and dismantling services for concrete, Building demolition contractors Bengaluru, industrial sheds, and interior strip-outs with strict safety protocols.",
  },
  {
    icon: <FaMountain className="text-green-600 text-3xl" />,
    title: "Construction Debris & Waste Disposal",
    description:
      "Authorized debris removal, transport to approved dumping yards, and eco-friendly disposal compliant with local regulations.",
  },
  {
    icon: <GiEarthCrack className="text-blue-600 text-3xl" />,
    title: "Material Handling & Soil Supply",
    description:
      "Scrap segregation, debris handling, recycling, and supply of high-quality filling soil for construction needs.",
  },
];

const ExcavationServices = () => {
  return (
    <div className="bg-gray-50">

    

      {/* SERVICES TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Excavation Services
          </h2>
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
                  <tr key={index} className="hover:bg-gray-100 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        {service.icon}
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

      {/* IMAGE + TEXT */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-center">

          <div className="lg:w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-6">
              Our Expertise in Excavation
            </h2>

            <div className="h-1 w-20 bg-yellow-300 mb-8"></div>

            <p className="text-gray-600 mb-4 text-justify">
              At SCS, we leverage over 30 years of extensive experience and professionalism in providing top-tier excavation services across India.
            </p>

            <p className="text-gray-600 text-justify">
              Our team adapts to modern technologies and delivers reliable excavation solutions exceeding client expectations.
            </p>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={exc}
              alt="Excavation Expertise"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>

        </div>
      </section>

     

    </div>
  );
};

export default ExcavationServices;
