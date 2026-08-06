import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MagneticButton = ({ children, className = "", whileHover, whileTap, to, href, ...props }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const motionProps = {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: handleLeave,
    animate: { x: pos.x, y: pos.y },
    whileHover,
    whileTap,
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    className,
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className="block" {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.a href={href} {...motionProps} {...props}>
      {children}
    </motion.a>
  );
};

export default MagneticButton;
