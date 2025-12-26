import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/*
  Make sure this file is placed at: public/Python_Developer_Resume.pdf
  Then the URL below will be: https://<your-site>/<path>/Python_Developer_Resume.pdf
*/
const RESUME_URL = "/Python_Developer_Resume.pdf";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  // Try to force-download via fetch->blob (fallback for some cases).
  // If fetch fails, we open in a new tab as a final fallback.
  async function forceDownload(url, filename = "Akash_Deep_Resume.pdf") {
    try {
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) throw new Error("Network response was not ok");
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      // if anything fails, open file in new tab (user can still download)
      window.open(url, "_blank", "noopener");
    }
  }

  // Anchor click handler: prevent default and use forceDownload so we get a reliable download
  const handleDownloadClick = (e) => {
    e.preventDefault();
    forceDownload(RESUME_URL, "Akash_Deep_Resume.pdf");
    // close mobile menu if open
    setShowMenu(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
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
          {["home", "about", "skills", "project", "experience", "contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="relative text-white/80 transition duration-300 hover:text-purple group"
              >
                <span className="capitalize">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            )
          )}

          {/* Resume Button (Desktop) */}
          <a
            href={RESUME_URL}
            onClick={handleDownloadClick}
            className="flex items-center gap-2 px-4 py-2 bg-purple rounded-lg font-medium text-white hover:bg-purple-700 transition duration-300"
            title="Download Resume"
            // download attribute is kept for same-origin behavior; fetch fallback handles download otherwise
            download="Akash_Deep_Resume.pdf"
          >
            <FaDownload />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
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
            className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-6 text-center justify-center"
          >
            {["home", "about", "skills", "project", "experience", "contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  onClick={() => setShowMenu(false)}
                  href={`#${item}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.06 }}
                  className="relative text-white/80 text-2xl transition duration-300 hover:text-purple"
                >
                  <span className="capitalize">{item}</span>
                </motion.a>
              )
            )}

            {/* Resume Button (Mobile) */}
            <a
              href={RESUME_URL}
              onClick={handleDownloadClick}
              className="flex items-center justify-center gap-2 px-6 py-3 mt-4 bg-purple rounded-lg font-medium text-xl text-white hover:bg-purple-700 transition duration-300"
              title="Download Resume"
              download="Akash_Deep_Resume.pdf"
            >
              <FaDownload />
              <span>Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
