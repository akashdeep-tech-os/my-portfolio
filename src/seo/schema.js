import { SITE } from "./siteConfig";

const base = () => ({
  "@context": "https://schema.org",
  "@id": `${SITE.basePath}/#person`,
  name: SITE.name,
  image: SITE.ogImage,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  jobTitle: "Full Stack Developer",
  description:
    "Python & Full Stack Developer from New Delhi, India specialising in React.js, FastAPI, Django, PostgreSQL, Machine Learning and Computer Vision.",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.location.city,
    addressRegion: "Delhi",
    addressCountry: SITE.location.country,
  },
  sameAs: Object.values(SITE.social),
  knowsAbout: [
    "Python",
    "React.js",
    "FastAPI",
    "Django",
    "OpenCV",
    "Computer Vision",
    "Machine Learning",
    "AI Engineering",
    "PostgreSQL",
    "MongoDB",
    "JavaScript",
    "Node.js",
    "Java",
    "Spring Boot",
    "Tailwind CSS",
    "REST APIs",
    "JWT Authentication",
    "Docker",
    "Git",
  ],
});

export const personSchema = () => ({
  ...base(),
  "@type": "Person",
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${SITE.basePath}/#website`,
  url: SITE.url,
  name: SITE.siteName,
  description: SITE.description,
  inLanguage: SITE.language,
  publisher: { "@id": `${SITE.basePath}/#person` },
});

export const profilePageSchema = () => ({
  "@type": "ProfilePage",
  "@id": `${SITE.basePath}/#profile`,
  url: SITE.url,
  name: `${SITE.name} — Python & Full Stack Developer Portfolio`,
  isPartOf: { "@id": `${SITE.basePath}/#website` },
  mainEntity: { "@id": `${SITE.basePath}/#person` },
  about: { "@id": `${SITE.basePath}/#person` },
});

export const breadcrumbSchema = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE.basePath}${item.path}`,
  })),
});

export const projectSchema = (project) => ({
  "@type": "CreativeWork",
  "@id": `${SITE.basePath}/projects/${project.slug}#creative-work`,
  name: `${project.title} — ${project.tagline || "Software Project by Akash Deep"}`,
  url: `${SITE.basePath}/projects/${project.slug}`,
  image: project.image,
  description: project.longDescription || project.description,
  genre: "Software",
  keywords: ["Akash Deep", project.title, ...project.tech],
  author: { "@id": `${SITE.basePath}/#person` },
  creator: { "@id": `${SITE.basePath}/#person` },
  inLanguage: SITE.language,
  ...(project.code && project.code !== "#" && { codeRepository: project.code }),
  ...(project.demo && project.demo !== "#" && { url: project.demo }),
  about: project.tech.map((tech) => ({ "@type": "Thing", name: tech })),
  datePublished: project.datePublished || "2024-01-01",
});

export const faqSchema = (questions) => ({
  "@type": "FAQPage",
  mainEntity: questions.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const contactPageSchema = () => ({
  "@type": "ContactPage",
  "@id": `${SITE.basePath}/contact#contact-page`,
  url: `${SITE.basePath}/contact`,
  name: `Contact ${SITE.name}`,
  isPartOf: { "@id": `${SITE.basePath}/#website` },
  mainEntity: { "@id": `${SITE.basePath}/#person` },
});

export const collectionPageSchema = () => ({
  "@type": "CollectionPage",
  "@id": `${SITE.basePath}/projects#collection`,
  url: `${SITE.basePath}/projects`,
  name: `Projects by ${SITE.name}`,
  isPartOf: { "@id": `${SITE.basePath}/#website` },
  mainEntity: { "@id": `${SITE.basePath}/#person` },
});

export const aboutPageSchema = () => ({
  "@type": "AboutPage",
  "@id": `${SITE.basePath}/about#about-page`,
  url: `${SITE.basePath}/about`,
  name: `About ${SITE.name}`,
  isPartOf: { "@id": `${SITE.basePath}/#website` },
  mainEntity: { "@id": `${SITE.basePath}/#person` },
});

export const resumePageSchema = () => ({
  "@type": "ProfilePage",
  "@id": `${SITE.basePath}/resume#resume-page`,
  url: `${SITE.basePath}/resume`,
  name: `${SITE.name} — Resume, Experience & Skills`,
  isPartOf: { "@id": `${SITE.basePath}/#website` },
  mainEntity: { "@id": `${SITE.basePath}/#person` },
});

export const homeSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [personSchema(), websiteSchema(), profilePageSchema()],
});
