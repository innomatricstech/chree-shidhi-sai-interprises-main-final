import React, { useState } from 'react';
import { FaExclamationCircle, FaOilCan, FaExplosion, FaWrench, FaTools, FaMapMarkedAlt, FaHandshake, Fa500Px, FaTruckMonster, FaRockrms } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Industry from './Industry/Industry';
import { FaBomb, FaBuildingCircleExclamation, FaBuildingShield, FaChair, FaRecycle } from 'react-icons/fa6';

const ServiceBodyTwo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: 'Excavation Services',
      items: [
        {
          icon: <FaExclamationCircle />,
          title: 'Earthworks',
          description: 'Specializing in mass excavation, we prioritize safety and care to safeguard buried infrastructure such as sewer lines and water pipes.'
        },
        {
          icon: <FaOilCan />,
          title: 'Backfilling and Embankment Works',
          description: 'We use high-quality materials like soil, murram, and gravel for stable backfilling and embankment projects.'
        },
        {
          icon: <FaRockrms />,
          title: 'Rock Cutting and Breaking Works',
          description: 'Utilizing advanced technology, our team provides precise rock cutting and breaking services.'
        }
      ]
    },
    {
      title: 'Demolition Works & Dismantling Services',
      items: [
        {
          icon: <FaBomb />,
          title: 'Full Demolition Works',
          description: 'Complete removal of structures with meticulous attention to safety and environmental concerns.'
        },
        {
          icon: <FaBuildingShield/>,
          title: 'Partial Demolition Works',
          description: 'Selective dismantling to maintain structural integrity.'
        },
        {
          icon: <FaWrench/>,
          title: 'Interior Fit-Out Dismantling Works',
          description: 'Safe removal of interior structures for renovation or repurposing.'
        },
        {
          icon: <Fa500Px/>,
          title: 'Warm Shell Demolition Works',
          description: 'Preserving concrete structures while removing internal fixtures.'
        },
        {
          icon: <FaRecycle/>,
          title: 'Reinstatement Works',
          description: 'Renewal, reconstruction, or repair to meet project requirements.'
        }
      ]
    },
    {
      title: 'Additional Services',
      items: [
        {
          icon: <FaBuildingCircleExclamation />,
          title: 'Site Preparations',
          description: 'Jungle Cleaning and Land Leveling, Layout Formation, Soil Supplying and Compaction'
        }
      ]
    }
]
    const extras = [
    {
      title: 'Our Expertise',
      items: [
        {
          icon: <FaMapMarkedAlt />,
          title: 'Comprehensive Dismantling',
          description: 'Efficient removal of partitions, ceilings, flooring, and fixtures for interior fit-outs.'
        },
        {
          icon: <FaMapMarkedAlt />,
          title: 'Reinstatement Services',
          description: 'Ensuring spaces are reinstated to original or new specifications.'
        },
        {
          icon: <FaMapMarkedAlt />,
          title: 'Nationwide Coverage',
          description: 'Operating seamlessly across India with consistent quality and stringent safety standards.'
        }
      ]
    },
    // {
    //   title: 'Why Choose Us',
    //   items: [
    //     {
    //       icon: <FaTools />,
    //       title: 'Technical Excellence',
    //       description: 'Proficient in complex demolition and excavation projects.'
    //     },
    //     {
    //       icon: <FaHandshake />,
    //       title: 'Safety First',
    //       description: 'Certified workers and robust safety protocols ensure a secure working environment.'
    //     },
    //     {
    //       icon: <FaHandshake />,
    //       title: 'Quality Assurance',
    //       description: 'Commitment to delivering superior results and client satisfaction.'
    //     },
    //     {
    //       icon: <FaHandshake />,
    //       title: 'Reliability, Flexibility, Efficiency',
    //       description: 'Tailored services that minimize disruption and optimize project efficiency.'
    //     }
    //   ]
    // }
  ];

  return (
    <>
    <div className="bg-gray-900 text-white font-sans  p-4">
      <div className="container mx-auto px-4 py-16">
      
    <h1 className='text-center text-4xl text-zinc-50 '>SERVICES WE OFFER</h1>
        <div className="bg-inherit p-12 rounded-lg shadow-lg">
          <div className="flex md:flex-row flex-col gap-y-6 justify-center mb-6">
            <button
              className={`px-4 py-2 rounded-lg mx-2 transition-colors duration-300 ${activeTab === 0 ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              onClick={() => setActiveTab(0)}
            >
              Excavation Services
            </button>
            <button
              className={`px-4 py-2 rounded-lg mx-2 transition-colors duration-300 ${activeTab === 1 ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              onClick={() => setActiveTab(1)}
            >
              Demolition Works & Dismantling Services
            </button>
            <button
              className={`px-4 py-2 rounded-lg mx-2 transition-colors duration-300 ${activeTab === 2 ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              onClick={() => setActiveTab(2)}
            >
              Additional Services
            </button>
          </div>
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay={false}
            interval={1000}
            selectedItem={activeTab}
            className={`p-6 ${activeTab< 2 ? 'h-auto': 'h-[400px]'} `}
            
          >
            {services.map((service, index) => (
              <div
                key={index}
                // className={` md:gap-y-12 md:flex ${index === 2 ? 'flex-row  justify-center items-center' : 'flex-row   justify-center items-center'}
                //  justify-center items-center gap-x-4`}
              className='gap-x-4 flex flex-col md:flex-row flex-1 w-[100%]'
              >
                {service.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-800 my-4
                     p-6 rounded-lg flex  flex-col flex-1 justify-center 
                     items-center w-[100%] h-auto md:h-[300px] shadow-lg transition-all duration-300 hover:bg-zinc-950"
                  >
                    <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-left">{item.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </Carousel> 
       
            
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extras[0].items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-black"
              >
                <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extras[1].items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-700"
              >
                <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      
      </div>
    </div>
    
    </>
  );
};

export default ServiceBodyTwo;