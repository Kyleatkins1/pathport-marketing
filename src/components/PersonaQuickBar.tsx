import React from 'react';
import {
  Stethoscope,
  Flame,
  Briefcase,
  GraduationCap,
  Building2,
  Award,
  ArrowRight,
  Calculator,
  Scale,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PERSONA_CARDS = [
  {
    title: 'Nurses & Clinicians',
    sub: '50-State RN/APRN CEUs, NLC Compact & ANCC/AACN',
    href: '/for/nurses',
    icon: Stethoscope,
    accent: 'text-[#0D5F57] bg-teal-50 border-teal-200/70 group-hover:bg-[#0D5F57] group-hover:text-white',
  },
  {
    title: 'EMS & Paramedics',
    sub: 'NREMT 60-hr NCCP buckets & agency reciprocity',
    href: '/for/paramedics',
    icon: Flame,
    accent: 'text-orange-600 bg-orange-50 border-orange-200/70 group-hover:bg-orange-600 group-hover:text-white',
  },
  {
    title: 'Project Managers',
    sub: 'PMI Talent Triangle PDUs & delivery case studies',
    href: '/for/project-managers',
    icon: Briefcase,
    accent: 'text-indigo-600 bg-indigo-50 border-indigo-200/70 group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    title: 'Students & Graduates',
    sub: 'Keep clinical logs & capstones after graduation',
    href: '/for/students',
    icon: GraduationCap,
    accent: 'text-purple-600 bg-purple-50 border-purple-200/70 group-hover:bg-purple-600 group-hover:text-white',
  },
  {
    title: 'PathPort Workplace',
    sub: 'Permissioned workforce readiness • Launching 2027',
    href: '/for/enterprise',
    icon: Building2,
    accent: 'text-slate-700 bg-slate-100 border-slate-200/70 group-hover:bg-slate-800 group-hover:text-white',
  },
  {
    title: 'PathPort Certify',
    sub: 'Board & issuer recertification • Launching 2027',
    href: '/for/board-certifications',
    icon: Award,
    accent: 'text-amber-700 bg-amber-50 border-amber-200/70 group-hover:bg-amber-600 group-hover:text-white',
  },
];

export const PersonaQuickBar: React.FC = () => {
  return (
    <section
      aria-label="Explore PathPort by Profession"
      className="py-10 bg-white border-y border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Tailored Workflows by Discipline & Ecosystem
          </div>
          <div className="text-xs text-slate-500">
            Select your role to explore specialized renewal rules, MyPortfolio views, and MyPath
            roadmaps →
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {PERSONA_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                to={card.href}
                className="group p-4 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#0D5F57]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${card.accent}`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0D5F57] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-display group-hover:text-[#0D5F57] transition-colors">
                    {card.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-snug">{card.sub}</div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* High-Intent Tools & Comparison Strip */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Free Interactive Tools & Comparisons
          </span>
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              to="/tools/renewal-calculator"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#0D5F57] border border-emerald-200/70 text-xs font-semibold transition-colors"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>50-State License & Board Renewal Calculator</span>
            </Link>
            <Link
              to="/vs/ce-broker"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare: PathPort vs. CE Broker</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
