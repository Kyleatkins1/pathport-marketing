import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Building2, ShieldAlert, BarChart3, Users, ArrowRight } from 'lucide-react';

export const EnterpriseFunnel: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Navbar />

      <main className="py-16 md:py-24 relative bg-ambient-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/30">
              <Building2 className="w-4 h-4 text-amber-400" />
              WORKFORCE COMPLIANCE & LAPSE PREVENTION
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Real-Time Workforce Credential Tracking for <span className="text-gradient-gold">Teams & Enterprises</span>
            </h1>

            <p className="text-slate-300 text-lg">
              Eliminate spreadsheet chaos and license lapse fines. PathPort Org Mode provides clinics, hospitals, EMS agencies, and training programs a unified dashboard for all employee credentials.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:enterprise@getpathport.com?subject=PathPort%20Org%20Demo" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-secondary via-amber-500 to-amber-600 text-white font-bold text-base shadow-glowGold hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Enterprise Org Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Expiration Lapse Alerts</h3>
              <p className="text-slate-300 text-sm">
                Receive proactive notifications 90, 60, and 30 days before employee state licenses or specialty certs expire.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Accreditation Audit Export</h3>
              <p className="text-slate-300 text-sm">
                Generate instant compliance reports for state inspectors, Joint Commission, or NREMT accreditation audits.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bulk Verification & Roles</h3>
              <p className="text-slate-300 text-sm">
                Manage team rosters, assign role-based requirement templates, and verify staff credentials with zero friction.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
