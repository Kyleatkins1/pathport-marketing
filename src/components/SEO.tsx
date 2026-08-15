import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'profile' | 'article';
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

export const SEO: React.FC<SEOProps> = ({
  title = "PathPort — Your Living Professional Record & Evidence Platform",
  description = "Your career is bigger than a résumé. PathPort is your persistent, portable professional record. Turn unlisted projects into rich case studies, build tailored portfolios, and track CE renewals.",
  image = "https://getpathport.com/logo.png",
  type = "website",
  jsonLd
}) => {
  const location = useLocation();
  const canonicalUrl = `https://getpathport.com${location.pathname}`;

  useEffect(() => {
    // 1. Set Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);

    // 3. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'PathPort');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data
    const defaultJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://getpathport.com/#organization",
          "name": "PathPort",
          "url": "https://getpathport.com",
          "logo": "https://getpathport.com/logo.png",
          "sameAs": ["https://twitter.com/PathPortApp", "https://linkedin.com/company/pathport"]
        },
        {
          "@type": "WebSite",
          "@id": "https://getpathport.com/#website",
          "url": "https://getpathport.com",
          "name": "PathPort",
          "publisher": { "@id": "https://getpathport.com/#organization" }
        },
        {
          "@type": "SoftwareApplication",
          "name": "PathPort Living Professional Record",
          "operatingSystem": "Web, iOS, Android",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      ]
    };

    const structuredData = jsonLd || defaultJsonLd;
    let jsonLdScript = document.getElementById('json-ld-seo');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'json-ld-seo';
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);

  }, [title, description, image, type, canonicalUrl, jsonLd]);

  return null;
};

export default SEO;
