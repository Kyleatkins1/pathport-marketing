import React from 'react';
import { 
  Award, ShieldCheck, FileText, Sparkles, GraduationCap, 
  Briefcase, Stethoscope, Cpu, CheckCircle2, HeartPulse, 
  Layers, Compass, Flame, BookOpen, PenTool, Plane
} from 'lucide-react';

export const InteroperabilityRibbon: React.FC = () => {
  const row1Credentials = [
    { title: 'State RN & NP Licenses', issuer: 'State Boards of Nursing', category: 'Healthcare / Nursing', icon: Stethoscope },
    { title: 'CCRN® Critical Care', issuer: 'AACN Certification Corp', category: 'Specialty Nursing', icon: HeartPulse },
    { title: 'NREMT Paramedic (NRP)', issuer: 'National Registry of EMTs', category: 'Emergency Medicine', icon: ShieldCheck },
    { title: 'Certified Flight Paramedic (FP-C)', issuer: 'IBSC Specialty Board', category: 'Aviation Transport', icon: Plane },
    { title: 'PMP® Project Management', issuer: 'Project Management Institute', category: 'Project Leadership', icon: Briefcase },
    { title: 'AWS Solutions Architect — Pro', issuer: 'Amazon Web Services', category: 'Cloud Infrastructure', icon: Cpu },
    { title: 'Professional Engineer (PE)', issuer: 'NCEES State Boards', category: 'Engineering & Systems', icon: Compass },
    { title: 'Certified ScrumMaster (CSM)', issuer: 'Scrum Alliance', category: 'Agile Delivery', icon: Layers },
    { title: 'CISSP Cyber Security', issuer: '(ISC)²', category: 'Information Security', icon: LockIcon },
    { title: 'CEN Emergency Nursing', issuer: 'Board of Emergency Nursing', category: 'Emergency Medicine', icon: Stethoscope },
    { title: 'Google Cloud Professional', issuer: 'Google Cloud Platform', category: 'Cloud Architecture', icon: Cpu },
    { title: 'Registered Pharmacist (PharmD/RPh)', issuer: 'State Pharmacy Boards', category: 'Clinical Pharmacy', icon: Sparkles },
    { title: 'LEED AP BD+C Building Design', issuer: 'U.S. Green Building Council', category: 'Architecture & Design', icon: PenTool },
    { title: 'FAA Part 107 Remote Pilot', issuer: 'Federal Aviation Administration', category: 'Commercial Aviation', icon: Plane },
    { title: 'Certified Kubernetes Admin (CKA)', issuer: 'Linux Foundation / CNCF', category: 'Cloud Native', icon: Cpu },
    { title: 'Physician Assistant (PA-C)', issuer: 'NCCPA Board', category: 'Clinical Medicine', icon: Stethoscope },
    { title: 'Six Sigma Black Belt (CSSBB)', issuer: 'ASQ', category: 'Operational Excellence', icon: Award },
    { title: 'BLS / ACLS / PALS / ATLS', issuer: 'AHA & Resuscitation Councils', category: 'Emergency Life Support', icon: Flame },
  ];

  const row2Evidence = [
    { title: 'Accredited Ph.D. & M.S. Degrees', issuer: 'Accredited Universities', category: 'Academic Degrees', icon: GraduationCap },
    { title: 'Challenge-Approach-Outcome Studies', issuer: 'Author Portfolios', category: 'Structured Case Studies', icon: FileText },
    { title: '3-Year 60 PDU Renewal Cycles', issuer: 'PMI CCRS Compliance', category: 'Automated PDU Tracking', icon: Award },
    { title: 'Clinical Quality & Sepsis Protocols', issuer: 'Health Systems & Hospitals', category: 'Clinical Quality QA', icon: CheckCircle2 },
    { title: 'Peer-Reviewed Journal DOIs', issuer: 'Scientific Societies', category: 'Scholarly Research', icon: BookOpen },
    { title: 'Multi-Region Distributed Migrations', issuer: 'Enterprise Deliveries', category: 'System Architecture', icon: Cpu },
    { title: 'Academic Preceptorship Logs', issuer: 'Graduate Residencies', category: 'Clinical Education', icon: GraduationCap },
    { title: 'Conference Keynotes & Posters', issuer: 'National Conventions', category: 'Thought Leadership', icon: Sparkles },
    { title: 'NREMT 60-Hour NCCP Renewals', issuer: 'Universal CE Engine', category: 'Recertification Rules', icon: ShieldCheck },
    { title: 'Good Clinical Practice (GCP)', issuer: 'CITI Program / NIH', category: 'Clinical Trial Ethics', icon: ShieldCheck },
    { title: 'State Board CE Contact Hours', issuer: 'Audited CE Repositories', category: 'License Compliance', icon: HeartPulse },
    { title: 'Patents & Technical Whitepapers', issuer: 'USPTO / Engineering Bodies', category: 'Intellectual Property', icon: FileText },
    { title: 'Verified Employer Accomplishments', issuer: 'Workforce Provenance', category: 'Consent-Backed Roles', icon: CheckCircle2 },
    { title: 'Tailored Lenses & Scoped Views', issuer: 'Sovereign PathPort Links', category: 'Dynamic Portfolios', icon: Layers },
    { title: 'Open-Source Code & Systems', issuer: 'GitHub / GitLab Repos', category: 'Engineering Evidence', icon: Cpu },
    { title: 'Capstone Prototyping Projects', issuer: 'Engineering Institutions', category: 'Applied Research', icon: Compass },
  ];

  return (
    <section className="py-18 bg-white border-y border-slate-200 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>UNIVERSAL EVIDENCE & CREDENTIAL PASSPORT</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
          Built for every credential, license, CEU, project & portfolio.
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
          PathPort isn't confined to a single discipline. Whether you have state clinical licenses requiring CEUs, 60-PDU project management cycles, cloud architecture proofs, or peer-reviewed research—showcase your entire journey in one sovereign, living PathPort.
        </p>
      </div>

      {/* Dual Infinite Scrolling Marquees with Fade Gradients */}
      <div className="relative space-y-4">
        {/* Left and Right Edge Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Credentials, Licenses & Board Specializations */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee flex items-center gap-3.5 pr-3.5">
            {[...row1Credentials, ...row1Credentials].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-teal-700 hover:bg-white hover:shadow-xs transition-all whitespace-nowrap group shrink-0"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 group-hover:bg-teal-800 group-hover:text-white transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-teal-800 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {item.issuer} • <span className="text-teal-800 font-semibold">{item.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Projects, Case Studies, Degrees, CE Renewals & Evidence */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-reverse flex items-center gap-3.5 pr-3.5">
            {[...row2Evidence, ...row2Evidence].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-teal-700 hover:bg-white hover:shadow-xs transition-all whitespace-nowrap group shrink-0"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center shrink-0 group-hover:bg-purple-800 group-hover:text-white transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-purple-800 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {item.issuer} • <span className="text-purple-800 font-semibold">{item.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple inline Lock icon component helper
const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <ShieldCheck className={className} />
);

export default InteroperabilityRibbon;
