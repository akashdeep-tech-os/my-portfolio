import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaExpand } from "react-icons/fa";
import ImageLightbox from "./ImageLightbox";

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.article
        whileHover={{ y: -8 }}
        className="neu-card rounded-3xl overflow-hidden group cursor-pointer"
      >
        <div className="relative overflow-hidden h-56">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
            onClick={() => setLightboxOpen(true)}
          />

          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/30 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
            aria-label={`Enlarge ${title} image`}
          >
            <FaExpand size={12} />
          </button>

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/80 via-[var(--text-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {demo && demo !== "#" && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 gradient-primary-r text-white rounded-xl font-medium text-sm hover:shadow-accent transition-all duration-300"
              >
                <FaExternalLinkAlt size={12} />
                <span>Live Demo</span>
              </a>
            )}
            {code && code !== "#" && (
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 glass text-white rounded-xl font-medium text-sm hover:bg-white/30 transition-colors duration-300"
              >
                <FaGithub size={14} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-theme-primary mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-theme-secondary text-sm mb-4 leading-relaxed line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 4).map((item, index) => (
              <span
                key={index}
                className="px-3 py-1.5 neu-pressed text-theme-secondary text-xs font-medium rounded-lg"
              >
                {item}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="px-3 py-1.5 text-[var(--accent)] text-xs font-medium">
                +{tech.length - 4} more
              </span>
            )}
          </div>
        </div>
      </motion.article>

      <ImageLightbox
        src={image}
        alt={title}
        onClose={() => setLightboxOpen(false)}
        visible={lightboxOpen}
      />
    </>
  );
};

export default ProjectCard;
