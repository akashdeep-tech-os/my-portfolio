import Seo from "../seo/Seo";
import { aboutPageSchema, breadcrumbSchema } from "../seo/schema";
import SectionHeading from "../components/SectionHeading";
import About from "../components/About";
import Skills from "../components/Skills";
import { aboutInfo } from "../assets/assets";

const AboutPage = () => {
  return (
    <div>
      <Seo
        title="About Akash Deep — Python, AI & Full Stack Developer in New Delhi"
        description="Learn about Akash Deep, a Python & Full Stack Developer from New Delhi with 1+ years of experience building web apps with React.js, FastAPI, Django and AI."
        path="/about"
        type="profile"
        keywords="About Akash Deep, Akash Deep Developer, Python Developer New Delhi, Full Stack Developer India, AI Engineer, Computer Vision Engineer"
        schema={[
          aboutPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <SectionHeading
        pill="About Me"
        title="About"
        highlight="Akash Deep"
        subtitle="Python & Full Stack Developer from New Delhi, India — building web applications, AI systems and computer vision solutions."
      />
      <About hideHeader />
      <div className="bg-theme-primary pb-4">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {aboutInfo.map((data, index) => (
              <div
                key={index}
                className="neu-card p-5 rounded-2xl text-center"
              >
                <div className={`text-3xl mb-3 ${data.color}`}>
                  <data.icon />
                </div>
                <h3 className="text-theme-primary font-semibold mb-2">
                  {data.title}
                </h3>
                <p className="text-theme-secondary text-sm leading-relaxed">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default AboutPage;
