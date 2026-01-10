import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FloatingSocialMedia = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 flex flex-col space-y-3 z-50">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FaFacebookF size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-lg hover:opacity-90 transition"
      >
        <FaInstagram size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919632676109"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        {/* Add icon or text inside the anchor tag if needed */}

        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default FloatingSocialMedia;
