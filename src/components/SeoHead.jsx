import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoHead = ({ title, description, keywords, url, schema }) => {
  const siteTitle = "NashTech | Premium Software Development Services";
  const defaultDescription = "NashTech provides enterprise-grade software development, AI integration, and SaaS solutions. We build scalable digital products that drive business growth.";
  const fullTitle = title ? `${title} | NashTech` : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://www.nashtech.dev"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content="https://www.nashtech.dev/logo.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || "https://www.nashtech.dev"} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content="https://www.nashtech.dev/logo.png" />

      <link rel="canonical" href={url || "https://www.nashtech.dev"} />

      {/* Structural Data / JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHead;
