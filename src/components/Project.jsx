import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import MagneticButton from "./MagneticButton";

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

const Project = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="project"
      className="py-24 bg-theme-primary"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 neu-card text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <MagneticButton
            href="https://github.com/akashdeep-tech-os"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 neu-button text-[var(--accent)] font-semibold rounded-2xl group cursor-pointer"
          >
            <span>View All on GitHub</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </MagneticButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Project;
