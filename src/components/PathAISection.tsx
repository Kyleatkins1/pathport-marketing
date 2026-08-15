import React, { useState } from 'react';
import { 
  Bot, Sparkles, ArrowRight, Compass, Target, 
  TrendingUp, CheckCircle2, BookOpen, Layers 
} from 'lucide-react';
import { BetaRegistrationModal } from './BetaRegistrationModal';

export const PathAISection: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [activeScenario, setActiveScenario] = useState<'transition' | 'growth' | 'gap_analysis'>('transition');

  const scenarios = {
    transition: {
      title: "Career Transition: Bedside ICU RN ➔ Clinical Informatics Lead",
      badge: "Cross-Discipline Transition",
      matchScore: "84% Prerequisite Match",
      analysis: "PathAI analyzed Sarah's 8 years of ICU charge experience, EPIC unit rollout leadership, and telemetry sepsis protocol case studies.",
      actionItems: [
        { status: "complete", text: "Satisfied: 5+ years acute inpatient EHR leadership & preceptorship" },
        { status: "complete", text: "Satisfied: Authored bedside sepsis protocol QI case study" },
        { status: "gap", text: "Recommended Next Step: Complete 15 CPHIMS informatics CE contact hours" },
        { status: "gap", text: "Portfolio Action: Generate 'Health Informatics & Systems' tailored view" }
      ],
      aiQuote: "“You already hold 84% of the qualifications for Health Systems Informatics. By highlighting your unit protocol case study and adding 15 informatics CE hours, your tailored portfolio will directly match hospital IT director requirements.”"
    },
    growth: {
      title: "Leadership Progression: Senior PM ➔ VP of Technical Programs",
      badge: "Executive Advancement",
      matchScore: "92% Prerequisite Match",
      analysis: "PathAI evaluated Marcus's PMP credential, AWS Pro architecture proofs, and 4-region database migration case study.",
      actionItems: [
        { status: "complete", text: "Satisfied: 8+ years distributed systems architecture & agile governance" },
        { status: "complete", text: "Satisfied: Zero-downtime multi-million dollar program delivery evidence" },
        { status: "gap", text: "Recommended Next Step: Log executive coaching & stakeholder strategy PDUs" },
        { status: "gap", text: "Portfolio Action: Publish executive-lens portfolio with measurable ROI metrics" }
      ],
      aiQuote: "“Your technical delivery proof is outstanding. PathAI recommends structuring your next case study around multi-team organizational transformation to position you for VP-level program leadership.”"
    },
    gap_analysis: {
      title: "Specialty Expansion: Paramedic ➔ Flight Transport Lead",
      badge: "Specialty Certification",
      matchScore: "78% Prerequisite Match",
      analysis: "PathAI scanned Elena's NREMT registry, 10-year pre-hospital field hours, and pediatric airway logs.",
      actionItems: [
        { status: "complete", text: "Satisfied: National Registry Paramedic & ACLS/PALS Instructor" },
        { status: "complete", text: "Satisfied: High-altitude ventilator protocol case study" },
        { status: "gap", text: "Recommended Next Step: IBSC FP-C exam prep module & arterial line lab" },
        { status: "gap", text: "Portfolio Action: Attach flight medical director endorsement" }
      ],
      aiQuote: "“You have completed all clinical hours needed for flight transport. PathAI has mapped your missing 12 CE hours directly to IBSC-accredited aero-medical modules.”"
    }
  };

  const current = scenarios[activeScenario];

  return (
    <section id="path-ai" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
            <span>PATHAI • YOUR CAREER ADVISOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            An AI advisor that actually knows your record.{' '}
            <span className="text-teal-800 dark:text-teal-400 block mt-1">Guiding your journey step-by-step.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Generic chatbots don't know what you've actually accomplished. <strong>PathAI</strong> understands your verified credentials, clinical interventions, engineering projects, and CE history — helping you explore new paths, build new skills, and target your next move by identifying requirement gaps and recommending practical next steps.
          </p>
        </div>

        {/* Interactive Scenario Explorer */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Scenario Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5">
            <button
              onClick={() => setActiveScenario('transition')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                activeScenario === 'transition'
                  ? 'bg-teal-800 text-white border-teal-800 shadow-xs scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Career Pivot (Bedside ➔ Informatics)</span>
            </button>

            <button
              onClick={() => setActiveScenario('growth')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                activeScenario === 'growth'
                  ? 'bg-teal-800 text-white border-teal-800 shadow-xs scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Leadership Growth (PM ➔ VP)</span>
            </button>

            <button
              onClick={() => setActiveScenario('gap_analysis')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                activeScenario === 'gap_analysis'
                  ? 'bg-teal-800 text-white border-teal-800 shadow-xs scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Specialty Gap Analysis (Flight Transport)</span>
            </button>
          </div>

          {/* PathAI Interactive Diagnostic Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-10 border-2 border-teal-800/80 dark:border-teal-500 shadow-lg space-y-7 transition-colors">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {current.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {current.matchScore}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  {current.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Bot className="w-4 h-4 text-teal-800 dark:text-teal-400" />
                <span>Requirement Gap Analysis</span>
              </div>
            </div>

            {/* AI Reasoning Callout */}
            <div className="p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-900 dark:text-teal-300">
                <Sparkles className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                <span>PathAI Capability Assessment</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                {current.aiQuote}
              </p>
            </div>

            {/* Actionable Roadmap Grid */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Step-by-Step Transition Roadmap
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.actionItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border text-xs flex items-start gap-3 transition-colors ${
                      item.status === 'complete'
                        ? 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                        : 'bg-emerald-50/60 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 font-semibold'
                    }`}
                  >
                    {item.status === 'complete' ? (
                      <CheckCircle2 className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                    ) : (
                      <Target className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                PathAI never invades your privacy or shares career intent with employers.
              </div>
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Explore PathAI with Beta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of PathAI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Career Pivot Guidance</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore realistic adjacent roles and see how your existing experience translates to new fields.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Requirement Gap Analysis</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Identifies missing qualifications, required courses, or evidence artifacts needed for your target goals.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Curated Learning Pathways</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Discovers accredited courses and certifications that satisfy multiple state and specialty requirements.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Tailored Pitch Drafter</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Helps you summarize complex project outcomes into crisp, structured case studies for your portfolios.
            </p>
          </div>
        </div>

      </div>

      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        source="path_ai_section"
      />
    </section>
  );
};

export default PathAISection;
