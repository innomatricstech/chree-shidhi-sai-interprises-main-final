import React from 'react';
import { FaExclamationCircle, FaOilCan, FaExplosion, FaWrench, FaTools, FaMapMarkedAlt, FaHandshake, Fa500Px } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ServiceBody = () => {
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
          icon: <Fa500Px/>,
          title: 'Rock Cutting and Breaking Works',
          description: 'Utilizing advanced technology, our team provides precise rock cutting and breaking services.'
        }
      ]
    },
    {
      title: 'Demolition Works & Dismantling Services',
      items: [
        {
          icon: <FaWrench />,
          title: 'Full Demolition Works',
          description: 'Complete removal of structures with meticulous attention to safety and environmental concerns.'
        },
        {
          icon: <FaWrench />,
          title: 'Partial Demolition Works',
          description: 'Selective dismantling to maintain structural integrity.'
        },
        {
          icon: <FaWrench />,
          title: 'Interior Fit-Out Dismantling Works',
          description: 'Safe removal of interior structures for renovation or repurposing.'
        },
        {
          icon: <FaWrench />,
          title: 'Warm Shell Demolition Works',
          description: 'Preserving concrete structures while removing internal fixtures.'
        },
        {
          icon: <FaWrench />,
          title: 'Reinstatement Works',
          description: 'Renewal, reconstruction, or repair to meet project requirements.'
        }
      ]
    },
    {
      title: 'Additional Services',
      items: [
        {
          icon: <FaTools />,
          title: 'Site Preparations',
          description: 'Jungle Cleaning and Land Leveling, Layout Formation, Soil Supplying and Compaction'
        }
      ]
    },
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
    {
      title: 'Why Choose Us',
      items: [
        {
          icon: <FaTools />,
          title: 'Technical Excellence',
          description: 'Proficient in complex demolition and excavation projects.'
        },
        {
          icon: <FaHandshake />,
          title: 'Safety First',
          description: 'Certified workers and robust safety protocols ensure a secure working environment.'
        },
        {
          icon: <FaHandshake />,
          title: 'Quality Assurance',
          description: 'Commitment to delivering superior results and client satisfaction.'
        },
        {
          icon: <FaHandshake />,
          title: 'Reliability, Flexibility, Efficiency',
          description: 'Tailored services that minimize disruption and optimize project efficiency.'
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white font-sans p-4">
    
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            className="text-center"
          >
            <div>
              <p className="text-lg text-gray-300">
                Chethan Construction is your trusted partner for all your excavation, demolition, and site preparation needs.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-300">
                Our team of experts delivers unparalleled service, ensuring your project is completed with precision and efficiency.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-300">
                Experience the difference with Chethan Construction – where quality, safety, and customer satisfaction are our top priorities.
              </p>
            </div>
          </Carousel>
        </div>
      <div className="container mx-auto px-4 py-16">
        {services.map((service, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">{service.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.items.map((item, itemIndex) => (
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
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ServiceBody;