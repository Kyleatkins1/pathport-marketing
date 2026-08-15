import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteroperabilityRibbon } from './components/InteroperabilityRibbon';
import { FeaturePillars } from './components/FeaturePillars';
import { PathAISection } from './components/PathAISection';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { OrgSection } from './components/OrgSection';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

// Funnel Pages
import { NursesFunnel } from './pages/NursesFunnel';
import { ParamedicsFunnel } from './pages/ParamedicsFunnel';
import { ProjectManagersFunnel } from './pages/ProjectManagersFunnel';
import { StudentsFunnel } from './pages/StudentsFunnel';
import { EnterpriseFunnel } from './pages/EnterpriseFunnel';
import { BoardCertificationsFunnel } from './pages/BoardCertificationsFunnel';

// Legal & Security Pages
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { SecurityWhitepaper } from './pages/SecurityWhitepaper';
import { PublicPassportDemo } from './pages/PublicPassportDemo';

import { ScrollManager } from './components/ScrollManager';
import { SEO } from './components/SEO';

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://getpathport.com/#website",
      "url": "https://getpathport.com",
      "name": "PathPort",
      "description": "Your career is bigger than a résumé. PathPort is your portable professional record."
    },
    {
      "@type": "SoftwareApplication",
      "name": "PathPort Living Professional Record",
      "operatingSystem": "Web, iOS, Android",
      "applicationCategory": "BusinessApplication"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does PathPort differ from a PDF résumé or LinkedIn profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A résumé is a 1-page summary of claims. PathPort is your persistent, authoritative living record. It stores the full evidence behind your accomplishments — rich case studies, verified licenses, continuing education history, and dynamic portfolios tailored for each audience with zero data duplication."
          }
        },
        {
          "@type": "Question",
          "name": "What does 'Maintain Once, Present Many Ways' mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You never need to rebuild your portfolio from scratch. Your credentials, case studies, and experiences live in your core record once. When you create a tailored view for an executive role or client proposal, it references those items live without duplicate data."
          }
        },
        {
          "@type": "Question",
          "name": "How does PathPort protect individual privacy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PathPort is built on a strict privacy-by-default architecture. All new case studies, credentials, and portfolios default to private or unlisted. Employers only receive scoped, consent-mediated visibility into credentials strictly required for compliance."
          }
        }
      ]
    }
  ]
};

const HomePage: React.FC = () => (
  <>
    <SEO 
      title="PathPort — Your Living Professional Record"
      description="Your career is bigger than a résumé. PathPort is your portable professional record. Capture verified evidence, turn projects into rich case studies, present tailored portfolios, and guide your career growth."
      jsonLd={homeFaqJsonLd}
    />
    <Navbar />
    <main>
      <Hero />
      <InteroperabilityRibbon />
      <FeaturePillars />
      <PathAISection />
      <PortfolioShowcase />
      <OrgSection />
      <Pricing />
      <FAQ />
    </main>
    <Footer />
  </>
);

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-teal-500/20 selection:text-teal-900 transition-colors duration-150">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/for/nurses" element={<NursesFunnel />} />
            <Route path="/for/paramedics" element={<ParamedicsFunnel />} />
            <Route path="/for/project-managers" element={<ProjectManagersFunnel />} />
            <Route path="/for/students" element={<StudentsFunnel />} />
            <Route path="/for/enterprise" element={<EnterpriseFunnel />} />
            <Route path="/for/board-certifications" element={<BoardCertificationsFunnel />} />
            
            {/* Public Verified Passport Route */}
            <Route path="/p/:slug" element={<PublicPassportDemo />} />
            <Route path="/p" element={<PublicPassportDemo />} />
            
            {/* Legal & Security Routes */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/security" element={<SecurityWhitepaper />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
