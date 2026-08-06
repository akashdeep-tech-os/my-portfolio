import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark, FaDownload, FaSun, FaMoon } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/useTheme";
import { navItems } from "../seo/siteConfig";

const RESUME_URL = "/AKASH_DEEP.pdf";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 50;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeId =
    navItems.find((item) => item.path !== "/" && pathname.startsWith(item.path))?.id ||
    (pathname === "/" ? "home" : "");

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  async function forceDownload(url, filename = "AKASH_DEEP.pdf") {
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
    } catch {
      window.open(url, "_blank", "noopener");
    }
  }

  const handleDownloadClick = (e) => {
    e.preventDefault();
    forceDownload(RESUME_URL, "AKASH_DEEP.pdf");
    setShowMenu(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 px-4 md:px-8" : "py-4 px-4 md:px-8"
      }`}
      aria-label="Main navigation"
    >
      <div
        className={`container mx-auto flex justify-between items-center rounded-2xl px-6 py-4 transition-all duration-500 ${
          scrolled ? "neu-card backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-2"
            aria-label="Akash Deep — Home"
          >
            <span className="gradient-text">Akash</span>
            <span className="text-theme-secondary">Deep</span>
            <motion.span
              className="w-3 h-3 bg-[var(--accent)] rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 font-medium rounded-xl transition-all duration-300 group inline-block ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-theme-secondary hover:text-[var(--accent)] hover:bg-[var(--bg-card)]"
                  }`}
                >
                  <span className="capitalize">{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[var(--accent)] transition-all duration-300 rounded-full ${
                      isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="w-10 h-10 neu-button flex items-center justify-center text-theme-secondary hover:text-[var(--accent)] ml-2"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMoon size={16} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaSun size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Resume Button */}
          <motion.a
            href={RESUME_URL}
            onClick={handleDownloadClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-cta py-2.5 px-5 ml-2 text-sm rounded-xl"
            title="Download Resume"
          >
            <FaDownload size={14} />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle Mobile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-10 h-10 neu-button flex items-center justify-center text-theme-secondary"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 neu-button flex items-center justify-center text-theme-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
          >
            {showMenu ? <FaXmark size={18} /> : <FaBars size={18} />}
          </motion.button>
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden mt-3 mx-4 neu-card p-6 rounded-3xl"
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setShowMenu(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`px-4 py-3 font-medium rounded-xl transition-all duration-300 block ${
                        isActive
                          ? "text-[var(--accent)] bg-[var(--bg-secondary)]"
                          : "text-theme-secondary hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)]"
                      }`}
                    >
                      <span className="capitalize">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.a
                href={RESUME_URL}
                onClick={handleDownloadClick}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 mt-2 btn-cta rounded-xl"
              >
                <FaDownload size={16} />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
