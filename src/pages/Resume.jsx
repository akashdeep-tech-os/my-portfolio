import { FaDownload, FaFileAlt } from "react-icons/fa";
import Seo from "../seo/Seo";
import { resumePageSchema, breadcrumbSchema, personSchema } from "../seo/schema";
import SectionHeading from "../components/SectionHeading";
import Work from "../components/Work";
import Skills from "../components/Skills";

const ResumePage = () => {
  return (
    <div>
      <Seo
        title="Resume — Akash Deep | Software Engineer, Python & React Developer"
        description="Resume of Akash Deep, Software Developer at E-Vision India with experience in React.js, Spring Boot, Django, FastAPI, PostgreSQL and enterprise applications."
        path="/resume"
        type="profile"
        keywords="Akash Deep Resume, Akash Deep CV, Software Developer New Delhi, Python Backend Developer, React Developer Experience, E-Vision India, Software Engineer Resume India"
        schema={[
          personSchema(),
          resumePageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resume", path: "/resume" },
          ]),
        ]}
      />
      <SectionHeading
        pill="Resume & Experience"
        title="My Professional"
        highlight="Journey"
        subtitle="1+ years of software engineering experience building enterprise applications and AI-powered solutions."
      />

      <section className="py-8 bg-theme-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto neu-card p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 neu-pressed rounded-2xl flex items-center justify-center text-[var(--accent)]">
                <FaFileAlt size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-theme-primary">
                  Download Resume
                </h2>
                <p className="text-theme-secondary text-sm mt-1">
                  PDF version of the complete resume of Akash Deep
                </p>
              </div>
            </div>
            <a
              href="/AKASH_DEEP.pdf"
              download="AKASH_DEEP_Resume.pdf"
              className="btn-cta px-6 py-3.5 rounded-xl inline-flex items-center gap-2"
            >
              <FaDownload size={14} />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <Work hideHeader />
      <Skills />
    </div>
  );
};

export default ResumePage;
