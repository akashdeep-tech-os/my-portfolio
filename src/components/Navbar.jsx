import React, { useState } from "react";
import { FaBars, FaDownload } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Correct path for GitHub Pages + Vite
const RESUME_URL = import.meta.env.BASE_URL + "Python_Developer_Resume.pdf";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const sections = ["home", "about", "skills", "project", "experience", "contact"];

  // Force download resume (works on GitHub Pages)
  async function forceDownload(url, filename = "Akash_Deep_Resume.pdf") {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(url, "_blank");
    }
  }

  const handleDownloadClick = (e) => {
    e.preventDefault();
    forceDownload(RESUME_URL);
    setShowMenu(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <motion.a
          href="#/home"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white flex items-center gap-2"
        >
          Akash <span className="text-purple">Deep</span>
          <motion.div
            className="w-4 h-4 bg-purple rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {sections.map((item, index) => (
            <motion.a
              key={item}
              href={`#/${item}`}   // ✅ FIXED
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="relative text-white/80 hover:text-purple transition group"
            >
              <span className="capitalize">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

          {/* Resume Button */}
          <a
            href={RESUME_URL}
            onClick={handleDownloadClick}
            className="flex items-center gap-2 px-4 py-2 bg-purple rounded-lg text-white hover:bg-purple-700 transition"
            download
          >
            <FaDownload />
            Resume
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer text-white"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="md:hidden mt-4 bg-dark-300 h-screen p-6 flex flex-col gap-6 text-center justify-center"
          >
            {sections.map((item, index) => (
              <motion.a
                key={item}
                href={`#/${item}`}   // ✅ FIXED
                onClick={() => setShowMenu(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="text-2xl text-white/80 hover:text-purple"
              >
                {item}
              </motion.a>
            ))}

            <a
              href={RESUME_URL}
              onClick={handleDownloadClick}
              className="flex justify-center items-center gap-2 px-6 py-3 bg-purple rounded-lg text-xl text-white hover:bg-purple-700"
              download
            >
              <FaDownload />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
