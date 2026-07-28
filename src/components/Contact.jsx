import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { init, sendForm } from "@emailjs/browser";
import Toast from "./Toast";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
  FaCopy,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

if (EMAILJS_PUBLIC_KEY) {
  init(EMAILJS_PUBLIC_KEY);
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("akashdeep58533@gmail.com").then(() => {
      setToastVisible(true);
    });
  }, []);

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
      await sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current
      );
      setStatusMessage({ type: "success", text: "Message sent successfully!" });
      form.reset();
    } catch {
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "New Delhi, India",
      color: "text-[var(--accent)]",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "akashdeep58533@gmail.com",
      color: "color-email",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 7061523346",
      color: "color-success",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/akashdeep-tech-os",
      label: "GitHub",
      hoverClass: "hover-github",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/akashdeep",
      label: "LinkedIn",
      hoverClass: "hover-linkedin-bg",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/akashdeep",
      label: "Twitter",
      hoverClass: "hover-twitter-bg",
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/akashdeep",
      label: "LeetCode",
      hoverClass: "hover-leetcode-bg",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="contact"
      className="py-24 bg-theme-primary"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 neu-card text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="neu-card p-8 rounded-3xl">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-theme-primary font-medium mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 neu-input text-theme-primary placeholder-theme-muted"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-theme-primary font-medium mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 neu-input text-theme-primary placeholder-theme-muted"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-theme-primary font-medium mb-3"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 neu-input text-theme-primary placeholder-theme-muted resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full btn-cta py-4 rounded-2xl ${
                    sending ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {sending ? (
                    <>
                      <div className="spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-2xl ${
                      statusMessage.type === "error"
                        ? "badge-error"
                        : "badge-success"
                    }`}
                  >
                    {statusMessage.type === "error" ? (
                      <FaExclamationTriangle size={18} />
                    ) : (
                      <FaCheck size={18} />
                    )}
                    <span className="font-medium">{statusMessage.text}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="neu-card p-6 rounded-3xl flex items-start gap-4"
              >
                <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center">
                  <info.icon className={`text-xl ${info.color}`} />
                </div>
                    <div>
                      <h3 className="text-theme-primary font-semibold mb-1">
                        {info.title}
                      </h3>
                      <p className="text-theme-secondary text-sm flex items-center gap-2">
                        {info.value}
                        {info.title === "Email" && (
                          <button
                            onClick={copyEmail}
                            className="text-[var(--accent)] hover:scale-110 transition-transform"
                            aria-label="Copy email address"
                          >
                            <FaCopy size={12} />
                          </button>
                        )}
                      </p>
                    </div>
              </motion.div>
            ))}

            {/* Social Links Card */}
            <div className="neu-card p-6 rounded-3xl">
              <h3 className="text-theme-primary font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 neu-button rounded-xl flex items-center justify-center text-theme-secondary ${social.hoverClass} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Message Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="neu-card p-6 rounded-3xl gradient-primary-br-full"
            >
              <h3 className="text-white font-semibold mb-2">
                Quick Response
              </h3>
              <p className="text-white/80 text-sm">
                I typically respond within 24 hours. Feel free to reach out anytime!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Toast message="Email copied to clipboard!" visible={toastVisible} onClose={() => setToastVisible(false)} />
    </motion.section>
  );
};

export default Contact;
