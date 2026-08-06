import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaExpand } from "react-icons/fa";
import ImageLightbox from "./ImageLightbox";

const ProjectCard = ({ slug, title, description, image, alt, tech, demo, code }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const detailUrl = `/projects/${slug}`;

  return (
    <>
      <motion.article
        whileHover={{ y: -8 }}
        className="neu-card rounded-3xl overflow-hidden group h-full flex flex-col"
      >
        <div className="relative overflow-hidden h-56">
          <Link to={detailUrl} aria-label={`View details of the ${title} project`}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src={image}
              alt={alt || `${title} project built by Akash Deep`}
              loading="lazy"
              decoding="async"
              width={500}
              height={375}
              className="w-full h-56 object-cover"
            />
          </Link>

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

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-theme-primary mb-2">
            <Link
              to={detailUrl}
              className="group-hover:text-[var(--accent)] transition-colors duration-300"
            >
              {title}
            </Link>
          </h3>

          <p className="text-theme-secondary text-sm mb-4 leading-relaxed line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
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

          <Link
            to={detailUrl}
            className="mt-4 text-[var(--accent)] text-sm font-medium hover:underline inline-flex items-center gap-1"
            aria-label={`View ${title} project details`}
          >
            View Project Details
          </Link>
        </div>
      </motion.article>

      <ImageLightbox
        src={image}
        alt={alt || `${title} project built by Akash Deep`}
        onClose={() => setLightboxOpen(false)}
        visible={lightboxOpen}
      />
    </>
  );
};

export default ProjectCard;
