import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { 
  Award, ArrowRight, ShieldCheck, CheckCircle2, 
  Sparkles, Compass, TrendingUp, HeartPulse, Cpu, BookOpen 
} from 'lucide-react';

import { SEO } from '../components/SEO';

export const BoardCertificationsFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [selectedIssuerType, setSelectedIssuerType] = useState<'healthcare' | 'technical' | 'ce_provider'>('healthcare');

  const issuerDetails = {
    healthcare: {
      title: "Healthcare & Clinical Specialty Boards (e.g. Nursing, EMS & Medical Standards)",
      description: "Organize subspecialty topic minimums (e.g. Trauma, Airway, Pharmacology) and streamline candidate recertification review queues.",
      highlight: "Topic audit tools reduce manual transcript inspection (Example)."
    },
    technical: {
      title: "Engineering & Technical Certification Bodies (e.g. Program Management & Cloud)",
      description: "Define multi-year continuing professional development rules (e.g. PDUs, CEUs, Ethics modules) and issue verified digital credentials.",
      highlight: "Evidence verification directly linked to candidate portfolios (Example)."
    },
    ce_provider: {
      title: "Continuing Education Providers & Course Creators",
      description: "Provide accredited course completions that sync directly into candidate passports with provider-reported provenance.",
      highlight: "Direct CE delivery to active professionals without manual certificate friction (Example)."
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="PathPort Certify — Modern Credential Governance & Reviewer Workspace"
        description="Automate topic audit calculations, reviewer submission queues, and authoritative provenance badges for healthcare, engineering, and specialty certification programs."
      />
      <Navbar />

      <main className="py-16 md:py-24 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold border border-teal-200 dark:border-teal-800">
              <Award className="w-4 h-4 text-teal-700 dark:text-teal-400" />
              PATHPORT CERTIFY • CREDENTIAL ISSUANCE & REVENUE
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Modern Credential Governance.{' '}
              <span className="text-teal-800 dark:text-teal-400 block sm:inline-block">Audit Engines & Reviewer Hubs.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Automate continuing education requirement audits, streamline reviewer queues, and issue verified credentials with verifiable evidence.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Certify Platform Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Issuer Type Selector Matrix */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Built for Accrediting & Issuing Organizations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Select your program type to see how PathPort Certify accelerates renewals:
              </p>
            </div>

            {/* Issuer Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                onClick={() => setSelectedIssuerType('healthcare')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedIssuerType === 'healthcare'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Healthcare Specialty Boards</span>
              </button>

              <button
                onClick={() => setSelectedIssuerType('technical')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedIssuerType === 'technical'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Technical & Engineering Bodies</span>
              </button>

              <button
                onClick={() => setSelectedIssuerType('ce_provider')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedIssuerType === 'ce_provider'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>CE Providers & Academies</span>
              </button>
            </div>

            {/* Active Issuer Content Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {issuerDetails[selectedIssuerType].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {issuerDetails[selectedIssuerType].description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{issuerDetails[selectedIssuerType].highlight}</span>
              </div>
            </div>
          </div>

          {/* 3 Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Multi-Topic Requirement Auditing
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Configure topic rules (e.g. 10 hrs Trauma, 8 hrs Airway, 6 hrs Pharmacology). Our calculation engine categorizes candidate submissions automatically.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Reviewer Workspace & Queues
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Give your board reviewers clean queues with inline evidence viewing, audit history, and approval workflows.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Verifiable Credential Issuance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Issue tamper-proof digital badges linked directly to verified candidate evidence that employers trust in one click.
              </p>
            </div>
          </div>

          {/* Side by Side Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Legacy Model */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 space-y-5">
              <h3 className="text-lg font-display font-bold text-slate-700 dark:text-slate-300">
                Legacy Board Administration
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Manual CE Audit Logs:</strong> Staff reviewers manually inspect PDFs and spreadsheets to verify topic hour minimums.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Static Badges:</strong> Digital badges show dates and acronyms with no attached evidence of practical competency.</span>
                </li>
              </ul>
            </div>

            {/* With PathPort Certify */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-teal-800 dark:border-teal-500 shadow-md space-y-5">
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                <span>With PathPort Certify</span>
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Automated Topic Rules:</strong> Define multi-topic rules (e.g. 10 hrs Trauma, 8 hrs Airway) with instant category calculations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Reviewer Queues & Approvals:</strong> Streamlined reviewer workflow with inline evidence inspection and audit trails.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Authoritative Provenance:</strong> Issue Issuer-Verified badges with live proof links that third parties trust.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PathAI & Certify Governance Spotlight */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-teal-800/80 dark:border-teal-500 shadow-md space-y-8 transition-colors">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>PATHAI • CREDENTIAL GOVERNANCE SPOTLIGHT</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Intelligent Topic Audits & Streamlined Candidate Review
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Reduce administrative reviewer hours. PathPort Certify automatically parses submitted transcripts, categorizes topic contact hours against board requirements, and flags deficiencies before formal reviewer submission.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Compass className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Automated Topic Verification</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Evaluates submitted courses against accredited topic categories to prevent accidental over-counting.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <TrendingUp className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Review Queue Acceleration</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Pre-screens completed applications so board reviewers only inspect validated submissions.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Award className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Verified Digital Badges</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Instantly issue Issuer-Verified provenance badges that employers and third parties can trust.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Built for scale: Supports thousands of candidate renewals across jurisdictions.
                </div>
                <button
                  onClick={() => setIsBetaModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Request Issuing Authority Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        defaultAudience="Certification Board / Issuer"
        source="board_certifications_funnel"
      />
    </div>
  );
};

export default BoardCertificationsFunnel;
