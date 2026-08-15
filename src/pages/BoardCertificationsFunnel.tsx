import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { Award, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BoardCertificationsFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <Award className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              SPECIALTY BOARDS & ISSUING AUTHORITIES
            </span>

            <h1 className="text-4xl sm:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Modern Credential Governance & Certificant Portfolios.{' '}
              <span className="text-teal-800 dark:text-teal-400 block mt-1">Review Queues, Topic Rules & Cryptographic Proof.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Empower your certificants to prove the work behind the credential. PathPort Certify provides specialty boards and issuing programs automated topic audit math, reviewer submission queues, and authoritative provenance.
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
