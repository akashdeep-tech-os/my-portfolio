import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Seo from "../seo/Seo";
import { projectSchema, breadcrumbSchema, personSchema } from "../seo/schema";
import { projects } from "../assets/assets";
import ProjectCard from "../components/ProjectCard";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-primary pt-32 pb-16">
        <Seo
          title="Project Not Found"
          description="The requested project could not be found."
          path="/projects"
          noindex
          schema={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ])}
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-theme-primary mb-4">
            Project not found
          </h1>
          <p className="text-theme-secondary mb-8">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="btn-cta px-8 py-4 rounded-2xl inline-flex items-center gap-3"
          >
            <FaArrowLeft size={14} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const related = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="bg-theme-primary">
      <Seo
        title={`${project.title} — ${project.tagline}`}
        description={project.longDescription.slice(0, 155)}
        path={`/projects/${project.slug}`}
        type="article"
        keywords={`Akash Deep, ${project.title}, ${project.tech.join(", ")}`}
        publishedTime={project.datePublished}
        schema={[
          personSchema(),
          projectSchema(project),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />

      <header className="pt-32 pb-8 bg-theme-primary">
        <div className="container mx-auto px-6 max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-theme-secondary">
              <li>
                <Link to="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/projects" className="hover:text-[var(--accent)] transition-colors">
                  Projects
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[var(--accent)] font-medium">
                {project.title}
              </li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 neu-card text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
              Portfolio Project
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-theme-primary mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-theme-secondary max-w-3xl">
              {project.longDescription}
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-12 bg-theme-primary" aria-label="Project overview">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl neu-card h-72 md:h-96">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-theme-primary mb-4">
                About this project
              </h2>
              <p className="text-theme-secondary leading-relaxed mb-6">
                {project.longDescription}
              </p>
              <p className="text-theme-secondary leading-relaxed">
                Built by <Link to="/about" className="text-[var(--accent)] hover:underline">Akash Deep</Link>, a Python & Full Stack Developer from New Delhi, India, this project demonstrates practical experience with {project.tech.slice(0, 3).join(", ")} and production-focused software engineering practices.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta px-6 py-3.5 rounded-xl inline-flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                )}
                {project.code && project.code !== "#" && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-button px-6 py-3.5 rounded-xl inline-flex items-center gap-2 text-theme-secondary hover:text-[var(--accent)] transition-colors"
                  >
                    <FaGithub size={16} />
                    View Source Code
                  </a>
                )}
                <Link
                  to="/projects"
                  className="px-6 py-3.5 rounded-xl inline-flex items-center gap-2 text-theme-secondary hover:text-[var(--accent)] transition-colors"
                >
                  <FaArrowLeft size={14} />
                  All Projects
                </Link>
              </div>
            </div>

            <aside aria-label="Project details">
              <h2 className="text-2xl font-bold text-theme-primary mb-4">
                Tech Stack
              </h2>
              <div className="neu-card p-6 rounded-2xl">
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1.5 neu-pressed text-theme-secondary text-xs font-medium rounded-lg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 bg-theme-secondary" aria-label="More projects by Akash Deep">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-theme-primary">
                More <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-theme-secondary mt-2">
                Other software projects built by Akash Deep
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
            >
              View all projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {related.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProjectDetail;
