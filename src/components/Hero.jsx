import React from "react";
import { motion } from "framer-motion";
import profileImg_1 from "../assets/profile_1.jpg";
import NetworkBackground from "./NetworkBackground";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* 🔥 Animated Canvas Background */}
      <NetworkBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10"
      >
        {/* left side */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple">Akash Deep</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* right side Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={profileImg_1}
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
