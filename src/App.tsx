import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteroperabilityRibbon } from './components/InteroperabilityRibbon';
import { FeaturePillars } from './components/FeaturePillars';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { OrgSection } from './components/OrgSection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100 selection:bg-teal-500/30 selection:text-teal-300">
      <Navbar />
      <main>
        <Hero />
        <InteroperabilityRibbon />
        <FeaturePillars />
        <PortfolioShowcase />
        <OrgSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
