import React from 'react';
import { FaBuilding, FaTools, FaTrash, FaHammer } from 'react-icons/fa';
import demolitionImage from "../../../assets/demolition.webp";
import DemolitionHero from "./DemolitionHero";
import DemolitionText from "./DemolitionText";
import ServiceContact from '../ServiceContact';
import ContactBody from '../../Contact/ContactBody';

const services = [
  {
    icon: <FaBuilding className="text-cyan-500 text-3xl" />,
    title: "Full Demolition Works",
    description: "Complete removal of structures with meticulous attention to safety and environmental concerns.",
  },
  {
    icon: <FaTools className="text-amber-500 text-3xl" />,
    title: "Partial Demolition Works",
    description: "Selective dismantling to maintain structural integrity.",
  },
  {
    icon: <FaTrash className="text-zinc-500 text-3xl" />,
    title: "Interior Fit-Out Dismantling Works",
    description: "Safe removal of interior structures for renovation or repurposing.",
  },
  {
    icon: <FaHammer className="text-cyan-500 text-3xl" />,
    title: "Warm Shell Demolition Works",
    description: "Preserving concrete structures while removing internal fixtures.",
  },
  {
    icon: <FaBuilding className="text-amber-500 text-3xl" />,
    title: "Reinstatement Works",
    description: "Renewal, reconstruction, or repair to meet project requirements.",
  },
];

const DemolitionDismantle = () => {
  return (
    <div className="bg-gray-50">
      {/* <DemolitionHero /> */}
      {/* <DemolitionText /> */}
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Demolition and Dismantling Services</h2>
          <div className="mt-2 h-1 w-20 bg-yellow-300 mx-auto"></div>
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
                Our Expertise in Demolition
              </h2>
              <div className="h-1 w-20 bg-yellow-300 mb-8"></div>
              <p className="text-justify text-gray-600 leading-relaxed mb-4">
                At SCS, we offer comprehensive demolition and dismantling services with over 30 years of industry expertise. Our focus on safety, efficiency, and environmental responsibility ensures that each project is executed with the highest standards.
              </p>
              <p className="text-justify text-gray-600 leading-relaxed mb-4">
                From full and partial demolitions to specialized interior dismantling and warm shell removals, our team is equipped to handle diverse requirements. We also provide reinstatement services to renew and reconstruct structures, demonstrating our commitment to exceeding client expectations.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img src={demolitionImage} alt="Demolition Expertise" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Demolition Services</h2>
          <div className="mt-2 h-1 w-20 bg-yellow-300 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* <ContactBody/> */}
    </div>
  );
};

export default DemolitionDismantle;