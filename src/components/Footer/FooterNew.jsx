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

const FooterNew = () => {
  const handleClick = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <footer className="bg-zinc-950 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Column */}
          <div>
            <h1 className="text-xl font-bold mb-4">ABOUT</h1>
            <div className="bg-yellow-500 flex w-full h-[1px]    justify-start items-start"></div>
            <p className="mb-2 mt-3">
              Established in 1994, Shree Chethan Services has been providing our
              clients with excellent services in Karnataka and across India.
            </p>
            <p className="mb-1">Mobile Number: +91-9632676109</p>
            <p>Email: mob9448334376@gmail.com</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h1 className="text-xl font-bold mb-4">QUICK LINKS</h1>
            <div className="bg-yellow-500 flex w-full h-[1px] justify-start items-start"></div>
            <ul className="space-y-2 mt-3">
              {["Home", "About Us", "Project", "Contact Us"].map((item) => (
                <li key={item} className="list-disc">
                  <Link
                    onClick={handleClick}
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-amber-400 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h1 className="text-xl font-bold mb-4">SERVICES</h1>
            <div className="bg-yellow-500 flex w-full h-[1px] justify-start items-start"></div>
            <ul className="space-y-2 mt-3">
              {[
                { name: "Excavation Services", path: "/excavation" },
                {
                  name: "Demolition/Dismantling Services",
                  path: "/demolition",
                },
                { name: "Site Preparations", path: "/siteprep" },
              ].map((service) => (
                <li key={service.name} className="list-disc">
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

          {/* Location Column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 uppercase">Location</h3>
            <div className="bg-yellow-500 flex w-full h-[1px] justify-start items-start"></div>
            <div className="rounded-md overflow-hidden shadow-lg mt-3">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.719230584889!2d77.57209037538163!3d12.989801387327244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae170030771e61%3A0x1bd7dec2a9f95f09!2sChethan%20Cinemas!5e0!3m2!1sen!2sin!4v1739516411249!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#"
            className="text-white hover:text-amber-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <div className="bg-yellow-500 flex  w-[1px] h-auto justify-start items-start"></div>
          <a
            href="#"
            className="text-white hover:text-amber-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <div className="bg-yellow-500 flex  w-[1px] h-auto justify-start items-start"></div>
          <a
            href="#"
            className="text-white hover:text-amber-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <div className="bg-yellow-500 flex w-[1px] h-auto justify-start items-start"></div>
          <a
            href="#"
            className="text-white hover:text-amber-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          <div className="bg-yellow-500 flex w-[1px] h-auto justify-start items-start"></div>
          <a
            href="#"
            className="text-white hover:text-amber-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Shree Chethan Services. All rights
          reserved.
          <div className="mt-2">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
