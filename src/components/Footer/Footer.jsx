import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo11.png";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <footer className="bg-zinc-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
            <p className="text-center md:text-left mb-4">
              Established in 1994, Shree Chethan Services has been providing our
              clients with excellent services in Karnataka and across India.
            </p>
            <div className="flex space-x-4 mb-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl hover:text-amber-400 transition duration-300"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl hover:text-amber-400 transition duration-300"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-2xl hover:text-amber-400 transition duration-300"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-2xl hover:text-amber-400 transition duration-300"
              />
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className="text-amber-400 mr-2"
              />
              <a
                href="mailto:chethanaservices@gmail.com"
                className="hover:underline"
              >
                chethanaservices@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Project", "Clientele", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      onClick={handleClick}
                      to={`/${item.toLowerCase().replace(" ", "")}`}
                      className="hover:text-amber-400 transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {[
                { name: "Excavation Services", path: "/excavation" },
                {
                  name: "Demolition/Dismantling Services",
                  path: "/demolition",
                },
                { name: "Site Preparations", path: "/siteprep" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    onClick={handleClick}
                    to={service.path}
                    className="hover:text-amber-400 transition duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
