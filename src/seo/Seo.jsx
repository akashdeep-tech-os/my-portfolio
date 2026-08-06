import { SITE } from "./siteConfig";

const upsertMeta = (attr, key, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const removeJsonLd = () => {
  document.querySelectorAll('script[data-seo="page"]').forEach((el) => el.remove());
};

const injectJsonLd = (schema) => {
  if (!schema) return;
  const scripts = Array.isArray(schema) ? schema : [schema];
  scripts.forEach((data) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "page");
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  });
};

const Seo = ({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  type = "website",
  keywords,
  noindex = false,
  schema,
  publishedTime,
  modifiedTime,
  author = SITE.name,
}) => {
  const url = `${SITE.basePath}${path}`;
  const fullTitle = title ? `${title} | Akash Deep` : SITE.title;

  document.title = fullTitle;
  upsertMeta("name", "description", description);
  upsertMeta("name", "keywords", keywords);
  upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  upsertLink("canonical", url);

  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:site_name", SITE.siteName);
  upsertMeta("property", "og:locale", SITE.locale);
  upsertMeta("property", "og:title", fullTitle);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:image:width", "1200");
  upsertMeta("property", "og:image:height", "630");
  upsertMeta("property", "og:image:type", "image/jpeg");

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:url", url);
  upsertMeta("name", "twitter:title", fullTitle);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);

  if (publishedTime) upsertMeta("name", "article:published_time", publishedTime);
  if (modifiedTime) upsertMeta("name", "article:modified_time", modifiedTime);
  if (type === "article") upsertMeta("name", "article:author", author);

  removeJsonLd();
  injectJsonLd(schema);

  return null;
};

export default Seo;
