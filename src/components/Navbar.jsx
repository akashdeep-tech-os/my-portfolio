import { useState } from "react";
import { FaBars, FaDownload } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

// Resume path for GitHub Pages
const RESUME_URL = import.meta.env.BASE_URL + "Python_Developer_Resume.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["home", "about", "skills", "project", "experience", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md px-8 py-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          Akash <span className="text-purple-500">Deep</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize text-white/80 hover:text-purple-500"
            >
              {item}
            </a>
          ))}

          <a
            href={RESUME_URL}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded"
            target="_blank"
            rel="noreferrer"
          >
            <FaDownload /> Resume
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          {open ? (
            <FaXmark
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            />
          ) : (
            <FaBars
              onClick={() => setOpen(true)}
              className="text-white text-2xl"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 mt-6">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="text-xl text-white"
            >
              {item}
            </a>
          ))}

          <a
            href={RESUME_URL}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded"
            target="_blank"
            rel="noreferrer"
          >
            <FaDownload /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
