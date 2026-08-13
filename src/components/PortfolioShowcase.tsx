import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle, ExternalLink } from 'lucide-react';

interface DemoProfile {
  id: string;
  name: string;
  role: string;
  certCount: number;
  licenseCount: number;
  handle: string;
  bio: string;
  credentials: Array<{
    title: string;
    issuer: string;
    type: string;
    status: string;
    verified: boolean;
  }>;
  ceusCompleted?: string;
}

export const PortfolioShowcase: React.FC = () => {
  const profiles: DemoProfile[] = [
    {
      id: "pmp-single",
      name: "Marcus Vance",
      role: "Senior Project Manager",
      certCount: 1,
      licenseCount: 0,
      handle: "getpathport.com/p/marcus-vance",
      bio: "Managing complex enterprise software deliverables & agile transformations.",
      credentials: [
        { title: "PMP® — Project Management Professional", issuer: "Project Management Institute (PMI)", type: "Certification", status: "Active (Oct 2027)", verified: true }
      ]
    },
    {
      id: "nurse-multi",
      name: "Sarah Jenkins, BSN, RN",
      role: "ICU Charge Nurse",
      certCount: 4,
      licenseCount: 2,
      handle: "getpathport.com/p/sarah-jenkins-rn",
      bio: "10+ years critical care nursing across NY & NJ state licensing boards.",
      ceusCompleted: "30 / 30 Hours Complete",
      credentials: [
        { title: "Registered Nurse (RN) License", issuer: "NYS Board of Nursing", type: "State License", status: "Active & Compliant", verified: true },
        { title: "CCRN® — Critical Care Registered Nurse", issuer: "AACN Certification Corp", type: "Certification", status: "Active (2026)", verified: true },
        { title: "BLS / ACLS Provider", issuer: "American Heart Association", type: "Certification", status: "Active", verified: true },
        { title: "PALS Provider", issuer: "American Heart Association", type: "Certification", status: "Active", verified: true }
      ]
    },
    {
      id: "tech-cloud",
      name: "David Kim",
      role: "Lead DevOps & Cloud Engineer",
      certCount: 5,
      licenseCount: 0,
      handle: "getpathport.com/p/david-kim",
      bio: "Automating cloud infrastructure, Kubernetes clusters, and CI/CD pipelines.",
      credentials: [
        { title: "AWS Certified Solutions Architect — Professional", issuer: "Amazon Web Services", type: "Cloud Cert", status: "Active", verified: true },
        { title: "CKA — Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", type: "Cloud Cert", status: "Active", verified: true },
        { title: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", type: "Certification", status: "Active", verified: true }
      ]
    }
  ];

  const [selectedId, setSelectedId] = useState<string>("nurse-multi");
  const activeProfile = profiles.find(p => p.id === selectedId) || profiles[1];

  return (
    <section id="portfolio-demo" className="py-24 relative bg-slate-950/70 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-bold text-secondary uppercase tracking-widest">Interactive Showcase</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Works Whether You Have 1 Cert or 15+ Licenses
          </p>
          <p className="text-slate-400 text-base">
            Select a profile below to see how PathPort formats diverse career credentials into a clean, employer-ready passport.
          </p>
        </div>

        {/* Switcher Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {profiles.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`px-5 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 border ${
                selectedId === p.id 
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white border-teal-400/50 shadow-glowTeal scale-[1.02]' 
                  : 'glass-card text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{p.name} ({p.certCount + p.licenseCount} Credential{p.certCount + p.licenseCount > 1 ? 's' : ''})</span>
            </button>
          ))}
        </div>

        {/* Live Profile Card Render */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-white/15 shadow-glass">
          
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display font-bold text-2xl text-white">{activeProfile.name}</h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold border border-teal-500/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Passport
                </span>
              </div>
              <p className="text-slate-300 font-medium text-sm mt-1">{activeProfile.role}</p>
              <p className="text-slate-400 text-xs mt-0.5">{activeProfile.bio}</p>
            </div>

            <div className="text-left sm:text-right">
              <span className="font-mono text-xs text-teal-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 inline-block">
                {activeProfile.handle}
              </span>
              {activeProfile.ceusCompleted && (
                <p className="text-xs text-amber-400 font-semibold mt-2">
                  CEU Compliance: {activeProfile.ceusCompleted}
                </p>
              )}
            </div>
          </div>

          {/* Credentials List */}
          <div className="py-6 space-y-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Verified Credential Vault ({activeProfile.credentials.length})
            </h4>

            <div className="space-y-3">
              {activeProfile.credentials.map((cred, idx) => (
                <div key={idx} className="p-4 rounded-xl glass-card border border-slate-800 flex items-center justify-between hover:border-teal-500/30 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">{cred.title}</div>
                      <div className="text-xs text-slate-400">{cred.issuer} • <span className="text-slate-300 font-medium">{cred.type}</span></div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {cred.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Public link available via web, QR code, or PDF export</span>
            </div>

            <a 
              href="https://app.getpathport.com/auth?signup=true"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors border border-slate-700"
            >
              <span>Build A Portfolio Like This</span>
              <ExternalLink className="w-4 h-4 text-teal-400" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
