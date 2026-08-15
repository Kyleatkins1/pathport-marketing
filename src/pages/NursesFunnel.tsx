import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { ArrowRight, ShieldCheck, Award, Clock, Briefcase } from 'lucide-react';

export const NursesFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              NURSING & HEALTHCARE PROFESSIONAL RECORD
            </span>

            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Nursing Career is Bigger Than a Shift Schedule.{' '}
              <span className="text-teal-800 block mt-1">Proof, Projects & CE Renewals.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Consolidate your state RN/NP licenses, board certifications, and mandatory CE contact hours. Turn clinical quality initiatives, preceptorships, and unit leadership into verified case studies and tailored portfolios.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Register for Nursing Beta Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Multi-Topic CEU Tracking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calculates mandatory state board requirements (Infection Control, Pharmacotherapeutics, Child Abuse) automatically so you never scramble before license renewal.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Clinical Quality Case Studies
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Document unit protocols, sepsis early-warning rollouts, and preceptor achievements in structured Challenge-Approach-Outcome case studies with evidence attachments.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Tailored Travel & Preceptor Views
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Create dedicated `/p/:slug` portfolio links for hospital credentialing committees, travel nurse agencies, or academic faculty applications.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-2xl font-display font-extrabold text-slate-900">
              Join Founding Nurses on the PathPort Beta
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
              Maintain your living clinical identity once. Present yourself for staff, travel, leadership, or academic roles with verified proof.
            </p>
            <div>
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-all"
              >
                <span>Register for Nursing Beta Access</span>
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
        defaultAudience="Nurse / Healthcare Professional"
        source="nurses_funnel"
      />
    </div>
  );
};

export default NursesFunnel;
