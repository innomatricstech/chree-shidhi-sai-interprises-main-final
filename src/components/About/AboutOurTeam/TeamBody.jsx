import React from "react";
import "./TeamBody.css";
import teamMain from "../../../assets/teamBg.jpg";
import teamMain2 from "../../../assets/teamBg2.jpg";

const TeamBody = () => {
  return (
    <div>
      {/* Section Title */}
      <div className="flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 mb-6 sm:mb-8 md:mb-12 md:my-20">
        <div className="flex-grow border-t border-black"></div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mx-2 sm:mx-4 text-amber-500 whitespace-nowrap">
          OUR TEAM
        </h1>
        <div className="flex-grow border-t border-black"></div>
      </div>

      {/* Background Section */}
      <div className="teamBg flex justify-center items-center">
        <div className="bg-black bg-opacity-50 p-4 sm:p-6 lg:p-12 w-full max-w-screen-lg">
          {/* First Team Member */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <img
              src={teamMain}
              alt="Sri. M H Krishna Murthy"
              className="w-32 h-40 sm:w-48 sm:h-56 object-cover border-2 border-amber-500"
            />
            <p className="text-white text-sm sm:text-base leading-relaxed">
              <span className="text-amber-500 font-semibold">
                Sri. M H Krishna Murthy
              </span>
              , proprietor of Shree Chethan Services, has a vast experience and
              knowledge in the field of Demolition and civil Industry. He is a
              passionate and dedicated businessman, being in the field for about
              more than 30+ years. With his vast knowledge and technical
              experience, he has gained excellent recognition in the demolition
              industry. <br />
              He is a strategic, technical, and coherent solution for any type
              of challenging works like building collapse in Bangalore for the
              last 15 years. He has handled major challenging and big projects
              like Namma Metro station construction, Bangalore, NH-4 National
              Highway road widening works, Bangalore International Airport road
              widening and excavation works.
            </p>
          </div>

          {/* Second Team Member */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              <span className="text-amber-500 font-semibold">
                Chethan K Jodidhar
              </span>
              , Project Manager at SCS, has been in the field for more than 10
              years. He heads the supervisors, manages and monitors both
              manpower as well as machinery required at work sites. He is
              pioneering the handling of dismantling works and demolition works.
              He oversees and manages the quotation for projects, preparation of
              BOQ, tenders, etc., under the guidance of Sri M H Krishna Murthy.
              <br />
              He also oversees rentals of machinery and vehicles. He has a vast
              experience and knowledge in the demolition and excavation field.
            </p>
            <img
              src={teamMain2}
              alt="Chethan K Jodidhar"
              className="w-32 h-40 sm:w-48 sm:h-56 object-cover border-2 border-amber-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBody;
