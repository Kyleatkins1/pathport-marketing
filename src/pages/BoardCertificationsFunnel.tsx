import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Award, ArrowRight, ShieldCheck, Presentation, FileCode, CheckCircle2, Layers } from 'lucide-react';

export const BoardCertificationsFunnel: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Navbar />

      <main className="py-16 md:py-24 relative bg-ambient-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Tag */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/30">
              <Award className="w-4 h-4 text-amber-400" />
              BOARD CERTIFIED SPECIALISTS & RESEARCHERS
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Stop Juggling 10 Logins.{' '}
              <span className="text-gradient-gold block mt-2">Board Certs, Posters & Projects in One Passport.</span>
            </h1>

            <p className="text-slate-300 text-lg">
              Combine your Board Certifications (ANCC, ABMS, BCEN, NBCRNA, PE, PMP) with real-world project proof, conference posters, and presentations — formatted into tailored digital portfolios.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.getpathport.com/auth?signup=true&profession=board_certified" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-secondary via-amber-500 to-amber-600 text-white font-bold text-base shadow-glowGold hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Build Your Board Passport — Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Pain Point vs PathPort Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            
            {/* Pain Point Card */}
            <div className="glass-card rounded-2xl p-8 border border-red-500/30 bg-gradient-to-b from-red-500/5 via-slate-900 to-slate-950">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span>The Credential Chaos (Before PathPort)</span>
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>5-10 Portal Logins:</strong> Juggling separate state board accounts, specialty board portals, and CEU tracking sites.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>Generic Paper Resumes:</strong> Resumes list cert initials (e.g. CCRN® or PMP®) but fail to show the actual projects, research, or clinical impact behind them.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>Lost Posters & Keynotes:</strong> Conference presentations, research posters, and grand rounds slides scattered across hard drives.</span>
                </li>
              </ul>
            </div>

            {/* PathPort Solution Card */}
            <div className="glass-card rounded-2xl p-8 border border-teal-500/40 bg-gradient-to-b from-teal-500/10 via-slate-900 to-slate-950 shadow-glowTeal">
              <h3 className="text-xl font-bold text-teal-300 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <span>The PathPort Solution (All-in-One Passport)</span>
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>One Centralized Vault & Smart Reminders:</strong> Proactive 90/60/30-day alerts for all board cert renewals and state requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Project Proof Attachments:</strong> Link real-world clinical cases, engineering projects, or code repositories directly to specific certifications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Conference Posters & Presentations Gallery:</strong> Dedicated showcase for research posters, keynotes, and published papers.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Feature Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <Presentation className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Conference Posters & Keynotes</h3>
              <p className="text-slate-300 text-sm">
                Upload and display high-res PDF research posters, symposium slides, and speaking engagements alongside your board credentials.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-6">
                <FileCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Project Proof Reinforcement</h3>
              <p className="text-slate-300 text-sm">
                Attach case studies, whitepapers, or project repos to specific certs so employers see the tangible proof of your expertise.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tailored Portfolios Like Resumes</h3>
              <p className="text-slate-300 text-sm">
                Create custom profile links tailored for specific opportunities — e.g. a Clinical Consulting Portfolio vs a Speaking Portfolio.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card rounded-3xl p-10 text-center border border-amber-500/30 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 shadow-glowGold">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Consolidate Your Board Certifications & Research?</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">Free forever for basic credential storage, project attachments, and digital portfolio sharing.</p>
            <a 
              href="https://app.getpathport.com/auth?signup=true"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-secondary via-amber-500 to-amber-600 text-white font-bold text-sm shadow-glowGold hover:scale-105 transition-all"
            >
              <span>Build Your Board Passport Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
