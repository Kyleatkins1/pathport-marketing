import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  type?: 'website' | 'article' | 'profile' | string;
  ogImage?: string;
  image?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * In our Astro architecture, `<head>` meta tags, canonical links, OpenGraph tags,
 * and JSON-LD structured data are rendered deterministically at build time by `BaseLayout.astro`.
 * This component is retained as a no-op so shared React view components remain clean and never
 * inject duplicate or conflicting client-side JSON-LD blocks.
 */
export const SEO: React.FC<SEOProps> = () => null;
export default SEO;
