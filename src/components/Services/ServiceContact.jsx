import React from 'react';
import serviceContact from "../../assets/serviceContact.webp";

const ServiceContact = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between p-8 bg-cyan-950 rounded-none shadow-lg">
      {/* Left Side - Image, Title, and Paragraph */}
      <div className="flex-1 flex flex-col items-start p-6  rounded-lg ">
        <img
          src={serviceContact}
          alt="Contact Us"
          className="w-full h-[auto] rounded-lg mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2 text-gray-50">Get in Touch</h2>
        <p className="text-gray-50">
          We would love to hear from you! Please fill out the form on the right and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 p-6  rounded-lg shadow-md flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-50">Contact Form</h2>
        <form action="#" method="POST" className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-50 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-50 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Input */}
          <div>
            <label htmlFor="mobile" className="block text-gray-50 mb-2">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Comments Section */}
          <div>
            <label htmlFor="comments" className="block text-gray-50 mb-2">Comments</label>
            <textarea
              id="comments"
              name="comments"
              rows="3"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceContact;
