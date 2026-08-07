import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const replaceMeta = (html, attr, key, content) => {
  const escaped = escapeHtml(content);
  const re = new RegExp(`<meta ${attr}="${key}"[^>]*>`);
  return re.test(html)
    ? html.replace(re, `<meta ${attr}="${key}" content="${escaped}" />`)
    : html;
};

const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { render } = await server.ssrLoadModule("/src/prerender-entry.jsx");
  const schema = await server.ssrLoadModule("/src/seo/schema.js");
  const { projects } = await server.ssrLoadModule("/src/assets/assets.js");

  const homeCrumb = { name: "Home", path: "/" };
  const projectsCrumb = { name: "Projects", path: "/projects" };

  const routes = [
    {
      path: "/",
      file: "index.html",
      title: "Akash Deep | Python & Full Stack Developer, AI & Computer Vision Engineer",
      description:
        "Portfolio of Akash Deep, Python & Full Stack Developer from New Delhi, India. I build scalable web apps, REST APIs and AI/Computer Vision solutions with React.js, FastAPI, Django and OpenCV. Explore projects, skills and experience.",
      keywords:
        "Akash Deep, Akash Deep Portfolio, Python Developer New Delhi India, Full Stack Developer India, FastAPI Developer, Django Developer, React Developer, AI Engineer, Computer Vision Engineer, Machine Learning Engineer, Hire Python Developer India, Web Developer India, JavaScript Developer India",
      schema: () => [schema.homeSchema()],
    },
    {
      path: "/about",
      file: "about/index.html",
      title: "About Akash Deep — Python, AI & Full Stack Developer in New Delhi",
      description:
        "Learn about Akash Deep, a Python & Full Stack Developer from New Delhi with 1+ years of experience building web apps with React.js, FastAPI, Django and AI.",
      keywords:
        "About Akash Deep, Akash Deep Developer, Python Developer New Delhi, Full Stack Developer India, AI Engineer, Computer Vision Engineer, Hire Python Developer New Delhi",
      schema: () => [
        schema.aboutPageSchema(),
        schema.breadcrumbSchema([homeCrumb, { name: "About", path: "/about" }]),
      ],
    },
    {
      path: "/projects",
      file: "projects/index.html",
      title: "Projects — Akash Deep | Python, React, AI & Computer Vision Work",
      description:
        "Software projects by Akash Deep: a Django blogging system, pathology management system, Python voice assistant, AI image generator, real-time chat app and more.",
      keywords:
        "Akash Deep Projects, Python Projects, React Projects, Django Blogging System, Pathology Management System, AI Voice Assistant, AI Image Generator, OpenCV Projects, Portfolio Projects India",
      schema: () => [
        schema.personSchema(),
        schema.collectionPageSchema(),
        schema.breadcrumbSchema([homeCrumb, projectsCrumb]),
      ],
    },
    {
      path: "/resume",
      file: "resume/index.html",
      title: "Resume — Akash Deep | Software Engineer, Python & React Developer",
      description:
        "Resume of Akash Deep, Software Developer at E-Vision India with experience in React.js, Spring Boot, Django, FastAPI, PostgreSQL and enterprise applications.",
      keywords:
        "Akash Deep Resume, Akash Deep CV, Software Developer New Delhi, Python Backend Developer, React Developer Experience, E-Vision India, Software Engineer Resume India",
      schema: () => [
        schema.personSchema(),
        schema.resumePageSchema(),
        schema.breadcrumbSchema([homeCrumb, { name: "Resume", path: "/resume" }]),
      ],
    },
    {
      path: "/contact",
      file: "contact/index.html",
      title: "Contact Akash Deep — Python, React & AI Developer in New Delhi",
      description:
        "Contact Akash Deep, Python & Full Stack Developer in New Delhi. Available for React, FastAPI, Django, AI and computer vision work. Response within 24 hours.",
      keywords:
        "Contact Akash Deep, Hire Python Developer India, Hire React Developer, Freelance Full Stack Developer, FastAPI Developer Contact, AI Engineer Hire New Delhi",
      schema: () => [
        schema.personSchema(),
        schema.contactPageSchema(),
        schema.breadcrumbSchema([homeCrumb, { name: "Contact", path: "/contact" }]),
      ],
    },
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      file: `projects/${project.slug}/index.html`,
      title: `${project.title} — ${project.tagline}`,
      description: project.longDescription.slice(0, 155),
      keywords: `Akash Deep, ${project.title}, ${project.tech.join(", ")}`,
      schema: () => [
        schema.personSchema(),
        schema.projectSchema(project),
        schema.breadcrumbSchema([
          homeCrumb,
          projectsCrumb,
          { name: project.title, path: `/projects/${project.slug}` },
        ]),
      ],
    })),
  ];

  const template = await readFile(join(dist, "index.html"), "utf-8");

  for (const route of routes) {
    const appHtml = render(route.path);
    const schemaHtml = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": Array.isArray(route.schema())
        ? route.schema()
        : [route.schema()],
    });

    let html = template;
    html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`);
    html = replaceMeta(html, "name", "description", route.description);
    html = replaceMeta(html, "name", "keywords", route.keywords);
    html = html.replace(
      /<link rel="canonical" href="[^"]*"[^>]*>/,
      `<link rel="canonical" href="https://akashdeepdev.netlify.app${route.path}${route.path === "/" ? "" : "/"}" />`
    );
    html = replaceMeta(html, "property", "og:url", `https://akashdeepdev.netlify.app${route.path}`);
    html = replaceMeta(html, "property", "og:title", route.title);
    html = replaceMeta(html, "property", "og:description", route.description);
    html = replaceMeta(html, "name", "twitter:url", `https://akashdeepdev.netlify.app${route.path}`);
    html = replaceMeta(html, "name", "twitter:title", route.title);
    html = replaceMeta(html, "name", "twitter:description", route.description);
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${schemaHtml}</script>`
    );
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    const outFile = join(dist, route.file);
    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, html);
    console.log(`Prerendered ${route.path} -> ${route.file}`);
  }

  console.log(`\nDone. ${routes.length} routes prerendered into ${dist}`);
} catch (error) {
  console.error("Prerender failed:", error);
  process.exitCode = 1;
} finally {
  await server.close();
}
