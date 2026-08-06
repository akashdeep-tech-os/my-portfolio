import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ = ({ items, title = "Frequently Asked Questions", subtitle }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-theme-secondary" aria-label={title}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 neu-card text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={index} className="neu-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-theme-primary">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[var(--accent)] shrink-0"
                    aria-hidden="true"
                  >
                    <FaChevronDown size={14} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-theme-secondary leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
