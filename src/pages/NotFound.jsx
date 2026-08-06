import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import Seo from "../seo/Seo";
import { breadcrumbSchema } from "../seo/schema";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-primary pt-24">
      <Seo
        title="404 — Page Not Found"
        description="The page you are looking for could not be found. Return to the Akash Deep portfolio homepage."
        path="/404"
        noindex
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "404 — Page Not Found", path: "/404" },
        ])}
      />
      <div className="container mx-auto px-6 text-center">
        <p className="text-8xl md:text-9xl font-bold gradient-text mb-6">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-theme-secondary text-lg max-w-xl mx-auto mb-10">
          The page you are looking for doesn't exist, may have been moved, or
          the link is broken. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-cta px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-3"
          >
            <FaHome size={16} />
            Back to Home
          </Link>
          <Link
            to="/projects"
            className="neu-button px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-3 text-theme-secondary hover:text-[var(--accent)] transition-colors"
          >
            <FaArrowLeft size={14} />
            Browse Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
