// Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { init, sendForm } from "@emailjs/browser";

import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaTwitter 
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// Initialize EmailJS with your public key
init("rTKY7Olj5loUG5grP"); // <- your Public Key

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    const form = formRef.current;
    const name = form.name.value?.trim();
    const email = form.email.value?.trim();
    const message = form.message.value?.trim();

    if (!name || !email || !message) {
      setStatusMessage({ type: "error", text: "Please fill all fields." });
      return;
    }

    setSending(true);

    try {
      // sendForm uses the form element directly
      const response = await sendForm(
        "service_5b5as9d",    // your Service ID
        "template_yex0tvd",  // your Template ID
        formRef.current
      );

      // EmailJS typically returns an object; log it for debugging
      console.log("EmailJS success response:", response);
      setStatusMessage({ type: "success", text: "Message sent successfully!" });
      form.reset();
    } catch (err) {
      // Better error visibility for debugging
      console.error("EmailJS sendForm error:", err);

      // Try to extract useful error info
      let debug = "";
      try {
        if (err.status) debug += `status: ${err.status} `;
        if (err.text) debug += `text: ${err.text} `;
        if (err.message) debug += `message: ${err.message} `;
        else debug += JSON.stringify(err);
      } catch (ex) {
        debug = JSON.stringify(err);
      }

      setStatusMessage({
        type: "error",
        text: `Failed to send message. ${debug}`
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input id="name" name="name" className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" type="text" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input id="email" name="email" className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" type="email" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea id="message" name="message" className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" required />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 ${sending ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {sending ? "Sending..." : "Send"}
              </button>

              {statusMessage && (
                <p className={`mt-2 ${statusMessage.type === "error" ? "text-red-400" : "text-green-400"}`}>
                  {statusMessage.text}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4"><FaMapMarkerAlt /></div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">New Delhi</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4"><FaEnvelope /></div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">akashdeep58533@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4"><FaPhone /></div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 7061523346</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white-400 hover:bg-purple hover:text-white transition duration-300"><FaGithub /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300"><FaLinkedin /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300"><FaTwitter /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300"><SiLeetcode /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
