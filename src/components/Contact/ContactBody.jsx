import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactBody = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("pA0i5E39NRJLfMBZ8"); // ✅ Public Key
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_6junq1p";
    const templateId = "template_57bye08";

    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, templateParams);

      alert("✅ Message sent successfully!");

      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-4 sm:p-6 md:p-10">
      <div className="container mx-auto">
        <div className="pb-8 md:pb-16">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-light mb-4 text-amber-600">
              CONTACT INFORMATION
            </h2>
            <div className="w-full h-[2px] bg-gray-500 max-w-[500px] mx-auto"></div>
            <p className="text-gray-950 mt-4">
              Partner with Chethan for reliable, safe, and high-quality service
              delivery across India.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Left Section */}
            <div className="flex-1 mb-8">
              <div className="flex items-start mb-8">
                <FontAwesomeIcon
                  className="text-amber-400 text-3xl mr-4"
                  icon={faMapMarkerAlt}
                />
                <p className="text-gray-950">
                  4, N S Iyengar St, Kumara Park West, Bengaluru – 560020
                </p>
              </div>

              <div className="flex items-start mb-8">
                <FontAwesomeIcon
                  className="text-amber-400 text-3xl mr-4"
                  icon={faMobileAlt}
                />
                <a href="tel:+919632676109" className="hover:underline">
                  +91 9632676109
                </a>
              </div>

              <div className="flex items-start mb-8">
                <FontAwesomeIcon
                  className="text-amber-400 text-3xl mr-4"
                  icon={faGlobeAsia}
                />
                <a
                  href="info@shreechethanaservices.com"
                  className="hover:underline"
                >
                  info@shreechethanaservices.com
                </a>
              </div>

              {/* Map */}
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.719230584889!2d77.57209037538163!3d12.989801387327244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae170030771e61%3A0x1bd7dec2a9f95f09!2sChethan%20Cinemas!5e0!3m2!1sen!2sin!4v1739516411249!5m2!1sen!2sin"
                className="w-full h-[300px] rounded-md"
                loading="lazy"
              ></iframe>
            </div>

            {/* Right Section – FORM */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-light text-center mb-5 text-amber-600">
                SEND US A MESSAGE
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Your Name"
                    required
                    className="border border-amber-600 p-2 rounded-md"
                  />
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Your Email"
                    required
                    className="border border-amber-600 p-2 rounded-md"
                  />
                  <input
                    ref={phoneRef}
                    type="tel"
                    placeholder="Your Phone"
                    required
                    className="border border-amber-600 p-2 rounded-md md:col-span-2"
                  />
                </div>

                <textarea
                  ref={messageRef}
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="border border-amber-600 p-2 w-full rounded-md"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="border border-amber-600 py-2 px-4 w-full md:w-[270px] rounded-md hover:bg-amber-600 hover:text-white transition"
                >
                  {loading ? "Sending..." : "SEND NOW"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBody;
