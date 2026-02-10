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

const FooterNew = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-white py-8 mt-8">
      <div className="container mx-auto px-4">

        {/* ================= GRID SECTION ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ABOUT */}
          <div>
            <h1 className="text-xl font-bold mb-4">ABOUT</h1>
            <div className="bg-yellow-500 w-full h-[1px]" />

            <p className="mt-3 mb-2">
              Established in 1994, Shree Chethan Services has been providing our
              clients with excellent services in Karnataka and across India.
            </p>

            <p className="mb-1">
              Mobile Number:{" "}
              <a href="tel:+919632676109" className="hover:underline">
                +91-9632676109
              </a>
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:info@shreechethanaservices.com"
                className="hover:underline"
              >
                info@shreechethanaservices.com
              </a>
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h1 className="text-xl font-bold mb-4">QUICK LINKS</h1>
            <div className="bg-yellow-500 w-full h-[1px]" />

            <ul className="space-y-2 mt-3 list-disc ml-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutus" },
                { name: "Project", path: "/project" },
                { name: "Contact Us", path: "/contactus" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={handleClick}
                    className="hover:text-amber-400 transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h1 className="text-xl font-bold mb-4">SERVICES</h1>
            <div className="bg-yellow-500 w-full h-[1px]" />

            <ul className="space-y-2 mt-3 list-disc ml-4">
              {[
                { name: "Excavation Services", path: "/excavation" },
                { name: "Demolition/Dismantling Services", path: "/demolition" },
                { name: "Site Preparations", path: "/siteprep" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    onClick={handleClick}
                    className="hover:text-amber-400 transition duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 uppercase">Location</h3>
            <div className="bg-yellow-500 w-full h-[1px]" />

            <div className="rounded-md overflow-hidden shadow-lg mt-3">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.719230584889!2d77.57209037538163!3d12.989801387327244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae170030771e61%3A0x1bd7dec2a9f95f09!2sChethan%20Cinemas!5e0!3m2!1sen!2sin!4v1739516411249!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </section>

        {/* ================= SOCIAL ================= */}
        <div className="mt-8 flex justify-center items-center space-x-4">

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>

          <div className="bg-yellow-500 w-[1px] h-5" />

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>

          <div className="bg-yellow-500 w-[1px] h-5" />

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>

          <div className="bg-yellow-500 w-[1px] h-5" />

          <a
            href="https://wa.me/919632676109"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>

          <div className="bg-yellow-500 w-[1px] h-5" />

          <a
            href="mailto:info@shreechethanaservices.com"
            className="hover:text-amber-400"
          >
            <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
          </a>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Shree Chethan Services. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default FooterNew;
