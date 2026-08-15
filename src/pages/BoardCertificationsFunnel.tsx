import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { Award, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BoardCertificationsFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <Award className="w-4 h-4 text-emerald-700" />
              SPECIALTY BOARDS & ISSUING AUTHORITIES
            </span>

            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Modern Credential Governance & Certificant Portfolios.{' '}
              <span className="text-teal-800 block mt-1">Review Queues, Topic Rules & Cryptographic Proof.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Empower your certificants to prove the work behind the credential. PathPort Certify provides specialty boards and issuing programs automated topic audit math, reviewer submission queues, and authoritative provenance.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Certify Design Partner Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before PathPort */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-lg font-display font-bold text-slate-700">
                Legacy Board & Renewal Challenges
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-600">
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
                  <span><strong>Static Badge Graphics:</strong> Simple digital badges that fail to link the certificant's real-world case studies or clinical evidence.</span>
                </li>
              </ul>
            </div>

            {/* PathPort Solution */}
            <div className="bg-white rounded-3xl p-8 border-2 border-teal-800 shadow-md space-y-5">
              <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-800" />
                <span>The PathPort Living Standard</span>
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                  <span><strong>Automated Topic Rules Engine:</strong> Deterministic calculation engine verifies complex category requirements in milliseconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                  <span><strong>Reviewer Submission Queues:</strong> Streamlined staff workflows for approving CE submissions and issuing recertification cycles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                  <span><strong>Issuer-Verified Provenance:</strong> Authoritative cryptographic verification that employers and the public can verify instantly.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-2xl font-display font-extrabold text-slate-900">
              Transform Your Certification Program
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
              Join leading issuing authorities partnering with PathPort to modernize continuing education and certificant portfolios.
            </p>
            <div>
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-all"
              >
                <span>Request Certify Design Partner Access</span>
                <ArrowRight className="w-4 h-4" />
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
