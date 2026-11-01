import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface PersonaPillarItem {
  name: string;
  category: string;
  icon: LucideIcon;
  description: string;
  example: string;
}

interface PersonaPillarsSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  pillars: PersonaPillarItem[];
}

export const PersonaPillarsSection: React.FC<PersonaPillarsSectionProps> = ({
  title = 'The 6 Career Pillars Inside MyPath',
  subtitle = 'MyPath evaluates your real credentials, experience, and projects to map concrete next steps across six balanced career pillars.',
  eyebrow = 'MyPath • Whole-Journey Framework',
  pillars,
}) => {
  return (
    <div className="space-y-8 pt-4">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0D5F57] bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block">
          {eyebrow}
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pillars.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <div key={idx} className="card-surface-white p-6 space-y-3.5">
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl bg-[#0D5F57] text-white flex items-center justify-center shadow-xs"
                  aria-hidden="true"
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#0D5F57] bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200">
                  {pillar.category}
                </span>
              </div>

              <div>
                <h4 className="font-display font-bold text-base text-slate-900">{pillar.name}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{pillar.description}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                <strong className="text-slate-700">Example: </strong>
                {pillar.example}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonaPillarsSection;
