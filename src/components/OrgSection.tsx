import React, { useState } from 'react';
import { Building2, Award, ShieldCheck, Users, CheckCircle2, ArrowRight, Lock, FileText, Activity } from 'lucide-react';

export const OrgSection: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'teams' | 'certify'>('teams');

  return (
    <section id="ecosystem" className="py-24 relative bg-ambient-grid overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold border border-teal-500/30">
            <Building2 className="w-4 h-4 text-secondary" />
            <span>THE PATHPORT ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Built For Individuals, Employers & Certification Bodies
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A single unified identity standard serving the three corners of the professional credential ecosystem.
          </p>

          {/* Segment Toggle Buttons */}
          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveSegment('teams')}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                activeSegment === 'teams'
                  ? 'bg-teal-500 text-slate-950 shadow-glowTeal'
                  : 'glass-card border border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>For Employers (PathPort Teams)</span>
            </button>

            <button
              onClick={() => setActiveSegment('certify')}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                activeSegment === 'certify'
                  ? 'bg-teal-500 text-slate-950 shadow-glowTeal'
                  : 'glass-card border border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>For Certification Bodies (PathPort Certify)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Ecosystem Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-teal-500/30 relative overflow-hidden shadow-glowTeal">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {activeSegment === 'teams' ? (
            /* Teams View */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-teal-300 text-xs font-mono">
                  <span>teams.getpathport.com</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Workforce Credential Compliance.{' '}
                  <span className="text-gradient-teal block mt-1">Zero License Lapses with Privacy Firewalls.</span>
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  Know exactly what your workforce needs to remain legally deployable without invading employee privacy. Employers see only the credentials required for each worker's role — leaving personal case studies, goals, and unrelated credentials private.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 mt-0.5">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">30 / 60 / 90-Day Risk Radar</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Proactive alerts before clinicians or engineers reach renewal deficiency.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mt-0.5">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Strict Privacy Firewall</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Postgres RLS ensures employers only access role-assigned requirements.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a 
                    href="mailto:sales@getpathport.com?subject=PathPort%20Teams%20Workspace%20Inquiry"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-sm shadow-glowTeal hover:scale-[1.02] transition-all border border-teal-400/30"
                  >
                    <span>Request Teams Workspace Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Graphic Preview */}
              <div className="lg:col-span-5">
                <div className="glass-card rounded-2xl p-6 border border-slate-700 bg-slate-900/90 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-teal-400" />
                      <span className="font-bold text-white text-sm">Metro EMS Roster (48 Clinicians)</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      98.2% Compliant
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">Alex Chen, Paramedic</div>
                        <div className="text-slate-400 text-[11px]">NREMT • State NRP • ACLS</div>
                      </div>
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Compliant
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">Sarah Connor, RN</div>
                        <div className="text-slate-400 text-[11px]">CEU Renewal Due in 45 Days</div>
                      </div>
                      <span className="text-amber-400 font-medium">Renewal In Progress</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">Marcus Vance, Lead Paramedic</div>
                        <div className="text-slate-400 text-[11px]">PHTLS • EVOC • NRP</div>
                      </div>
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Compliant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Certify View */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-teal-300 text-xs font-mono">
                  <span>certify.getpathport.com</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  You Define the Credential.{' '}
                  <span className="text-gradient-teal block mt-1">PathPort Runs the Program Lifecycle.</span>
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  Empower your certifying body, association, or board with a unified reviewer workspace. Automate multi-year renewal cycles, review CE submissions with AI document extraction, and issue authoritative verifiable digital credentials.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Reviewer Queue & Split View</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Review certificate evidence side-by-side with 1-click Approve or Request Info.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Credly & Badging Sync</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Authoritative issuer-verified status automatically propagates across PathPort.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a 
                    href="mailto:certify@getpathport.com?subject=PathPort%20Certify%20Platform%20Inquiry"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-sm shadow-glowTeal hover:scale-[1.02] transition-all border border-teal-400/30"
                  >
                    <span>Partner as a Certifying Body</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Graphic Preview */}
              <div className="lg:col-span-5">
                <div className="glass-card rounded-2xl p-6 border border-slate-700 bg-slate-900/90 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-teal-400" />
                      <span className="font-bold text-white text-sm">NREMT Reviewer Queue</span>
                    </div>
                    <span className="text-xs font-mono text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
                      4 Pending
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-teal-500/30 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">Advanced Airway Lab (4.0 hrs)</div>
                        <div className="text-slate-400 text-[11px]">Submitted by Alex Chen • Airway Cat.</div>
                      </div>
                      <span className="text-teal-300 font-semibold bg-teal-500/20 px-2 py-1 rounded text-[11px]">
                        Reviewing
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">Pediatric Resuscitation (8.0 hrs)</div>
                        <div className="text-slate-400 text-[11px]">Submitted by David Kim • PALS Cat.</div>
                      </div>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Approved
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
