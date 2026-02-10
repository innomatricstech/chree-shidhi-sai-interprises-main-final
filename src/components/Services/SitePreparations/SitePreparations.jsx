import React from 'react';
import { FaTree, FaMapMarkedAlt, FaEarthAfrica, FaAccessibleIcon, FaTruckLoading } from 'react-icons/fa';
import sitePreparationImage from "../../../assets/sitePreparation.jpg";
import SitePreparationsHero from './SitePreparationsHero';
import SitePreparationsText from './SitePreparationsText';
import ContactBody from '../../Contact/ContactBody';

const services = [
  {
    icon: <FaTree className="text-green-500 text-3xl" />,
    title: "Jungle Cleaning and Land Leveling",
    description: "Efficient removal of vegetation and leveling of land to prepare the site for construction.",
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-500 text-3xl" />,
    title: "Layout Formation",
    description: "Precise layout formation to ensure accurate and effective project planning and execution.",
  },
  {
    icon: < FaTruckLoading className="text-amber-400 text-3xl"/>,
    title: "Soil Supplying and Compaction",
    description: "Providing high-quality soil and ensuring proper compaction to create a stable foundation.",
  },
];

const SitePreparations = () => {
  return (
    <div className="bg-gray-50">
      {/* <SitePreparationsHero /> */}
      <SitePreparationsText />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Site Preparation Services</h2>
          <div className="mt-2 h-1 w-20 bg-yellow-300 mx-auto"></div>
        </div>
        
        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
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
                Our Expertise in Site Preparation
              </h2>
              <div className="h-1 w-20 bg-yellow-300 mb-8"></div>
              <p className="text-justify text-gray-600 leading-relaxed mb-4">
                At SCS, we bring over 30 years of experience to our site preparation services. Our comprehensive approach ensures that every project starts with a solid foundation. We specialize in jungle cleaning and land leveling to prepare the site for construction, accurate layout formation to guide the project, and soil supplying and compaction to ensure a stable base.
              </p>
              <p className="text-justify text-gray-600 leading-relaxed mb-4">
                Our commitment to excellence and attention to detail guarantees that your project begins on the right track. With our expertise, we ensure that your construction site is properly prepared, setting the stage for a successful project from the very beginning.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img src={sitePreparationImage} alt="Site Preparation Expertise" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Site Preparation Process</h2>
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
      
      <ContactBody />
    </div>
  );
};

export default SitePreparations;