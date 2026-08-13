import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Award, ArrowRight, Cpu, Share2 } from 'lucide-react';

export const ProjectManagersFunnel: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Navbar />

      <main className="py-16 md:py-24 relative bg-ambient-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold border border-teal-500/30">
              <Award className="w-4 h-4 text-teal-300" />
              PROJECT MANAGEMENT & TECH CERT VAULT
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Track PMP® PDUs & Badges for <span className="text-gradient-teal">Project & Tech Leaders</span>
            </h1>

            <p className="text-slate-300 text-lg">
              Auto-sync Credly & Open Badges for PMP®, PMI-ACP®, AWS, and Scrum certifications. Track 60 PDU CCR cycles and showcase a verified digital portfolio.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.getpathport.com/auth?signup=true&profession=pmp" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-base shadow-glowTeal hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Start Free PMP Vault</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Credly & Open Badges Auto-Sync</h3>
              <p className="text-slate-300 text-sm">
                Connect your Credly account or Open Badges URL to automatically sync AWS, PMI, Cisco, and CompTIA badges in one location.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">PMI CCR PDU Tracker</h3>
              <p className="text-slate-300 text-sm">
                Track your 60 PDU 3-year cycle across Technical, Leadership, and Business strategy talent triangle categories.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">LinkedIn & Resume Portfolio Link</h3>
              <p className="text-slate-300 text-sm">
                Add a clean verified link (`getpathport.com/p/yourname`) to your LinkedIn bio and resume header for recruiters.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
