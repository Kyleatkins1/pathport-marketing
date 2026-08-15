import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const hashAliases: Record<string, string> = {
  'portfolio': 'portfolios',
  'portfolios': 'portfolios',
  'showcase': 'portfolios',
  'pathai': 'path-ai',
  'path-ai': 'path-ai',
  'ai': 'path-ai',
  'advisor': 'path-ai',
  'features': 'features',
  'feature': 'features',
  'why': 'why',
  'pricing': 'pricing',
  'price': 'pricing',
  'plans': 'pricing',
  'case-studies': 'case-studies',
  'casestudies': 'case-studies',
  'renewals': 'renewals',
  'renewal': 'renewals',
  'ecosystem': 'ecosystem',
  'teams': 'ecosystem',
  'faq': 'faq'
};

export const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const rawHash = hash.replace('#', '').toLowerCase();
      const targetId = hashAliases[rawHash] || rawHash;

      // Small timeout allows DOM to fully mount on route changes
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);

      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
