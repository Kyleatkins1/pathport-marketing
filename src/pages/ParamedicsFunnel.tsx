import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { 
  ArrowRight, Award, Clock, Briefcase, 
  Compass, TrendingUp, HeartPulse, 
  ShieldCheck, CheckCircle2, FileText, Plane 
} from 'lucide-react';

import { SEO } from '../components/SEO';
import { PersonaPillarsSection } from '../components/PersonaPillarsSection';

export const ParamedicsFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'field' | 'flight' | 'leadership'>('field');

  const roleDetails = {
    field: {
      title: "911 Field Clinicians & Community Paramedicine (NRP, EMT-P)",
      description: "Track recertification categories organized by requirements. Capture pre-hospital resuscitations, trauma triage case studies, and field preceptorship hours.",
      highlight: "National (30h), State (15h), and Individual (15h) requirement tracking (Example)."
    },
    flight: {
      title: "Critical Care Transport & Flight Paramedics (FP-C, CCP-C)",
      description: "Manage specialty board recertification, ventilator management protocols, invasive line monitoring, and aero-medical flight case studies.",
      highlight: "Aero-medical transport case studies with pre-hospital RSI and ventilator documentation (Example)."
    },
    leadership: {
      title: "EMS Officers, Operations Chiefs & Clinical Educators",
      description: "Document EMS agency protocol revisions, FTO training programs, QA/QI review metrics, and leadership credentials.",
      highlight: "Tailored executive lenses for agency leadership transitions and audits (Example)."
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="PathPort for Paramedics & EMS — NCCP Recert, Flight Evidence & FP-C"
        description="Consolidate NREMT, state paramedic licenses, and IBSC board specialties (FP-C, CCP-C). Document high-acuity resuscitation case studies and QA protocols in one living record."
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="py-16 md:py-24 space-y-20 focus:outline-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <Plane className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              For Paramedics & Emergency Clinicians
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Pre-Hospital Clinical Proof.{' '}
              <span className="text-teal-800 dark:text-teal-400 block sm:inline-block">From 911 Frontline to Critical Care Flight.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Your field saves, airway management, and critical care competencies deserve more than a flat PDF. Consolidate your NREMT registry, state cards, and flight certifications in a portable living passport.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register for Beta Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Role Segmentation Matrix */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Built for Every Stage of Pre-Hospital Care
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Select your EMS track to see how PathPort organizes your clinical credentials:
              </p>
            </div>

            {/* Role Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                onClick={() => setSelectedRole('field')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'field'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>911 & Field Clinicians</span>
              </button>

              <button
                onClick={() => setSelectedRole('flight')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'flight'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Plane className="w-3.5 h-3.5" />
                <span>Flight & Critical Care (FP-C)</span>
              </button>

              <button
                onClick={() => setSelectedRole('leadership')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'leadership'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>EMS Officers & Chiefs</span>
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
                60-Hour NCCP & State CE Organizer
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Keep your National (30h), State (15h), and Individual (15h) continuing education hours categorized and ready for audit.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Pre-Hospital Case Studies
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Turn RSI interventions, pediatric resuscitations, and MCI triage coordination into structured, verified case studies.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Flight & Agency Portfolios
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Share a single unlisted link (`getpathport.com/p/elena-flight-lead`) with flight recruiters or agency medical directors.
              </p>
            </div>
          </div>

          {/* PathAI Career Advisor Spotlight for Paramedics */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-teal-800/80 dark:border-teal-500 shadow-md space-y-8 transition-colors">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold">
                <Compass className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>PathAI EMS Advisor</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Advising Your Full Emergency Career Journey.{' '}
                  <span className="text-teal-800 dark:text-teal-400 block mt-1">Beyond Just Stacking Repetitive Refresher Courses.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Traditional EMS portals just prompt you to repeat CPR and airway cards. PathAI evaluates your entire clinical trajectory: your 911 field saves, ventilator labs, Field Training Officer (FTO) mentorship, and flight transport aspirations to map clear board prerequisites.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Compass className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Flight & Critical Care Readiness</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Evaluates high-acuity field years, ventilator labs, and aero-medical physiology hours for IBSC FP-C exam prep.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <TrendingUp className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">NCCP Requirement Gap Analysis</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Identifies missing mandatory topic hours across National (30h), State (15h), and Individual (15h) recertification rules.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <FileText className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Field Case Study Studio</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Transforms pre-hospital cardiac resuscitations and protocol QA into structured evidence flight recruiters value.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Privacy-first: Your career records and recertification progress belong to you, not your agency.
                </div>
                <button
                  onClick={() => setIsBetaModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Experience PathAI for EMS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 6 Action Pillars for EMS & Paramedics */}
          <PersonaPillarsSection
            eyebrow="EMS Evidence Framework"
            title="The 6 Action Pillars for Emergency Medical Clinicians"
            subtitle="Advancing in pre-hospital, flight, and EMS operations requires structured proof across all six dimensions."
            pillars={[
              {
                name: "1. Earn",
                category: "National Registry & Board Specialties",
                icon: Award,
                description: "NREMT Paramedic certification, state agency credentials, IBSC FP-C / CCP-C, and instructor cards.",
                example: "Nationally Registered Paramedic (NRP) & IBSC FP-C"
              },
              {
                name: "2. Learn",
                category: "NCCP 60-Hour Recertification",
                icon: Clock,
                description: "Automated distribution across National (30h), State/Local (15h), and Individual (15h) categories.",
                example: "NREMT 60-Hour NCCP Cycle Tracking"
              },
              {
                name: "3. Build",
                category: "Clinical Guidelines & Training Curriculums",
                icon: ShieldCheck,
                description: "Pre-hospital RSI algorithms, mechanical ventilator checklists, and pediatric resuscitation kits.",
                example: "Agency Mechanical Ventilation Protocol & Checklist"
              },
              {
                name: "4. Demonstrate",
                category: "High-Acuity Resuscitation Case Studies",
                icon: FileText,
                description: "Documented cardiac arrest saves, complex surgical airway management, and multi-agency MCI coordination.",
                example: "Aero-Medical Critical Care RSI Case Study"
              },
              {
                name: "5. Experience",
                category: "Field Operations & FTO Preceptorship",
                icon: Briefcase,
                description: "High-volume 911 frontline shifts, critical care rotor wing flight hours, and new recruit field coaching.",
                example: "10+ Years 911 Field Clinician & Lead FTO Officer"
              },
              {
                name: "6. Reflect",
                category: "Crew Resource Management (CRM) Narratives",
                icon: HeartPulse,
                description: "Incident command debriefs, high-stress communication frameworks, and clinical QA reflection logs.",
                example: "Crew Resource Management in Flight Transport Narrative"
              }
            ]}
          />

          {/* Bottom CTA Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-4">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Stop losing recertification records across agency portals.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Join founding paramedics from 911 services, flight programs, and critical care transport.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Register for Beta Access
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        defaultAudience="Paramedic / Emergency Services"
        source="paramedics_funnel"
      />
    </div>
  );
};

export default ParamedicsFunnel;
