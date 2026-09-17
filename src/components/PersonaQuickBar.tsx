import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, Briefcase, GraduationCap, ShieldCheck, Calculator, ArrowRight } from 'lucide-react';

export const PersonaQuickBar: React.FC = () => {
  const personas = [
    {
      name: "Registered Nurses",
      path: "/for/nurses",
      icon: Stethoscope,
      badge: "Licenses & CEUs"
    },
    {
      name: "Paramedics & EMS",
      path: "/for/paramedics",
      icon: Activity,
      badge: "NCCP & Critical Care"
    },
    {
      name: "Project Managers",
      path: "/for/project-managers",
      icon: Briefcase,
      badge: "PMP® & 60 PDUs"
    },
    {
      name: "Students & Early Career",
      path: "/for/students",
      icon: GraduationCap,
      badge: "Capstones & Proof"
    },
    {
      name: "vs. CE Broker",
      path: "/vs/ce-broker",
      icon: ShieldCheck,
      badge: "Comparison"
    },
    {
      name: "Renewal Calculator",
      path: "/tools/renewal-calculator",
      icon: Calculator,
      badge: "Free Tool"
    }
  ];

  return (
    <section aria-label="Explore by Profession" className="bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-6 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:text-teal-400"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Explore By Profession:
            </span>
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none select-none">
            {personas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.path}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-teal-50/80 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700 text-slate-800 dark:text-slate-200 hover:text-teal-900 dark:hover:text-teal-300 text-xs font-semibold whitespace-nowrap transition-all shadow-2xs group"
                >
                  <Icon className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>{item.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700 font-medium">
                    {item.badge}
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-teal-700 dark:group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaQuickBar;
