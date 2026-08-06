import { motion } from "framer-motion";
import Seo from "../seo/Seo";
import { collectionPageSchema, breadcrumbSchema, personSchema } from "../seo/schema";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/assets";
import FAQ from "../components/FAQ";
import { faqSchema } from "../seo/schema";

const projectFaq = [
  {
    q: "What technologies does Akash Deep use to build projects?",
    a: "Akash Deep builds full-stack applications with Python (FastAPI, Django), React.js, Node.js, PostgreSQL, MongoDB and Tailwind CSS. He also works with AI and Computer Vision tools including OpenCV, OpenAI APIs and machine learning libraries.",
  },
  {
    q: "Does Akash Deep build AI and Machine Learning projects?",
    a: "Yes. Akash Deep has built AI-powered projects such as a Python voice assistant and an AI image generator using OpenAI's DALL·E model, and works with computer vision techniques through OpenCV for real-time analytics.",
  },
  {
    q: "Can I hire Akash Deep for a React or Python development project?",
    a: "Yes, Akash Deep is available for freelance and full-time opportunities as a React developer, Python developer, FastAPI developer, or full stack engineer. Visit the Contact page to discuss your project.",
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <Seo
        title="Projects — Akash Deep | Python, React, AI & Computer Vision Work"
        description="Software projects by Akash Deep: a Django blogging system, pathology management system, Python voice assistant, AI image generator, real-time chat app and more."
        path="/projects"
        type="website"
        keywords="Akash Deep Projects, Python Projects, React Projects, Django Blogging System, Pathology Management System, AI Voice Assistant, AI Image Generator, OpenCV Projects, Portfolio Projects India"
        schema={[
          personSchema(),
          collectionPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
          faqSchema(projectFaq),
        ]}
      />
      <SectionHeading
        pill="Portfolio"
        title="My"
        highlight="Projects"
        subtitle="Full-stack web applications, AI systems and computer vision tools built by Akash Deep."
      />

      <section className="py-16 bg-theme-primary">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FAQ items={projectFaq} subtitle="Answers about the projects and technologies featured in this portfolio." />
    </div>
  );
};

export default ProjectsPage;
