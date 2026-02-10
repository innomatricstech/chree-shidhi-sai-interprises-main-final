import React from 'react';
import s1 from "../../assets/services/SSSE3.jpg"
import s2 from "../../assets/services/SSSE1.jpg"
import s3 from "../../assets/services/SSSE16.jpg"
import s4 from "../../assets/services/SSSE15.png"

const services = [
  {
    image: s1,
    subtitle: "EXCAVATION",
    title: "Earthworks & Foundations",
    description: "Specializing in precision excavation and solid foundation work for construction projects."
  },
  {
    image: s2,
    subtitle: "DEMOLITION",
    title: "Structural Dismantling",
    description: "Expert demolition services with a focus on safety and environmental considerations."
  },
  {
    image: s3,
    subtitle: "RENOVATION",
    title: "Building Transformation",
    description: "Comprehensive renovation services to breathe new life into existing structures."
  },
  {
    image: s4,
    subtitle: "SITE PREPARATION",
    title: "Land Development",
    description: "Thorough site preparation services, including clearing, grading, and infrastructure setup."
  }
];

export default function Component() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col w-full mb-20 items-center">
          <div className="flex items-center justify-center px-4 md:px-32 mb-12">
            <div className="flex-grow border-t w-[50px] md:w-[100px] border-black"></div>
            <h1 className="text-2xl md:text-4xl font-semibold text-center mx-4 text-amber-500">
              Who We Are
            </h1>
            <div className="flex-grow border-t w-[50px] md:w-[100px] border-black"></div>
          </div>
          <p className="text-center lg:w-1/2 w-full text-lg  text-gray-600 leading-relaxed mb-6">
            Shree Chethana Services is a Bangalore based top player and pioneers
            in the category of building demolition, mass excavation Contractors
            in Bangalore. Established in 1994, we have been providing our
            clients with excellent services in Karnataka and across India.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="relative overflow-hidden group">
                <img
                  className="h-64 rounded md:h-[370px] w-[400px] md:w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src={service.image}
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 ease-in-out"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="tracking-widest text-xs font-medium title-font mb-1 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                    {service.subtitle}
                  </h3>
                  <h2 className="text-lg font-medium title-font mb-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                    {service.title}
                  </h2>
                  <p className="leading-relaxed text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}