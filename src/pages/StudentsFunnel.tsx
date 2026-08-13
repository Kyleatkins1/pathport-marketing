import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GraduationCap, ArrowRight, Award, Share2 } from 'lucide-react';

export const StudentsFunnel: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Navbar />

      <main className="py-16 md:py-24 relative bg-ambient-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/30">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              STUDENT & EARLY CAREER PASSPORT
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Build Your Digital Achievement Portfolio <span className="text-gradient-teal">Free with .edu</span>
            </h1>

            <p className="text-slate-300 text-lg">
              Stand out to college admissions and recruiters. Consolidate academic honors, certifications, micro-badges, and project achievements into one shareable link.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.getpathport.com/auth?signup=true&student=true" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-teal-500 to-cyan-500 text-white font-bold text-base shadow-glowTeal hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Claim Free Student Pro Access</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Free Pro for .edu Email</h3>
              <p className="text-slate-300 text-sm">
                Verify your high-school or college `.edu` email to unlock unlimited achievement storage and AI resume parsing for free.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">All Achievements in One Place</h3>
              <p className="text-slate-300 text-sm">
                Combine AP courses, Google/Coursera certificates, CPR cards, Honor Society memberships, and trade badges in one passport.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Shareable QR Code & Link</h3>
              <p className="text-slate-300 text-sm">
                Attach your custom link (`getpathport.com/p/yourname`) or print your QR code on college applications and resume headers.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
