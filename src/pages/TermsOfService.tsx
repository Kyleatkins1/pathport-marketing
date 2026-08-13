import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FileText } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Navbar />

      <main className="py-16 md:py-24 relative bg-ambient-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="border-b border-slate-800 pb-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/30">
              <FileText className="w-4 h-4 text-amber-400" />
              VERITAS TECHNOLOGY SOLUTIONS, LLC
            </span>
            <h1 className="text-4xl font-extrabold text-white">Terms of Service & Mobile App TOS</h1>
            <p className="text-slate-400 text-sm">Last Updated: August 13, 2026</p>
          </div>

          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the PathPort web platform or mobile applications (iOS and Android), you agree to be bound by these Terms of Service ("Terms") provided by <strong>Veritas Technology Solutions, LLC</strong> ("Company", "we", "us", or "our"), available at <a href="https://veritastech.io" target="_blank" rel="noreferrer" className="text-teal-300 hover:underline">veritastech.io</a>. If you do not agree to these Terms, do not use the Platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">2. Description of Service</h2>
              <p>
                PathPort provides a digital credential passport, CEU tracking engine, AI OCR resume/certificate parser, and digital portfolio sharing platform. While PathPort assists in calculating state licensing rules and tracking renewal dates, users remain solely responsible for ensuring their individual licenses and certifications remain active and compliant with governing boards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">3. Mobile Application Terms & App Store Compliance</h2>
              <p>The following terms apply specifically to your use of PathPort mobile applications downloaded via the Apple App Store or Google Play Store:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>App Store Compatibility:</strong> You acknowledge that these Terms are between you and Veritas Technology Solutions, LLC, and not with Apple Inc. or Google LLC. Apple and Google are not responsible for the app or its content.</li>
                <li><strong>Mobile Subscriptions & In-App Purchases:</strong> Subscriptions purchased via mobile apps will be charged to your iTunes / Apple ID or Google Play account upon confirmation of purchase. Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.</li>
                <li><strong>Device Permissions:</strong> PathPort mobile apps may request access to your device camera (for document scanning & QR codes), photo library (for image upload), and push notifications (for license expiration alerts). You may manage these permissions in your mobile OS settings.</li>
                <li><strong>Offline Vault & Local Caching:</strong> Mobile apps may store encrypted local copies of your credentials on your device for offline access. You are responsible for maintaining device security (PIN, FaceID, TouchID) to protect local passport data.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. User Accounts & Verification</h2>
              <p>
                You must provide accurate information when creating an account. You represent and warrant that you hold legitimate rights to all licenses, certificates, and research documents uploaded to your account. Uploading fraudulent or falsified professional credentials is strictly prohibited and will result in immediate account termination.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. Subscriptions & Founding Member Pricing</h2>
              <p>
                PathPort offers Free Vault accounts and Pro Passport subscriptions ($8/month or $79/year). Qualifying Founding Members receive locked rates of $49/year for 2 years. Enterprise Org plans are billed per user. Refunds are managed according to the platform or store (Apple/Google/Stripe) through which the purchase was completed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Veritas Technology Solutions, LLC shall not be liable for any indirect, incidental, or consequential damages resulting from lost license status, regulatory board decisions, or unauthorized access arising from user negligence.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-800">
              <h2 className="text-xl font-bold text-white">7. Governing Law & Contact</h2>
              <p>
                These Terms are governed by the laws of the United States. For questions or legal inquiries, contact <a href="mailto:legal@veritastech.io" className="text-teal-300 hover:underline">legal@veritastech.io</a> or visit <a href="https://veritastech.io" target="_blank" rel="noreferrer" className="text-teal-300 hover:underline">veritastech.io</a>.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
