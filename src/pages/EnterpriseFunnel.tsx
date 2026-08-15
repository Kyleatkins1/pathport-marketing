import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { 
  Building2, BarChart3, ArrowRight, Lock, Activity, 
  Sparkles, ShieldCheck, CheckCircle2, HeartPulse, Plane, Cpu 
} from 'lucide-react';

import { SEO } from '../components/SEO';

export const EnterpriseFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<'health' | 'ems' | 'defense'>('health');

  const industryDetails = {
    health: {
      title: "Health Systems, Hospital Networks & Clinics (Joint Commission, Magnet, CMS)",
      description: "Track physician credentialing, RN license compacts, BLS/ACLS/PALS expiration dates, and mandatory clinical competencies across thousands of clinical staff without invading off-duty privacy.",
      highlight: "Joint Commission & Magnet compliance radar with automated license lapse prevention."
    },
    ems: {
      title: "EMS Agencies, Air Medical & Critical Care Operators (CAMTS, FAA)",
      description: "Manage NREMT certifications, state paramedic cards, IBSC FP-C flight credentials, and FAA Part 135 flight crew clinical qualifications with live roster deficiency audits.",
      highlight: "100% CAMTS-ready regulatory audit reporting with zero spreadsheet reconciliation."
    },
    defense: {
      title: "Defense Contractors & Engineering Enterprises (CMMC, ISO 9001)",
      description: "Maintain verified workforce records for security clearances, Professional Engineer (PE) licenses, AWS/GovCloud certifications, and Scrum delivery credentials.",
      highlight: "Zero-knowledge scoped consent firewalls: offboarding instantly revokes employer access."
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="PathPort Teams — Workforce Compliance Radar, License Lapse Prevention & Privacy"
        description="Eliminate spreadsheet chaos and regulatory fines. Real-time workforce compliance radar for healthcare systems, aviation, and engineering enterprises."
      />
      <Navbar />

      <main className="py-16 md:py-24 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-300 text-xs font-semibold border border-indigo-200 dark:border-indigo-800">
              <Building2 className="w-4 h-4 text-indigo-700 dark:text-indigo-400" />
              PATHPORT TEAMS • WORKFORCE CREDENTIAL COMPLIANCE
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Workforce Compliance Without the Chaos.{' '}
              <span className="text-teal-800 dark:text-teal-400 block sm:inline-block">Lapse Radar, Audits & PathAI.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Eliminate spreadsheet chaos and license lapse fines. PathPort Teams provides clinical health systems, EMS agencies, and engineering firms a real-time compliance radar mediated by scoped employee consent.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Teams Design Partner Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Across All Industries: Health Systems, EMS Operators & Defense Engineering */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Engineered for High-Stakes Compliance Environments
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Tailored workflows for hospital systems, emergency flight operators, and defense contractors.
              </p>
            </div>

            {/* Industry Switcher */}
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                onClick={() => setSelectedIndustry('health')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedIndustry === 'health'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Health Systems & Clinics</span>
              </button>

              <button
                onClick={() => setSelectedIndustry('ems')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedIndustry === 'ems'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Plane className="w-3.5 h-3.5" />
                <span>EMS & Flight Transport Operators</span>
              </button>

              <button
                onClick={() => setSelectedIndustry('defense')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedIndustry === 'defense'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Defense & Engineering Firms</span>
              </button>
            </div>

            {/* Active Industry Content Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {industryDetails[selectedIndustry].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {industryDetails[selectedIndustry].description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{industryDetails[selectedIndustry].highlight}</span>
              </div>
            </div>
          </div>

          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                30 / 60 / 90-Day Expiration Radar
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Automated deficiency alerts notify managers and workers before mandatory state licenses or specialty credentials expire.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Scoped Consent & Privacy
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Zero duplication of employee records. Offboarding automatically revokes company access while preserving the employee's lifelong portable record.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Audit-Ready Regulatory Reports
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Export one-click compliance reports for Joint Commission, state health departments, CAMTS, and defense contract audits.
              </p>
            </div>
          </div>

          {/* PathAI & Workforce Radar Spotlight */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-teal-800/80 dark:border-teal-500 shadow-md space-y-8 transition-colors">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>PATHAI • WORKFORCE COMPLIANCE RADAR</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Automated Workforce Deficiency Remediation Powered by PathAI
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  When a clinician or engineer approaches a license renewal deadline, PathAI doesn't just send an alert—it proactively identifies compliant continuing education courses and notifies the employee with exact remaining hours to maintain 100% roster readiness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Activity className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Proactive Expiration Radar</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Visual heatmaps showing 30, 60, and 90-day renewal windows across hospital units or flight bases.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <ShieldCheck className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Consent-Mediated Scopes</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Employees grant explicit permission only for credentials required for their active role.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <BarChart3 className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Instant Audit Logs</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Generate cryptographically verifiable roster compliance summaries for state inspectors in seconds.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Enterprise-ready: SOC 2 compliance, PostgreSQL RLS, and HIPAA data isolation.
                </div>
                <button
                  onClick={() => setIsBetaModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Request Teams Design Partner Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-4">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Protect your organization from compliance lapses.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Join enterprise healthcare providers, aviation operators, and defense contractors in the design partner program.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Schedule Workforce Compliance Briefing
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
