import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useRef } from "react";

const ModalContent = ({ skill, onClose }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
    >
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="neu-card p-8 rounded-3xl max-w-lg w-full relative focus:outline-none"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 neu-pressed rounded-xl flex items-center justify-center text-theme-secondary hover:text-[var(--accent)] transition-colors"
          aria-label="Close modal"
        >
          <FaXmark size={18} />
        </button>

        <div className="w-16 h-16 neu-pressed rounded-2xl flex items-center justify-center text-[var(--accent)] mb-5">
          <skill.icon className="w-8 h-8" />
        </div>

        <h3 id="skill-modal-title" className="text-2xl font-bold text-theme-primary mb-3">
          {skill.title}
        </h3>

        <p className="text-theme-secondary leading-relaxed mb-6">
          {skill.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-theme-primary mb-3 uppercase tracking-wider">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {skill.tags.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 neu-pressed text-theme-secondary text-sm font-medium rounded-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="neu-pressed rounded-2xl p-5">
          <h4 className="text-sm font-semibold text-theme-primary mb-2 uppercase tracking-wider">Proficiency</h4>
          <div className="w-full h-2 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full gradient-primary-r"
            />
          </div>
          <p className="text-theme-secondary text-xs mt-2">Advanced</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillModal = ({ skill, onClose }) => (
  <AnimatePresence>
    {skill && <ModalContent skill={skill} onClose={onClose} />}
  </AnimatePresence>
);

export default SkillModal;
