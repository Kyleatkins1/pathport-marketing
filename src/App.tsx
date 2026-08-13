import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteroperabilityRibbon } from './components/InteroperabilityRibbon';
import { FeaturePillars } from './components/FeaturePillars';
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

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <InteroperabilityRibbon />
      <FeaturePillars />
      <PortfolioShowcase />
      <OrgSection />
      <FAQ />
      <Pricing />
    </main>
    <Footer />
  </>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-slate-100 selection:bg-teal-500/30 selection:text-teal-300">
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
  );
};

export default App;
