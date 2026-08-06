import { motion } from "framer-motion";
import { workData } from "../assets/assets";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Work = ({ hideHeader = false }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="experience"
      className="py-24 bg-theme-secondary"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        {!hideHeader && (
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 neu-card text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
              My <span className="gradient-text">Professional Journey</span>
            </h2>
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              Building expertise through real-world experience
            </p>
          </motion.div>
        )}

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 gradient-primary-b" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {workData.map((data, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 timeline-dot"
                />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="neu-card p-6 rounded-3xl"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 neu-pressed rounded-2xl flex items-center justify-center text-[var(--accent)]">
                          <FaBriefcase size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-theme-primary">
                            {data.role}
                          </h3>
                          <p className="text-[var(--accent)] font-medium">
                            {data.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 neu-pressed rounded-full mb-4">
                      <FaCalendarAlt size={12} className="text-[var(--accent)]" />
                      <span className="text-theme-secondary text-sm font-medium">
                        {data.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-theme-secondary leading-relaxed text-sm">
                      {data.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
