import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { 
  ArrowRight, Award, Clock, Briefcase, 
  Sparkles, Compass, TrendingUp, HeartPulse, Building2, 
  CheckCircle2, FileText, Stethoscope 
} from 'lucide-react';

import { SEO } from '../components/SEO';

export const NursesFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'clinical' | 'leadership' | 'advanced' | 'executive'>('clinical');

  const roleDetails = {
    clinical: {
      title: "Bedside & Specialty Clinicians (ICU, ER, OR, Flight)",
      description: "Capture resuscitation protocols, ECMO competency, unit quality initiatives, and state board CEUs in a living record that travels with you.",
      highlight: "Instant CE & License Verification across multiple state compact boards."
    },
    leadership: {
      title: "Nurse Managers, Clinical Directors & Preceptors",
      description: "Prove operational impact that résumés leave behind: hospital committee leadership, unit sepsis protocol rollouts, staff retention improvements, and graduate residency mentorship.",
      highlight: "Structured Challenge-Approach-Outcome case studies with clinical quality ROI."
    },
    advanced: {
      title: "Advanced Practice (NPs, CRNAs, CNSs) & Health Informatics",
      description: "Manage complex board certifications, prescriptive authority requirements, clinical research publications, and EHR technology implementations.",
      highlight: "Tailored portfolio lenses for hospital credentialing, faculty appointments, and consulting."
    },
    executive: {
      title: "Healthcare Executives & Administrators (FACHE®, NEA-BC®, CNOs)",
      description: "Target healthcare executive advancement: consolidate FACHE® fellowship hours, executive healthcare governance, Board of Directors contributions, and hospital-wide clinical quality transformations.",
      highlight: "PathAI Fellowship Gap Math for ACHE & AONE executive credentialing."
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="PathPort for Nurses & Healthcare Leaders — Licenses, CEUs & FACHE®"
        description="Consolidate multi-state RN/NP licenses, specialty board certifications, FACHE® records, and mandatory CE contact hours into verified case studies and tailored portfolios."
      />
      <Navbar />

      <main className="py-16 md:py-24 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <Stethoscope className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              NURSING & HEALTHCARE LEADERSHIP RECORD
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Your Career is Bigger Than a Shift.{' '}
              <span className="text-teal-800 dark:text-teal-400 block sm:inline-block">Clinical Proof, Leadership & PathAI.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Consolidate your state RN/NP licenses, specialty board certifications, FACHE® records, and mandatory CE contact hours into verified case studies and tailored portfolios.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register for Healthcare & Nursing Beta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Across All Disciplines: Clinical, Leadership, Advanced Practice & Executive Tabs */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Built for Every Stage of Healthcare Leadership
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                From bedside trauma care to health informatics and hospital executive suites.
              </p>
            </div>

            {/* Role Switcher */}
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                onClick={() => setSelectedRole('clinical')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'clinical'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Bedside & Specialty Clinicians</span>
              </button>

              <button
                onClick={() => setSelectedRole('leadership')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'leadership'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Managers, Directors & Preceptors</span>
              </button>

              <button
                onClick={() => setSelectedRole('advanced')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'advanced'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Advanced Practice & Informatics</span>
              </button>

              <button
                onClick={() => setSelectedRole('executive')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'executive'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>FACHE® Executives & CNOs</span>
              </button>
            </div>

            {/* Active Role Content Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {roleDetails[selectedRole].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {roleDetails[selectedRole].description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{roleDetails[selectedRole].highlight}</span>
              </div>
            </div>
          </div>

          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Multi-State & Executive CE Tracking
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Calculates mandatory state board requirements (Pharmacology, Implicit Bias) and executive requirements (ACHE Qualified Education hours) automatically.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Clinical QI & Governance Case Studies
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Document unit process improvements, sepsis protocols, hospital committee governance, and staff retention in structured Challenge-Approach-Outcome formats.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Tailored Travel & Executive Lenses
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Maintain your record once and generate clean `/p/sarah-rn` links for hospital credentialing, travel nursing contracts, administrative promotions, or health system C-suite dossiers.
              </p>
            </div>
          </div>

          {/* PathAI Spotlight: The Healthcare & Executive Career Co-Pilot */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-teal-800/80 dark:border-teal-500 shadow-md space-y-8 transition-colors">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>PATHAI • HEALTHCARE & EXECUTIVE ADVISOR SPOTLIGHT</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Meet PathAI: Guiding Your Journey from Bedside to FACHE® Executive
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Whether you want to transition from bedside nursing to health informatics, prepare for an NP or CRNA program, step into nurse management, or earn your <strong>FACHE® Fellowship in Healthcare Management</strong>—PathAI evaluates your complete evidence record to chart your exact next steps.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Compass className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">FACHE® & Executive Readiness</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Evaluates healthcare management tenure, ACHE continuing education hours, and committee governance for Board certification.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <TrendingUp className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Prerequisite Gap Math</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Identifies missing executive education credits, clinical contact hours, or quality case studies required for your next promotion.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <FileText className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">QI & Governance Drafter</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Transforms clinical quality metrics and hospital system rollouts into structured, executive-ready case studies.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Privacy-first: Your career growth intent is 100% sovereign and never disclosed to employers.
                </div>
                <button
                  onClick={() => setIsBetaModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Experience PathAI in Beta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-4">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Ready to own your portable clinical & healthcare passport?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Join founding nurses, nurse leaders, advanced practitioners, and healthcare executives shaping modern professional identity.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Register for Free Beta Access
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
        source="nurses_healthcare_funnel"
      />
    </div>
  );
};

export default NursesFunnel;
