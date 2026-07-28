import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/akashdeep-tech-os", label: "GitHub", hoverClass: "hover-github" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/akashdeep", label: "LinkedIn", hoverClass: "hover-linkedin" },
    { icon: FaTwitter, href: "https://twitter.com/akashdeep", label: "Twitter", hoverClass: "hover-twitter" },
    { icon: SiLeetcode, href: "https://leetcode.com/akashdeep", label: "LeetCode", hoverClass: "hover-leetcode" },
  ];

  return (
    <footer className="py-12 bg-theme-secondary">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold"
          >
            <span className="gradient-text">Akash</span>
            <span className="text-theme-secondary">Deep</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 neu-card rounded-xl flex items-center justify-center text-theme-secondary ${social.hoverClass} transition-all duration-300`}
                aria-label={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider-gradient mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-theme-secondary text-sm">
            © {new Date().getFullYear()} Akash Deep. All rights reserved.
          </p>

          <p className="text-theme-secondary text-sm flex items-center gap-1.5">
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="color-heart text-xs" />
            </motion.span>{" "}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
