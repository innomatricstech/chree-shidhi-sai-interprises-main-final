import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
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

      alert("✅ Email successfully sent!");

      // Clear form fields
      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      alert("❌ Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ContactForm flex-1 bg-zinc-950 p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">
        CONTACT FORM
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            ref={nameRef}
            required
            placeholder="Your Name"
            className="mt-1 block w-full px-4 py-2 text-white bg-transparent border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              required
              placeholder="Your Email"
              className="mt-1 block w-full px-4 py-2 text-white bg-transparent border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-white">
              Phone
            </label>
            <input
              type="tel"
              ref={phoneRef}
              required
              placeholder="Your Phone"
              className="mt-1 block w-full px-4 py-2 text-black border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-white">
            Comments
          </label>
          <textarea
            rows="4"
            ref={messageRef}
            required
            placeholder="Your Message"
            className="mt-1 block w-full px-4 py-2 text-black border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-[160px] h-[60px] bg-amber-500 text-white font-medium rounded-md hover:bg-zinc-950 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Contact Us"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
