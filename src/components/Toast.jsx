import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaCopy } from "react-icons/fa";

const Toast = ({ message, visible, onClose }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ type: "spring", duration: 0.4 }}
        onAnimationComplete={() => setTimeout(onClose, 2000)}
        className="fixed bottom-24 right-8 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl gradient-primary-r text-white shadow-accent-lg cursor-pointer"
        onClick={onClose}
        role="status"
        aria-live="polite"
      >
        <FaCheck size={14} />
        <span className="text-sm font-medium">{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Toast;
