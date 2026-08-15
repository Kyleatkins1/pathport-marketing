import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { 
  GraduationCap, ArrowRight, Award, Share2, Briefcase, 
  Sparkles, Compass, TrendingUp, BookOpen, 
  CheckCircle2, FileText 
} from 'lucide-react';

import { SEO } from '../components/SEO';

export const StudentsFunnel: React.FC = () => {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'undergrad' | 'grad' | 'switcher'>('grad');

  const roleDetails = {
    undergrad: {
      title: "Undergraduates & Capstone Projects",
      description: "Turn coursework, team hackathons, capstones, and summer internships into verified, tangible case studies with code links and working demonstrations.",
      highlight: "Stand out to hiring managers with structured proof instead of sparse 1-page bullet points."
    },
    grad: {
      title: "Graduate Research, Pre-Med & Fellowship Fellows (MS, PhD, Pre-Doc)",
      description: "Document published papers, conference presentations, clinical trial protocols (GCP), and lab research assays in a lifelong portable portfolio.",
      highlight: "Object-linked publications with DOI links and measurable experimental sensitivity metrics."
    },
    switcher: {
      title: "Career Switchers & Micro-Certification Learners",
      description: "Translate past industry experience into new domain capabilities. Consolidate AWS certifications, Google certificates, and bootcamp projects.",
      highlight: "PathAI Pivot Mapping bridging your prior experience to target roles."
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="PathPort for Students & Early Career — Capstone Evidence & Research"
        description="Don't wait until graduation for a sparse 1-page résumé. Document capstones, lab research, and micro-certifications in a living digital portfolio."
      />
      <Navbar />

      <main className="py-16 md:py-24 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <GraduationCap className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              STUDENT & EARLY CAREER EVIDENCE RECORD
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Your First Résumé Isn't the Whole Story.{' '}
              <span className="text-teal-800 dark:text-teal-400 block sm:inline-block">Capstones, Lab Proof & PathAI.</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Don't wait until graduation to assemble a sparse 1-page résumé. Document capstone projects, lab research, internships, and micro-certifications in a verified digital portfolio.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-sm shadow-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register for Student Beta Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Across All Disciplines: Undergrad, Grad Research & Career Switchers */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Built for Every Stage of Early Career Growth
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                From undergraduate capstones to published post-graduate research and career transitions.
              </p>
            </div>

            {/* Role Switcher */}
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                onClick={() => setSelectedRole('undergrad')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'undergrad'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Undergraduates & Capstones</span>
              </button>

              <button
                onClick={() => setSelectedRole('grad')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'grad'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Grad Research & Pre-Med</span>
              </button>

              <button
                onClick={() => setSelectedRole('switcher')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRole === 'switcher'
                    ? 'bg-teal-800 text-white border-teal-800 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Career Switchers & Bootcamps</span>
              </button>
            </div>

            {/* Active Role Content Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {roleDetails[selectedRole].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {roleDetails[selectedRole].description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{roleDetails[selectedRole].highlight}</span>
              </div>
            </div>
          </div>

          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Capstone & Lab Case Studies
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Turn coursework, GitHub repositories, and design projects into structured case studies with code links and media artifacts.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Micro-Credentials & Degrees
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Log AWS certs, Coursera specializations, university degrees, and academic honors with verified digital proof.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Tailored Recruiter Portfolios
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Stand out from generic applicants with customized `/p/your-name` links showcasing real-world problem solving.
              </p>
            </div>
          </div>

          {/* PathAI Spotlight: Early Career Advisor */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-teal-800/80 dark:border-teal-500 shadow-md space-y-8 transition-colors">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>PATHAI • EARLY CAREER & RESIDENCY ADVISOR</span>
              </div>

              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Meet PathAI: Bridging Academic Projects to Your First High-Impact Role
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Graduating without 5 years of experience shouldn't hold you back. PathAI converts academic coursework and lab assays into structured engineering or clinical evidence, and maps the exact prerequisite gaps to land your target residency or junior role.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <Compass className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Role Matching</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Compares your coursework and capstones directly against real-world job requirements to calculate your capability readiness.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <TrendingUp className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Prerequisite Gap Math</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Identifies high-leverage micro-certifications (e.g. AWS Cloud Practitioner, GCP ethics) to close hiring requirements fast.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                  <FileText className="w-5 h-5 text-teal-800 dark:text-teal-400" />
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Project Case Study Drafter</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Turns raw GitHub repos, lab notes, and capstone results into tangible, evidence-backed case studies that impress interviewers.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Free for life: All individual beta members keep full access indefinitely.
                </div>
                <button
                  onClick={() => setIsBetaModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Experience PathAI for Students</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-4">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Start building your proof early.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Join students and early career professionals from top engineering, medical, and nursing institutions.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsBetaModalOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Register for Free Beta Access
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
