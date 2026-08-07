import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { aboutInfo } from "../assets/assets";
import profileImg from "../assets/profile.avif";

const About = ({ hideHeader = false }) => {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      id="about"
      className="py-24 bg-theme-primary"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        {!hideHeader && (
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 neu-card text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
              Get to know{" "}
              <span className="gradient-text">my background</span>
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              Software Engineer crafting scalable enterprise solutions
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
            >
              More about me
              <FaArrowRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 gradient-primary-br rounded-3xl blur-xl opacity-20" />

              {/* Image container */}
              <div className="relative neu-card rounded-3xl overflow-hidden p-2">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-top"
                    src={profileImg}
                    alt="Akash Deep, Python and React developer based in New Delhi, India"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 neu-card px-6 py-4 rounded-2xl"
            >
              <div className="text-center">
                <span className="text-3xl font-bold gradient-text">1+</span>
                <p className="text-theme-secondary text-sm">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-theme-primary">
                My Journey
              </h3>

              <p className="text-theme-secondary leading-relaxed">
                Software Engineer with 1+ years of experience developing scalable enterprise web applications using React.js, JavaScript, FastAPI, and PostgreSQL. Proficient in building responsive user interfaces, integrating RESTful APIs, optimizing application performance, and delivering secure, high-quality software solutions. Based in New Delhi, I'm open to freelance, remote, and full-time Python, FastAPI, Django, and React development roles across India and internationally.
              </p>

              <p className="text-theme-secondary leading-relaxed">
                Experienced in working with Spring Boot-based backend services through REST API integration in enterprise environments, including real-time Video Management System (VMS) applications. Skilled in secure authentication, role-based access control, and collaborating with backend and QA teams to ship production-ready features.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {aboutInfo.map((data, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="neu-card p-5 rounded-2xl cursor-pointer"
                  >
                    <div className="text-[var(--accent)] text-3xl mb-3">
                      <data.icon />
                    </div>
                    <h3 className="text-theme-primary font-semibold mb-2">{data.title}</h3>
                    <p className="text-theme-secondary text-sm leading-relaxed">
                      {data.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
