import React from 'react';
import { ShieldCheck } from 'lucide-react';

const FRAMEWORKS = [
  '50 State Nursing Boards & NLC Compact',
  'ANCC & AACN Specialty Rules',
  'NREMT 60-Hr NCCP Model',
  'PMI Talent Triangle PDUs',
  'AHA BLS / ACLS / PALS',
  'AANPCB APRN Recertification',
  'CompTIA & ISC2 CPEs',
  'AHVAP CVAHP Cohorts',
  'ARRT & PTCB Allied Health',
  '@in.getpathport.com Email Ingress',
  'Credly, Accredible & Badgr Badge Sync',
  'SHA-256 Document Vault',
  'PubMed, ORCID & GitHub Import',
];

export const InteroperabilityRibbon: React.FC = () => {
  return (
    <div className="py-5 bg-slate-900 text-slate-300 border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-400">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Built-In Rules & Document Support Across Major Credentialing Frameworks</span>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-4 whitespace-nowrap py-1">
          {[...FRAMEWORKS, ...FRAMEWORKS].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
