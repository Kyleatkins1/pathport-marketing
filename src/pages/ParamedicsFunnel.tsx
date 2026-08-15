import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { 
  ArrowRight, Award, Clock, Briefcase, 
  Sparkles, Compass, TrendingUp, Activity, 
  ShieldCheck, CheckCircle2, FileText, Plane 
} from 'lucide-react';

import { SEO } from '../components/SEO';

export const ParamedicsFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'field' | 'flight' | 'leadership'>('field');

  const roleDetails = {
    field: {
      title: "911 Field Clinicians & Community Paramedicine (NRP, EMT-P)",
      description: "Track 60-hour NCCP renewal categories automatically. Capture pre-hospital cardiac arrest resuscitations, trauma triage case studies, and field preceptorship hours.",
      highlight: "NREMT National (30h), State (15h), and Individual (15h) auto-audit calculations."
    },
    flight: {
      title: "Critical Care Transport & Flight Paramedics (FP-C, CCP-C)",
      description: "Manage IBSC specialty board recertification, ventilator management protocols, invasive arterial line monitoring, and aero-medical flight case studies.",
      highlight: "Aero-medical transport case studies with pre-hospital RSI and ventilator synchrony proof."
    },
    leadership: {
      title: "EMS Officers, Operations Chiefs & Clinical Educators",
      description: "Document EMS agency protocol revisions, FTO training programs, QA/QI review metrics, and leadership credentials (FACPE, NEMSMA).",
      highlight: "Tailored executive lenses for agency leadership transitions and state regulatory audits."
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="PathPort for Paramedics & EMS — NCCP Recert, Flight Evidence & FP-C"
        description="Consolidate NREMT, state paramedic licenses, and IBSC board specialties (FP-C, CCP-C). Document high-acuity resuscitation case studies and QA protocols in one living record."
      />
      <Navbar />

      <main className="py-16 md:py-24 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <Activity className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              EMS, FLIGHT & CRITICAL CARE RECORD
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Show the Real Work Behind the Patch.{' '}
              <span className="text-teal-800 dark:text-teal-400 block sm:inline-block">Recert, Flight Evidence & PathAI.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Consolidate NREMT, state paramedic licenses, and IBSC board specialties (FP-C, CCP-C). Document high-acuity resuscitation case studies, FTO field evaluations, and QA protocols in one living record.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register for EMS Beta Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Across All Disciplines: Field, Flight & EMS Leadership */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Built for Every Frontier of Emergency Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                From frontline 911 response to rotary critical care and agency operations.
              </p>
            </div>

            {/* Role Switcher */}
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                onClick={() => setSelectedRole('field')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'field'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>911 Field Clinicians</span>
              </button>

              <button
                onClick={() => setSelectedRole('flight')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'flight'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Plane className="w-3.5 h-3.5" />
                <span>Critical Care & Flight Leads</span>
              </button>

              <button
                onClick={() => setSelectedRole('leadership')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'leadership'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>EMS Officers & Educators</span>
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
                NREMT NCCP & IBSC Auto-Math
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Automatically calculates National (30 hrs), State/Local (15 hrs), and Individual (15 hrs) continuing education requirements with mandatory topic audits.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Resuscitation & Flight Case Studies
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Structured reports on invasive airways, RSI protocols, and ventilator management with anonymized timeline and outcome tracking.
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
                Generate tailored `/p/elena-flight` links with verified credentials for flight service applications, agency transfers, or educational faculty roles.
              </p>
            </div>
          </div>

          {/* PathAI Spotlight: EMS & Flight Advancement Advisor */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-teal-800/80 dark:border-teal-500 shadow-md space-y-8 transition-colors">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>PATHAI • EMS & FLIGHT ADVANCEMENT SPOTLIGHT</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Meet PathAI: Guiding Field Paramedics to Flight Transport & Agency Leadership
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Whether you're targeting your <strong>Certified Flight Paramedic (FP-C)</strong>, stepping up to EMS Field Training Officer (FTO), or advancing into operations management—PathAI evaluates your verified clinical hours and CE logs to chart the exact prerequisite roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Compass className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Flight Transport Readiness</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Evaluates high-acuity field years, ventilator labs, and aero-medical physiology hours for IBSC board exam qualification.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <TrendingUp className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">NCCP & State Gap Math</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Identifies missing mandatory topic hours (Pediatric, Airway, Trauma) across local, state, and national recertification rules.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <FileText className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Field Case Study Drafter</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Transforms anonymized field resuscitations and protocol QA into structured evidence case studies flight recruiters trust.
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

          {/* Bottom CTA Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-4">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Stop losing recertification records across agency portals.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Join founding paramedics from 911 services, flight programs, and hospital-based critical care transport.
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
        defaultAudience="Paramedic / Emergency Services"
        source="paramedics_funnel"
      />
    </div>
  );
};

export default ParamedicsFunnel;
