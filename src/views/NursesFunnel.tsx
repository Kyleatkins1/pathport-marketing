import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { 
  ArrowRight, Award, Clock, Briefcase, 
  Compass, TrendingUp, HeartPulse, Building2, 
  CheckCircle2, FileText, Stethoscope 
} from 'lucide-react';

import { SEO } from '../components/SEO';
import { PersonaPillarsSection } from '../components/PersonaPillarsSection';
import { APP_SIGN_UP_URL, getActiveTrialDays } from '../lib/modal-events';

export const NursesFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'clinical' | 'leadership' | 'advanced' | 'executive'>('clinical');
  const trialDays = getActiveTrialDays();

  const roleDetails = {
    clinical: {
      title: "Bedside & Specialty Clinicians (e.g. ICU, ER, OR, Flight)",
      description: "Capture resuscitation protocols, specialty competencies, unit quality initiatives, and state board CEUs in a living record that travels with you.",
      highlight: "CE & license tracking across state compact boards (Example)."
    },
    leadership: {
      title: "Nurse Managers, Clinical Directors & Preceptors",
      description: "Prove operational impact that résumés leave behind: hospital committee leadership, sepsis protocol rollouts, staff retention improvements, and mentorship.",
      highlight: "Structured Challenge-Approach-Outcome case studies with clinical quality metrics (Example)."
    },
    advanced: {
      title: "Advanced Practice (NPs, CRNAs, CNSs) & Health Informatics",
      description: "Manage specialty board certifications, prescriptive authority requirements, clinical research publications, and EHR technology implementations.",
      highlight: "Tailored portfolio views for credentialing, faculty appointments, and consulting (Example)."
    },
    executive: {
      title: "Healthcare Executives & Administrators (e.g. FACHE®, NEA-BC®, CNOs)",
      description: "Target healthcare executive advancement: consolidate executive governance, Board contributions, and health system quality initiatives.",
      highlight: "MyPath Fellowship & Role Readiness Audit for executive credentialing."
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="PathPort for Nurses & Healthcare Leaders — Licenses, CEUs & Career Growth"
        description="Consolidate multi-state RN/NP licenses, specialty board certifications, executive records, and mandatory CE contact hours into verified case studies and tailored portfolios."
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="py-16 md:py-24 space-y-20 focus:outline-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <Stethoscope className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              For Nursing & Healthcare Leaders
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Clinical & Leadership Proof.{' '}
              <span className="text-teal-800 dark:text-teal-400 block sm:inline-block">From Bedside to Healthcare Executive.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Drop in your existing resume or CE certificates—or forward completion emails to <code className="text-xs font-mono bg-slate-100 px-1.5 py-0.5 rounded text-[#0D5F57]">ce-you@in.getpathport.com</code>—to track 50-state RN/APRN renewals, share verifiable <strong>MyPortfolio</strong> links, and map your next clinical move with <strong>MyPath</strong>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <a
                href={APP_SIGN_UP_URL}
                className="px-8 py-3.5 rounded-2xl bg-[#0D5F57] hover:bg-[#094842] text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Start Free {trialDays}-Day Pro Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Role Segmentation Matrix */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Tailored for Every Stage of Healthcare Leadership
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Select your focus area to see how PathPort proves your capabilities:
              </p>
            </div>

            {/* Role Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                onClick={() => setSelectedRole('clinical')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
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
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'leadership'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Managers & Preceptors</span>
              </button>

              <button
                onClick={() => setSelectedRole('advanced')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'advanced'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Advanced Practice (NPs/CRNAs)</span>
              </button>

              <button
                onClick={() => setSelectedRole('executive')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'executive'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Executives & Administrators</span>
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
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Multi-State License & CE Vault
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Keep compact licenses, CPR/ACLS certifications, and contact hours organized with expiration alerts.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                QI & Clinical Case Studies
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Document unit sepsis protocols, CAUTI reductions, and committee achievements in structured challenge-outcome stories.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Tailored Portfolios (/p/ links)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Generate tailored unlisted portfolio links for travel nursing agencies, hospital credentialing, or academic appointments.
              </p>
            </div>
          </div>

          {/* MyPath Career Intelligence Spotlight for Nursing */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-teal-800/80 dark:border-teal-500 shadow-md space-y-8 transition-colors">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold">
                <Compass className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>MyPath • Clinical & Leadership Career Intelligence</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Plan your next clinical move—{' '}
                  <span className="text-teal-800 dark:text-teal-400 block mt-1">from bedside RN to APRN, Clinical Educator, or CNO.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Hospital LMS portals only track annual compliance modules. MyPath evaluates your complete clinical record—your ICU charge tenure, preceptorship hours, committee leadership, and specialty certifications—to audit your readiness for NP/CRNA programs, Clinical Informatics, or Nurse Director roles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Compass className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">What-If Role Audits</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Evaluates clinical charge leadership and committee participation to bridge into APRN, Informatics, or Quality Management.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <TrendingUp className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">50-State & Specialty Gap Analysis</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Identifies missing state-mandated contact hours, ANCC/AACN board prerequisites, or clinical practice hours.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <FileText className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">MyPortfolio & Application Studio</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Transforms hospital sepsis initiatives, CAUTI reductions, and preceptorships into structured proof for recruiters and admissions boards.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Privacy-first: Your career growth goals are personal and never disclosed to employers.
                </div>
                <a
                  href={APP_SIGN_UP_URL}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0D5F57] hover:bg-[#094842] text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Explore MyPath in Your {trialDays}-Day Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 6 Action Pillars for Nursing & Healthcare */}
          <PersonaPillarsSection
            eyebrow="Healthcare Evidence Framework"
            title="The 6 Action Pillars for Healthcare Professionals"
            subtitle="Advancing your nursing and healthcare career requires a balanced evidence portfolio across all six dimensions."
            pillars={[
              {
                name: "1. Earn",
                category: "Board Licenses & Specialty Certs",
                icon: Award,
                description: "State RN/NP multi-state compact licenses, CCRN, NEA-BC, and executive fellowships.",
                example: "eNLC Multi-State RN License or ANCC Board Certification"
              },
              {
                name: "2. Learn",
                category: "Mandatory State CEUs & Topics",
                icon: Clock,
                description: "State BON-mandated contact hours (e.g. Florida Medical Errors, CA Implicit Bias, Texas Jurisprudence).",
                example: "24 Biannual CE Contact Hours with Provider Tracking"
              },
              {
                name: "3. Build",
                category: "Clinical Protocols & Curriculums",
                icon: Stethoscope,
                description: "Unit training curriculums, simulation lab checklists, clinical preceptorship guides, and EHR order sets.",
                example: "Unit-Wide Sepsis Triage Protocol & EHR Order Set"
              },
              {
                name: "4. Demonstrate",
                category: "Structured Clinical QI Case Studies",
                icon: FileText,
                description: "Measured quality improvements: CAUTI reduction, door-to-balloon times, and patient satisfaction outcomes.",
                example: "ICU Sepsis Reduction Case Study (-38% Mortality)"
              },
              {
                name: "5. Experience",
                category: "Operational Leadership & Preceptorship",
                icon: Briefcase,
                description: "Inpatient charge nurse tenure, hospital committee chairs, code team leadership, and student precepting.",
                example: "8+ Years Charge Nurse & Hospital EHR Committee Lead"
              },
              {
                name: "6. Reflect",
                category: "Patient Advocacy & Ethics Narratives",
                icon: HeartPulse,
                description: "Structured narratives detailing your clinical philosophy, ethical decision-making, and mentorship approach.",
                example: "Patient-Centered Advocacy in Critical Care Narrative"
              }
            ]}
          />

          {/* Bottom CTA Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-4">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Ready to own your portable clinical & healthcare passport?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Join nurses, nurse leaders, advanced practitioners, and healthcare executives building their lifelong professional record.
            </p>
            <div className="pt-2">
              <a
                href={APP_SIGN_UP_URL}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all"
              >
                <span>Start Free {trialDays}-Day Pro Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        defaultPersona="Registered Nurse (RN / APRN / Travel)"
        defaultIntent="individual"
      />
    </div>
  );
};

export default NursesFunnel;
