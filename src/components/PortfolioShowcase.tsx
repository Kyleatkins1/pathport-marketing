import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, Presentation, ExternalLink, Sparkles } from 'lucide-react';

interface DemoProfile {
  id: string;
  name: string;
  role: string;
  badge: string;
  handle: string;
  avatar: string;
  bio: string;
  credentials: Array<{
    title: string;
    issuer: string;
    type: string;
    status: string;
  }>;
  caseStudyTitle: string;
  caseStudyOutcome: string;
}

export const PortfolioShowcase: React.FC = () => {
  const profiles: DemoProfile[] = [
    {
      id: 'nurse-multi',
      name: 'Sarah Jenkins, BSN, RN',
      role: 'ICU Charge Nurse & Preceptor',
      badge: 'Healthcare & Nursing',
      handle: 'sarah-jenkins-rn',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
      bio: '10+ years critical care nursing across NY & NJ state licensing boards, with focus on ECMO and trauma resuscitation.',
      credentials: [
        { title: 'Registered Nurse (RN) License', issuer: 'NYS Board of Nursing', type: 'State License', status: 'Issuer Verified' },
        { title: 'CCRN® — Critical Care Nurse', issuer: 'AACN Certification Corp', type: 'Specialty Board', status: 'Issuer Verified' },
        { title: 'ACLS / PALS Provider', issuer: 'American Heart Association', type: 'Clinical Cert', status: 'Provider Reported' },
      ],
      caseStudyTitle: 'Telemetry Unit Sepsis Early-Warning Protocol',
      caseStudyOutcome: 'Reduced mean time to ICU transfer by 42 minutes across 180 admissions.',
    },
    {
      id: 'paramedic-cct',
      name: 'Elena Rodriguez, NRP, FP-C',
      role: 'Flight Paramedic & Clinical Educator',
      badge: 'Emergency Services',
      handle: 'elena-flight-lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
      bio: 'Critical care rotary transport clinician with focus on high-altitude neonatal ventilation and QA training.',
      credentials: [
        { title: 'National Registry Paramedic (NRP)', issuer: 'NREMT', type: 'Board Cert', status: 'Issuer Verified' },
        { title: 'Certified Flight Paramedic (FP-C)', issuer: 'IBSC', type: 'Board Specialty', status: 'Issuer Verified' },
        { title: 'Critical Care Transport (CCT)', issuer: 'University Medical Center', type: 'Specialty Cert', status: 'Provider Reported' },
      ],
      caseStudyTitle: 'Pre-Hospital RSI In-Flight Ventilator Protocol',
      caseStudyOutcome: 'Maintained 100% SpO2 stability across 64 high-acuity inter-facility flights.',
    },
    {
      id: 'pmp-single',
      name: 'Marcus Vance, PMP®, CSM',
      role: 'Senior Technical Program Director',
      badge: 'Cloud & Technology',
      handle: 'marcus-vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      bio: 'Managing complex distributed system migrations, multi-region database architectures, and agile engineering teams.',
      credentials: [
        { title: 'PMP® — Project Management Pro', issuer: 'PMI', type: 'Certification', status: 'Issuer Verified' },
        { title: 'AWS Solutions Architect - Pro', issuer: 'Amazon Web Services', type: 'Cloud Cert', status: 'Issuer Verified' },
        { title: 'Certified ScrumMaster (CSM)', issuer: 'Scrum Alliance', type: 'Agile Cert', status: 'Provider Reported' },
      ],
      caseStudyTitle: 'Zero-Downtime Multi-Region Database Sharding',
      caseStudyOutcome: 'Completed CRDT migration across 4 global regions with 0 seconds of user downtime.',
    },
    {
      id: 'student-research',
      name: 'David Kim, MS',
      role: 'Bioengineering Research Fellow',
      badge: 'Sciences & Research',
      handle: 'david-kim-bio',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
      bio: 'Biomedical engineering graduate with published peer-reviewed research in microfluidic diagnostic sensors.',
      credentials: [
        { title: 'M.S. in Biomedical Engineering', issuer: 'Johns Hopkins University', type: 'Degree', status: 'Issuer Verified' },
        { title: 'Good Clinical Practice (GCP)', issuer: 'CITI Program', type: 'Certification', status: 'Issuer Verified' },
      ],
      caseStudyTitle: 'Point-of-Care Microfluidic Biosensor Validation',
      caseStudyOutcome: 'Achieved 98.4% diagnostic sensitivity in preclinical blood plasma assay trials.',
    },
  ];

  const [activeProfile, setActiveProfile] = useState<DemoProfile>(profiles[0]);

  return (
    <section id="portfolios" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 scroll-mt-20 select-none transition-colors relative">
      {/* Alias anchor for singular #portfolio */}
      <span id="portfolio" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            TAILORED PORTFOLIO ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            See the Living Record in Action
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Select a verified discipline below to explore how credentials, structured case studies, and tailored lenses present in real time.
          </p>
        </div>

        {/* Rich Persona Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
          {profiles.map((p) => {
            const isSelected = p.id === activeProfile.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProfile(p)}
                className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer flex items-center gap-3 border ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-2 border-teal-800 dark:border-teal-400 shadow-md ring-2 ring-teal-800/10'
                    : 'bg-white/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
                }`}
              >
                <img 
                  src={p.avatar} 
                  alt={p.name} 
                  className={`w-10 h-10 rounded-xl object-cover shrink-0 border ${
                    isSelected ? 'border-teal-800 dark:border-teal-400' : 'border-slate-200 dark:border-slate-700'
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <div className={`font-bold text-xs truncate ${isSelected ? 'text-teal-900 dark:text-teal-300 font-extrabold' : 'text-slate-900 dark:text-white'}`}>
                    {p.name.split(',')[0]}
                  </div>
                  <div className="text-[10px] text-teal-800 dark:text-teal-400 font-semibold truncate">
                    {p.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Living Portfolio Card Preview */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-7">
          {/* Top Bar: Handle & Scope */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="text-xs font-mono text-teal-800 dark:text-teal-400 font-bold flex items-center gap-1.5">
                <span>getpathport.com/p/{activeProfile.handle}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                {activeProfile.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{activeProfile.role}</p>
            </div>

            <Link
              to={`/p/${activeProfile.handle}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-teal-800 dark:hover:bg-teal-700 text-white text-xs font-semibold shadow-2xs hover:scale-[1.02] transition-all self-start sm:self-auto"
            >
              <span>View Full PathPortfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {activeProfile.bio}
          </p>

          {/* Credentials Grid */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-teal-800 dark:text-teal-400" />
              <span>Verified Credentials & Board Certifications</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {activeProfile.credentials.map((c, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/80 space-y-1.5">
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{c.title}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{c.issuer}</div>
                  <div className="pt-1 flex items-center gap-1 text-[10px] text-emerald-800 dark:text-emerald-300 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span>{c.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Callout */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Presentation className="w-4 h-4 text-teal-800 dark:text-teal-400" />
                <span>Featured Structured Case Study</span>
              </div>
              <span className="text-[10px] font-mono text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 px-2 py-0.5 rounded-full font-bold">
                Evidence Attached
              </span>
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">{activeProfile.caseStudyTitle}</div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Outcome:</strong> {activeProfile.caseStudyOutcome}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
