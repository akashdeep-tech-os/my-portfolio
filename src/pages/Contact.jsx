import Seo from "../seo/Seo";
import {
  contactPageSchema,
  breadcrumbSchema,
  personSchema,
  faqSchema,
} from "../seo/schema";
import SectionHeading from "../components/SectionHeading";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";

const contactFaq = [
  {
    q: "How can I hire Akash Deep for a Python or React project?",
    a: "Use the contact form on this page or email akashdeep58533@gmail.com directly. Akash typically responds within 24 hours and is available for freelance projects, full-time roles, and remote work.",
  },
  {
    q: "Is Akash Deep available for FastAPI and Django backend development?",
    a: "Yes. Akash Deep specialises in Python backend development with FastAPI and Django, including RESTful API design, JWT authentication, PostgreSQL and MongoDB database management, and Swagger/OpenAPI documentation.",
  },
  {
    q: "Does Akash Deep work on AI and Computer Vision projects?",
    a: "Yes, Akash Deep builds AI-powered applications using OpenCV, machine learning libraries, OpenAI APIs and Python. He has experience with voice assistants, image generation, and real-time video analytics in enterprise environments.",
  },
  {
    q: "Where is Akash Deep based and does he work remotely?",
    a: "Akash Deep is based in New Delhi, India (UTC+5:30) and is open to remote, hybrid, and on-site opportunities across India and internationally.",
  },
];

const ContactPage = () => {
  return (
    <div>
      <Seo
        title="Contact Akash Deep — Python, React & AI Developer in New Delhi"
        description="Contact Akash Deep, Python & Full Stack Developer in New Delhi. Available for React, FastAPI, Django, AI and computer vision work. Response within 24 hours."
        path="/contact"
        type="website"
        keywords="Contact Akash Deep, Hire Python Developer India, Hire React Developer, Freelance Full Stack Developer, FastAPI Developer Contact, AI Engineer Hire New Delhi"
        schema={[
          personSchema(),
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqSchema(contactFaq),
        ]}
      />
      <SectionHeading
        pill="Get In Touch"
        title="Let's"
        highlight="Connect"
        subtitle="Have a project in mind or want to collaborate? Akash typically responds within 24 hours."
      />
      <Contact hideHeader />
      <FAQ
        items={contactFaq}
        subtitle="Quick answers before you reach out."
      />
    </div>
  );
};

export default ContactPage;
