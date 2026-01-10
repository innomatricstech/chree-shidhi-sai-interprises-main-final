import React from 'react';
// import aboutImg from "../../assets/excavation.jpg";
import aboutImg from "../../assets/excavation.webp";
import aboutImg2 from "../../assets/commitment.webp";
import AboutWhatWeDo from './AboutWhatWeDo';

const AboutBody = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative py-8 px-4 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative mt-20">
            <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-600">
              About SCS
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Section 1 */}
            <section className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mt-10 lg:mt-0">
                <h2 className="text-2xl font-bold text-amber-500 mb-4">
                  Experience & Professionalism
                </h2>
                <p className="mt-3 text-lg text-gray-700">
                  At SCS, we bring over 30 years of extensive experience and
                  unwavering professionalism to every project. We have
                  established a solid reputation for excellence and reliability
                  in the construction industry by successfully executing diverse
                  and challenging projects across India.
                </p>
                <ul className="mt-4 space-y-3 text-gray-700">
                  {[
                    "30 Years of Industry Leadership",
                    "Diverse Project Portfolio",
                    "Advanced Technology & Methods",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-amber-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-72 md:h-96 lg:h-full"
                  src={aboutImg}
                  alt="Excavation Work"
                />
              </div>
            </section>

            {/* Section 2 */}
            <section className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="lg:col-start-2">
                <h2 className="text-2xl font-bold text-amber-500 mb-4">
                  Our Commitment to Professionalism
                </h2>
                <p className="mt-3 text-lg text-gray-700">
                  Client-Centric Approach: We prioritize clear communication and
                  responsiveness, ensuring our clients are informed and
                  satisfied throughout the project lifecycle.
                </p>
                <ul className="mt-4 space-y-3 text-gray-700">
                  {[
                    "Safety & Compliance",
                    "Quality Assurance",
                    "Advanced Technology & Methods",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-amber-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-72 md:h-96 lg:h-full"
                  src={aboutImg2}
                  alt="Excavation Work"
                />
              </div>
            </section>

            {/* Closing Statement */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-8">
                Our dedication to excellence has earned us recognition within
                the industry and repeat business from satisfied clients. Whether
                it's excavation, demolition, or site preparation, Chethan is
                synonymous with reliability and expertise.
              </p>
            </div>

            {/* Additional Content */}
            <AboutWhatWeDo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;