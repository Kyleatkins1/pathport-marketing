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
      title: "Healthcare & Medical Specialty Boards (AACN, IBSC, BCEN, NCCPA)",
      description: "Automate subspecialty topic minimums (e.g. 10 hours Trauma, 8 hours Pediatric Airway, 6 hours Pharmacology) and streamline candidate recertification review queues.",
      highlight: "Multi-topic audit engines eliminate manual PDF certificate and transcript verification."
    },
    technical: {
      title: "Engineering, Cloud & Professional Bodies (PMI, NCEES, CompTIA)",
      description: "Define multi-year continuing professional development rules (e.g. 60 PDUs, 30 CEUs, Ethics modules). Issue tamper-proof cryptographic assertions.",
      highlight: "Object-referenced evidence verification directly from candidate repositories."
    },
    ce_provider: {
      title: "Continuing Education Providers & Accreditation Councils (ANCC, CAPCE)",
      description: "Provide accredited course completions that auto-sync directly into candidate passports with provider-reported cryptographic provenance.",
      highlight: "Instant CE delivery to thousands of active clinicians with 0 manual certificates."
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="PathPort Certify — Modern Credential Governance & Reviewer Workspace"
        description="Automate topic audit math, reviewer submission queues, and authoritative provenance badges for healthcare, engineering, and specialty certification programs."
      />
      <Navbar />

      <main className="py-16 md:py-24 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <Award className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              SPECIALTY BOARDS & ISSUING AUTHORITIES
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Modern Credential Governance & Proof.{' '}
              <span className="text-teal-800 dark:text-teal-400 block sm:inline-block">Review Queues & Topic Rules.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Empower your certificants to prove the work behind the credential. PathPort Certify provides specialty boards automated topic audit math, reviewer queues, and authoritative provenance.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Certify Design Partner Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Across All Issuers: Healthcare Boards, Technical Bodies & CE Providers */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Built for Every Credentialing Standard
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Automated multi-topic rules and reviewer submission queues tailored to your board requirements.
              </p>
            </div>

            {/* Issuer Switcher */}
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                onClick={() => setSelectedIssuerType('healthcare')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
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
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
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
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedIssuerType === 'ce_provider'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Accredited CE Providers</span>
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

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before PathPort */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
              <h3 className="text-lg font-display font-bold text-slate-700 dark:text-slate-200">
                Legacy Board & Renewal Challenges
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Disjointed Portals:</strong> Certificants juggle separate state board portals, specialty board log-ins, and third-party CEU repositories.</span>
                </li>
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
                  <span><strong>Automated Topic Rules Engine:</strong> Define multi-topic rules (e.g. 10 hrs Trauma, 8 hrs Airway) with deterministic verification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Reviewer Queues & Fast Approvals:</strong> Streamlined reviewer workflow with inline evidence inspection and audit trails.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Authoritative Provenance:</strong> Issue cryptographically backed Issuer-Verified badges with live proof links.</span>
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
                  Intelligent Topic Audits & Automated Candidate Review
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Eliminate thousands of reviewer hours. PathPort Certify automatically parses submitted continuing education transcripts, categorizes topic contact hours against board regulations, and flags deficiencies before formal reviewer submission.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Compass className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Deterministic Topic Parsing</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Evaluates submitted courses against accredited topic categories to prevent accidental over-counting.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <TrendingUp className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Review Queue Acceleration</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Pre-screens 100% completed applications so board reviewers only inspect validated submissions.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Award className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Cryptographic Issuer Badges</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Instantly issue Issuer-Verified provenance badges that third-party employers can trust in one click.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Built for scale: Supports thousands of concurrent candidate renewals across global jurisdictions.
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

          {/* Bottom CTA Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-4">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Elevate your certificant experience.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Join leading healthcare, emergency services, and engineering boards in shaping modern credential governance.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Request Issuing Authority Briefing
              </button>
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
