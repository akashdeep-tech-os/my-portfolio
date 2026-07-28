import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";
import SkillModal from "./SkillModal";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <motion.section
        id="skills"
        className="py-24 bg-theme-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 neu-card text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
              My <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.article
                key={skill.title + index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neu-card p-6 rounded-3xl cursor-pointer group"
                tabIndex={0}
                aria-labelledby={`skill-${index}-title`}
                onKeyDown={(e) => { if (e.key === "Enter") setSelectedSkill(skill); }}
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="w-14 h-14 neu-pressed rounded-2xl flex items-center justify-center text-[var(--accent)] mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <skill.icon className="w-7 h-7" aria-hidden />
                </motion.div>

                <h3
                  id={`skill-${index}-title`}
                  className="text-xl font-semibold text-theme-primary mb-2"
                >
                  {skill.title}
                </h3>
                <p className="text-theme-secondary text-sm mb-4 leading-relaxed">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.tags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 neu-pressed text-theme-secondary text-xs font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedSkill(skill)}
                  className="w-full py-3 neu-button text-[var(--accent)] font-medium rounded-xl group-hover:gradient-primary-r-full group-hover:text-white transition-all duration-300"
                  aria-label={`Learn more about ${skill.title}`}
                >
                  Learn More
                </button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </>
  );
};

export default Skills;
