import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImg_1 from "../assets/profile_1.jpg";
import NetworkBackground from "./NetworkBackground";
import MagneticButton from "./MagneticButton";

const TYPED_WORDS = ["Software Engineer", "Full Stack Developer", "React & FastAPI Developer"];

const Typewriter = ({ words }) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((w) => (w + 1) % words.length);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-[3px] h-[1em] bg-[var(--accent)] ml-1 animate-pulse align-middle" />
    </span>
  );
};

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/akashdeep-tech-os", hoverClass: "hover-github", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/akashdeep", hoverClass: "hover-linkedin", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/akashdeep", hoverClass: "hover-twitter", label: "Twitter" },
    { icon: FaEnvelope, href: "#contact", hoverClass: "hover-email", label: "Email" },
    { icon: SiLeetcode, href: "https://leetcode.com/akashdeep", hoverClass: "hover-leetcode", label: "LeetCode" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-theme-primary"
    >
      {/* Animated Canvas Background */}
      <NetworkBackground />

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent-gradient-to)]/10 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10 gap-12"
      >
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 neu-card text-[var(--accent)] text-sm font-semibold rounded-full mb-6">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-theme-primary leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Akash Deep</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-theme-secondary min-h-[1.5em]"
          >
            <Typewriter words={TYPED_WORDS} />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-theme-secondary mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Software Engineer with 1+ years of experience building scalable
            enterprise web applications using React.js, JavaScript, FastAPI,
            and PostgreSQL. Passionate about responsive UIs and high-quality software.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <MagneticButton
              href="#project"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-cta cursor-pointer"
            >
              View Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 neu-button text-[var(--accent)] font-semibold rounded-2xl cursor-pointer"
            >
              Contact Me
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 mt-8 justify-center md:justify-start"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 neu-card rounded-xl flex items-center justify-center text-theme-secondary ${social.hoverClass} transition-all duration-300`}
                aria-label={`Visit ${social.label}`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Profile Image */}
        <motion.div
          variants={itemVariants}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full gradient-primary-r p-1 blur-xl opacity-30 animate-pulse" />

            {/* Profile image container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              {/* Neumorphic frame */}
              <div className="absolute inset-0 rounded-full neu-card" />

              {/* Image */}
              <div className="absolute inset-3 rounded-full overflow-hidden">
                <img
                  src={profileImg_1}
                  alt="Akash Deep - Software Engineer"
                  className="w-full h-full object-cover"
                  fetchpriority="high"
                />
              </div>

              {/* Floating tech icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 neu-card rounded-xl flex items-center justify-center text-[var(--accent)]">
                  <span className="text-lg">⚛</span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 neu-card rounded-xl flex items-center justify-center text-success">
                  <span className="text-lg">▶</span>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 neu-card rounded-xl flex items-center justify-center text-warning">
                  <span className="text-lg">⚡</span>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 neu-card rounded-xl flex items-center justify-center text-[var(--accent-gradient-to)]">
                  <span className="text-lg">✦</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
