import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { GraduationCap, ArrowRight, Award, Share2, Briefcase } from 'lucide-react';

export const StudentsFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              STUDENT & EARLY CAREER EVIDENCE RECORD
            </span>

            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Your First Résumé Isn't the Whole Story.{' '}
              <span className="text-teal-800 block mt-1">Capture Projects, Research & Skills.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Don't wait until graduation to assemble a sparse 1-page résumé. Document capstone projects, lab research, internships, and micro-certifications as they happen in a verified digital record.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Register for Student Beta Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Capstone & Lab Case Studies
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Turn coursework, GitHub repositories, and design projects into structured case studies with code links and media artifacts.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Degrees, Badges & Micro-Certs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Combine university coursework, Google/Coursera certifications, honor society awards, and clinical competencies in one verifiable record.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Tailored Internship Portfolios
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Create dedicated links for research labs, startup applications, or corporate internship programs that show actual work.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-2xl font-display font-extrabold text-slate-900">
              Join Founding Students & Graduates
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
              Build your living professional identity during your studies and stand out to hiring managers with tangible proof.
            </p>
            <div>
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs transition-all"
              >
                <span>Register for Student Beta Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <BetaRegistrationModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        defaultAudience="Student / Early Career"
        source="students_funnel"
      />
    </div>
  );
};

export default StudentsFunnel;
