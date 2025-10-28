import { Helmet } from "react-helmet-async";

function SEO({
  title = "Banjo Yinka - Fullstack Web Developer",
  description = "Fullstack web developer passionate about creating beautiful, functional web applications. Specializing in React, Node.js, and modern web technologies.",
  keywords = "web developer, fullstack developer, react developer, javascript developer, portfolio",
  ogImage = "/og-image.jpg",
  url = "https://yourportfolio.com", // Update this when you deploy!
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Banjo Yinka" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
    </Helmet>
  );
}

export default SEO;
