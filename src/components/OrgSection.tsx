import React, { useState } from 'react';
import { Building2, Award, Users, Lock, Activity, ShieldCheck } from 'lucide-react';
import { BetaRegistrationModal } from './BetaRegistrationModal';

export const OrgSection: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'teams' | 'certify'>('teams');
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>THE PATHPORT ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            One Living Record. Connected Workspaces.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            PathPort bridges individuals with employers and issuing authorities through scoped, consent-mediated access without duplicating data.
          </p>

          {/* Toggle Pills */}
          <div className="flex justify-center gap-2.5 pt-2">
            <button
              onClick={() => setActiveSegment('teams')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-2 border ${
                activeSegment === 'teams'
                  ? 'bg-teal-800 text-white border-teal-800 shadow-xs scale-[1.02]'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>For Employers (PathPort Teams)</span>
            </button>

            <button
              onClick={() => setActiveSegment('certify')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-2 border ${
                activeSegment === 'certify'
                  ? 'bg-teal-800 text-white border-teal-800 shadow-xs scale-[1.02]'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>For Certification Bodies (PathPort Certify)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Showcase Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          {activeSegment === 'teams' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200 text-xs font-semibold">
                  <span>PathPort Teams</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                  Workforce Credential Compliance with Privacy Firewalls
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Know exactly what your staff needs to remain legally deployable without invading employee privacy. Employers see only the credentials and compliance status required for each worker's role.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <Activity className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">30 / 60 / 90-Day Expiration Radar</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Proactive alerts before clinicians or engineers reach renewal deficiency.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <Lock className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">Scoped Consent Scopes</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Offboarding an employee immediately revokes employer access while preserving the worker's record.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsBetaModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-colors"
                  >
                    Request Teams Design Partner Access
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-slate-900">Active Workforce Roster (Live View)</div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">Flight Crew Alpha (8 Paramedics)</div>
                    <div className="text-[11px] text-slate-500">100% ACLS / PALS / CCT Compliant</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">ICU Nursing Unit B (14 RNs)</div>
                    <div className="text-[11px] text-amber-600 font-semibold">1 Renewal Due in 28 Days</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-semibold">
                  <span>PathPort Certify</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                  Authoritative Credential Governance & Review
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Provide your certificants with a modern submission and recertification experience. Review submitted evidence, verify topic compliance, and manage multi-year renewal cycles.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <Award className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">Automated Topic Auditing</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Instantly check submitted courses against program rules.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <ShieldCheck className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">Issuer-Verified Provenance</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Authoritatively update candidate credentials with cryptographic proof.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsBetaModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-colors"
                  >
                    Request Certify Reviewer Demo
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-slate-900">Certify Reviewer Queue</div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">NRP Cycle #2024-8921</div>
                    <div className="text-[11px] text-slate-500">60/60 Hours • All Topics Satisfied</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-[10px]">
                    Ready
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">FP-C Cycle #2024-4102</div>
                    <div className="text-[11px] text-slate-500">Pending Reviewer Approval</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-[10px]">
                    In Queue
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        defaultAudience={activeSegment === 'teams' ? 'Employer / Workforce Compliance' : 'Certification Board / Issuer'}
        source="ecosystem_section"
      />
    </section>
  );
};

export default OrgSection;
