import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { Building2, BarChart3, ArrowRight, Lock, Activity } from 'lucide-react';

export const EnterpriseFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-900 text-xs font-semibold border border-indigo-200">
              <Building2 className="w-4 h-4 text-indigo-700" />
              PATHPORT TEAMS • WORKFORCE CREDENTIAL COMPLIANCE
            </span>

            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Workforce Compliance Without Privacy Violations.{' '}
              <span className="text-teal-800 block mt-1">Lapse Prevention & Scoped Access.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Eliminate spreadsheet chaos and license lapse fines. PathPort Teams provides clinical health systems, EMS agencies, and engineering firms a real-time compliance radar mediated by scoped employee consent.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Teams Design Partner Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                30 / 60 / 90-Day Expiration Radar
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated deficiency alerts notify managers and workers before mandatory state licenses or specialty credentials expire.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Strict Privacy Firewalls
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Employers only see role-assigned compliance status and required credentials. Personal case studies, unrelated licenses, and career goals remain private to the worker.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Accreditation Audit Export
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generate 1-click verified compliance packages for state health inspectors, Joint Commission, or CAMTS audits.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-2xl font-display font-extrabold text-slate-900">
              Join Our Workforce Design Partner Cohort
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
              Empower your staff to own their professional identity while automating your clinical and technical compliance governance.
            </p>
            <div>
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-all"
              >
                <span>Request Teams Design Partner Access</span>
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
        defaultAudience="Employer / Workforce Compliance"
        source="enterprise_funnel"
      />
    </div>
  );
};

export default EnterpriseFunnel;
