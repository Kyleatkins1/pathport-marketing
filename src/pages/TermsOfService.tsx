import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FileText } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-slate-200 pb-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <FileText className="w-4 h-4 text-emerald-700" />
              VERITAS TECHNOLOGY SOLUTIONS, LLC
            </span>
            <h1 className="text-4xl font-display font-extrabold text-slate-900">Terms of Service</h1>
            <p className="text-slate-500 text-xs font-medium">Last Updated: August 14, 2026</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using PathPort, you agree to be bound by these Terms of Service provided by <strong>Veritas Technology Solutions, LLC</strong>.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900">2. Description of Service</h2>
              <p>
                PathPort provides a living professional identity and evidence platform, CE renewal tracking, structured case studies, tailored portfolios, and career path progression analysis. Users remain solely responsible for ensuring their individual licenses and certifications remain active and compliant with governing authorities.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900">3. User Representation & Authenticity</h2>
              <p>
                You represent and warrant that you hold legitimate rights to all licenses, certificates, case studies, and evidence uploaded to your account. Uploading fraudulent or falsified professional credentials is strictly prohibited and will result in immediate account termination.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900">4. Beta Program Terms</h2>
              <p>
                During the Beta phase, individual features are provided with founding cohort benefits. Features and functionality may be improved or updated based on user feedback.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
