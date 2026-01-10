import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa';

const CareerBody = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side: Image and Description */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Career opportunities"
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-4">
            We're always looking for talented individuals to join our growing team. If you're passionate about innovation and want to make a difference, we'd love to hear from you!
          </p>
          <p className="text-gray-600">
            Fill out the form to submit your application and take the first step towards an exciting career with us.
          </p>
        </div>

        {/* Right side: Contact Form */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Apply Now</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                <FaUser className="inline mr-2" />
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                <FaEnvelope className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="johndoe@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                <FaPhone className="inline mr-2" />
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="(123) 456-7890"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">
                <FaFileAlt className="inline mr-2" />
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-950 hover:bg-amber-500 text-white font-bold 
              py-2 px-4 rounded-lg transition duration-300 md:w-[170px] h-[70px]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerBody;