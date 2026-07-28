import { motion } from "framer-motion";

const TextReveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    className={className}
  >
    {typeof children === "string" ? (
      <h2 className="inline-block">
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + i * 0.03, ease: "easeOut" }}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
    ) : (
      children
    )}
  </motion.div>
);

export default TextReveal;
