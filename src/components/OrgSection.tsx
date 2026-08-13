import React from 'react';
import { Building2, ShieldAlert, Users, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

export const OrgSection: React.FC = () => {
  return (
    <section id="organizations" className="py-24 relative bg-ambient-grid overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-teal-500/30 relative overflow-hidden shadow-glowTeal">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold border border-teal-500/30">
                <Building2 className="w-4 h-4 text-secondary" />
                <span>ENTERPRISE & WORKFORCE COMPLIANCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                PathPort for Organizations:{' '}
                <span className="text-gradient-teal block mt-1">Zero License Lapses. Complete Visibility.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Replace manual spreadsheets and frantic renewal checks. PathPort Org Mode provides healthcare facilities, engineering firms, and emergency service providers a real-time dashboard of all workforce credentials, active state licenses, and CEU progress.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 mt-0.5">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Lapse Prevention Alerts</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Automatic 90, 60, and 30-day expiration notifications before licenses expire.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 mt-0.5">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Real-Time Auditing</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Export instant compliance reports for accrediting boards and state auditors.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="mailto:enterprise@getpathport.com?subject=PathPort%20Org%20Demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-sm shadow-glowTeal hover:scale-[1.02] transition-all border border-teal-400/30"
                >
                  <span>Request Enterprise Org Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-2xl p-6 border border-slate-700 bg-slate-900/90 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-teal-400" />
                    <span className="font-bold text-white text-sm">Workforce Roster (48 Staff)</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    98.2% Compliant
                  </span>
                </div>

                {/* Sample Roster items */}
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Dr. Robert Chen, MD</div>
                      <div className="text-slate-400 text-[11px]">State License • Board Cert</div>
                    </div>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Compliant
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Elena Rostova, RN</div>
                      <div className="text-slate-400 text-[11px]">CEU Renewal Due in 45 Days</div>
                    </div>
                    <span className="text-amber-400 font-medium">Renewal In Progress</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">James Miller, PMP</div>
                      <div className="text-slate-400 text-[11px]">PMI PMP Certification</div>
                    </div>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Compliant
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-center text-slate-400 text-[11px] font-semibold tracking-wider uppercase">
                  UPDATED REAL-TIME VIA PATHPORT CORE
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
