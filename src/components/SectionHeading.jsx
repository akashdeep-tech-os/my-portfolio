import { motion } from "framer-motion";

const SectionHeading = ({ pill, title, highlight, subtitle }) => (
  <div className="pt-32 pb-4 bg-theme-primary">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-2 neu-card text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
          {pill}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-theme-primary mb-4">
          {title}{" "}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  </div>
);

export default SectionHeading;
