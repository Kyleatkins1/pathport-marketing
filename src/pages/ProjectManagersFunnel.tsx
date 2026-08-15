import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { ArrowRight, Award, Clock, Briefcase } from 'lucide-react';

export const ProjectManagersFunnel: React.FC = () => {
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
              PROJECT LEADERSHIP & TECHNICAL RECORD
            </span>

            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Show the Real Work Behind the PMP®.{' '}
              <span className="text-teal-800 block mt-1">Outcomes, Deliverables & PDU Cycles.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Consolidate PMP®, PMI-ACP®, Scrum, and cloud engineering certifications. Document major software deliveries, enterprise transformations, and team turnarounds in structured case studies with measurable ROI.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Register for PM Beta Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Delivery & ROI Case Studies
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Capture the complexity a résumé drops: Stakeholder Alignment, Budget Constraints, Agile Sprint Velocity, and Tangible Business Impact.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                PMI CCR 60 PDU Tracker
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Track your 3-year CCR cycle across Talent Triangle categories: Ways of Working, Power Skills, and Business Acumen.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Tailored Executive Portfolios
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generate clean, verified portfolio links for hiring managers and clients demonstrating past project governance and architectural leadership.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-2xl font-display font-extrabold text-slate-900">
              Join Founding Program Managers on the PathPort Beta
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
              Maintain your career evidence once. Showcase verified delivery track records to recruiters and executives.
            </p>
            <div>
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-all"
              >
                <span>Register for PM Beta Access</span>
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
        defaultAudience="Project Manager / PMO"
        source="project_managers_funnel"
      />
    </div>
  );
};

export default ProjectManagersFunnel;
