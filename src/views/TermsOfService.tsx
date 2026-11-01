import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { FileText, AlertTriangle, CheckCircle2, CreditCard, Smartphone, ShieldAlert } from 'lucide-react';
import { SEO } from '../components/SEO';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO 
        title="PathPort — Terms of Service & Mobile App License"
        description="PathPort Terms of Service by Veritas Technology Solutions, LLC. Covers PathPort Individual, Identity Tracker, MyPortfolio, MyPath, Workplace, Certify, and iOS/Android Mobile Apps."
      />
      <Navbar />
      <BetaRegistrationModal />

      <main id="main-content" tabIndex={-1} className="py-16 md:py-24 focus:outline-none">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <FileText className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              VERITAS TECHNOLOGY SOLUTIONS, LLC
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Terms of Service
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span>Effective Date: November 1, 2026</span>
              <span>•</span>
              <span>Last Updated: November 1, 2026</span>
              <span>•</span>
              <span>Applies to Web, iOS &amp; Android Apps</span>
            </div>
          </div>

          {/* Key Terms Summary Banner */}
          <div className="bg-slate-900 dark:bg-slate-900/90 text-slate-200 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <h2 className="text-base sm:text-lg font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              Plain-English Summary of Key Terms
            </h2>
            <p className="text-xs text-slate-400">
              This summary is provided for convenience; the full numbered sections below form the legally binding contract:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/70">
                <strong className="text-white block mb-1">1. You Own Your Record:</strong>
                You retain 100% ownership of all credentials, personal IDs, case studies, and files you upload. Your employer never owns your personal PathPort account.
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/70">
                <strong className="text-white block mb-1">2. Not a Government ID or Statutory Board:</strong>
                Tracking a Driver&apos;s License, Passport, or professional license in PathPort is for personal organization and portfolio sharing—not an official government mDL, border travel document, or statutory board filing substitute.
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/70">
                <strong className="text-white block mb-1">3. Human-in-the-Loop Verification:</strong>
                PathAI smart-suggests extracted metadata and CE requirement buckets, but you are responsible for reviewing and confirming the accuracy of your records.
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/70">
                <strong className="text-white block mb-1">4. Transparent Billing &amp; Cancellation:</strong>
                Cancel Web subscriptions anytime in Billing Settings, or iOS/Android subscriptions in Apple App Store / Google Play settings. Your uploaded data is never deleted if a trial or subscription ends.
              </div>
            </div>
          </div>

          {/* Main Terms Body */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs space-y-8 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed transition-colors">

            {/* 1. Agreement & Eligibility */}
            <section className="space-y-3" id="agreement">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                1. Acceptance of Terms &amp; Eligibility
              </h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a binding legal agreement between you (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and <strong>Veritas Technology Solutions, LLC</strong> (&ldquo;Veritas,&rdquo; &ldquo;PathPort,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) governing your access to and use of the PathPort websites (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">getpathport.com</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">app.getpathport.com</code>), our iOS and Android mobile applications (collectively, the &ldquo;Mobile Apps&rdquo;), and all related services (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p>
                By creating an account, downloading a Mobile App, or using the Services, you agree to these Terms and our <a href="/privacy" className="text-teal-800 dark:text-teal-400 font-semibold underline">Privacy Policy</a>. You must be at least <strong>16 years of age</strong> to create a PathPort account, and at least <strong>18 years of age</strong> (or the age of legal majority in your jurisdiction) to purchase a paid subscription or bind an organization to <strong>PathPort Workplace</strong> or <strong>PathPort Certify</strong>.
              </p>
            </section>

            {/* 2. Ecosystem & Services */}
            <section className="space-y-3" id="services">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                2. The PathPort Ecosystem &amp; Services
              </h2>
              <p>
                PathPort is a universal credential tracker, encrypted document vault, verifiable portfolio platform, and career intelligence workspace built for anyone who holds credentials or identity documents across any industry:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>PathPort Individual (Essentials &amp; Pro):</strong> Credential, license, certification, degree, and continuing education (CE/CEU/CME/PDU) tracking, multi-category renewal rule workspaces, SHA-256 document vault, and multi-source ingestion (PDF, resume, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">@in.getpathport.com</code> Email-to-Vault, badge sync, and scholarly imports).</li>
                <li><strong>Personal Identity Documents Tracker ($0 Free Tier):</strong> Private expiration tracking and encrypted vault reminders for everyday personal identity documents, including Driver&apos;s Licenses, REAL IDs, Passports, Global Entry / TSA PreCheck cards, and Vehicle Registrations.</li>
                <li><strong>MyPortfolio:</strong> Permissioned, shareable professional views (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Public</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Unlisted</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Private</code>), structured case studies, projects, immutable submission snapshots, and custom domain presentations.</li>
                <li><strong>MyPath, PathAI &amp; MyInterview:</strong> AI-assisted document parsing, career path progression modeling, What-If Role Audits, Application &amp; Interview Studio, and interactive voice/audio mock interview coaching.</li>
                <li><strong>PathPort Workplace:</strong> Workforce compliance management allowing organizations to select required credentials, send zero-email compliance requests to employees (who respond from their free or paid PathPort profiles), monitor team compliance, and assign CEUs to training attendees.</li>
                <li><strong>PathPort Certify:</strong> End-to-end credential management for certifying boards and associations, enabling candidates to apply for credentials, submit documents, pay application fees, connect exam results from official test platforms or partners, receive digital badges through supported badge providers, and manage ongoing recertifications inside PathPort.</li>
              </ul>
            </section>

            {/* 3. Critical Disclaimers: Government ID & Regulatory Boards */}
            <section className="space-y-3" id="regulatory-disclaimers">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                  3. Important Disclaimers: Not an Official Government ID or Statutory Board Substitute
                </h2>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/70 space-y-2.5 text-slate-800 dark:text-slate-200">
                <p>
                  <strong>A. Personal Identity Documents Are for Personal Tracking &amp; Backup Only:</strong> Storing metadata, expiration dates, or digital scans of a Driver&apos;s License, REAL ID, Passport, Global Entry / TSA PreCheck card, or Vehicle Registration inside PathPort is strictly for your personal organization, encrypted backup, and renewal reminder convenience. <strong>PathPort is NOT a government-issued Mobile Driver&apos;s License (mDL), official digital passport, or legally valid identification document.</strong> You cannot present PathPort as official government identification for law enforcement, TSA airport security checkpoints, international border crossings, voting, or statutory age verification. Always carry your physical government-issued documents where required by law.
                </p>
                <p>
                  <strong>B. Professional Licensure &amp; Statutory State Reporting Responsibility:</strong> Unless you are submitting directly to an official partnering certifying body through <strong>PathPort Certify</strong>, PathPort is an independent, individual-owned record and compliance workspace—not a government licensing agency or statutory state reporting portal. Where a state board mandates final submission through a state-contracted portal or government website, PathPort helps you organize your hours and export audit-ready packets, but <strong>you remain solely and exclusively responsible for verifying current renewal rules with your governing board, submitting official renewal applications prior to expiration, and maintaining active legal authority to practice your profession.</strong>
                </p>
                <p>
                  <strong>C. Career &amp; AI Guidance Is Informational Only:</strong> Roadmaps, What-If Role Audits, salary/wage benchmarks (derived from public USDOL CareerOneStop and Bureau of Labor Statistics data), and interview coaching inside <strong>MyPath / PathAI / MyInterview</strong> are provided for informational and educational planning only and do not constitute legal, regulatory, financial, or guaranteed employment advice.
                </p>
              </div>
            </section>

            {/* 4. AI Extraction & Human-in-the-Loop */}
            <section className="space-y-3" id="ai-human-in-the-loop">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                4. AI Extraction, Smart Suggestions &amp; Human-in-the-Loop Responsibility
              </h2>
              <p>
                PathPort utilizes optical character recognition (OCR) and artificial intelligence (<strong>PathAI</strong>) to extract candidate dates, issuers, license numbers, and credit hours from uploaded resumes, PDF certificates, and <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">@in.getpathport.com</code> emails, and to <strong>smart-suggest</strong> how continuing education hours may satisfy specific credential requirement buckets or roll over into general/elective hours.
              </p>
              <p>
                Automated extraction and rule-mapping suggestions can occasionally misread ambiguous documents or complex regulatory edge cases. Accordingly, PathPort stages extracted items and bucket attributions for your review. <strong>By confirming a staged item or applying CE evidence to a credential requirement, you accept full responsibility for verifying that the underlying certificate, credit hours, accreditation, and category attribution accurately satisfy your governing board&apos;s rules.</strong>
              </p>
            </section>

            {/* 5. Provenance Tiers & Acceptable Use */}
            <section className="space-y-3" id="provenance-and-acceptable-use">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0" />
                <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                  5. Provenance Integrity, Authenticity &amp; Acceptable Use Policy
                </h2>
              </div>
              <p>
                To maintain high trust across employers, recruiters, and certifying boards, PathPort labels every credential and evidence artifact with one of four provenance tiers: <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Self-Reported</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Document-Supported</code> (backed by SHA-256 hashed files), <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Provider-Reported</code> (ingested via <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">@in.getpathport.com</code> or verified badge sync), and <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Issuer-Verified</code> (confirmed via official registry connector or issued directly via <strong>PathPort Certify</strong>).
              </p>
              <p>When using PathPort, you represent, warrant, and agree that you will <strong>NOT</strong>:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Upload Forged or Fraudulent Credentials:</strong> Upload, fabricate, alter, or share falsified licenses, counterfeit CE certificates, manipulated transcripts, or someone else&apos;s credentials or identity documents as your own.</li>
                <li><strong>Misrepresent Licensure Status:</strong> Represent an expired, suspended, revoked, or unverified license as active or <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Issuer-Verified</code>.</li>
                <li><strong>Upload Unredacted Patient PHI / Third-Party Confidential Data:</strong> When authoring clinical, educational, or enterprise case studies in <strong>MyPortfolio</strong>, you must de-identify all third-party Protected Health Information (PHI under HIPAA), student education records (FERPA), or proprietary trade secrets prior to upload.</li>
                <li><strong>Abuse Platform Infrastructure:</strong> Attempt to bypass PostgreSQL Row-Level Security (RLS), scrape public portfolios via automated bots, flood <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">@in.getpathport.com</code> addresses with spam or malware, or reverse-engineer our software.</li>
              </ul>
              <p>
                Violation of these authenticity and acceptable use rules is grounds for immediate revocation of shared portfolio links, suspension or termination of your account, and—where fraudulent professional licensure poses a risk to public safety—cooperation with applicable licensing boards or law enforcement.
              </p>
            </section>

            {/* 6. Ownership & License */}
            <section className="space-y-3" id="ownership">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                6. User Data Ownership, Sovereign Portability &amp; License Grant
              </h2>
              <p>
                <strong>You Own Your Content:</strong> You retain 100% ownership and intellectual property rights in all documents, credential records, identity files, case studies, projects, publications, and media you upload or create in PathPort (&ldquo;User Content&rdquo;).
              </p>
              <p>
                <strong>Limited License to Operate the Service:</strong> You grant Veritas Technology Solutions, LLC a worldwide, non-exclusive, royalty-free, revocable license solely to host, encrypt, compute SHA-256 hashes, parse via our staged extraction pipeline, back up, and display your User Content strictly in accordance with the visibility and sharing permissions (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Private</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Unlisted</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Public</code>, <strong>Workplace</strong> shares, and <strong>Certify</strong> submissions) that you configure. This license automatically ends when you delete the applicable User Content or delete your account.
              </p>
            </section>

            {/* 7. Subscriptions, Trials & Mobile IAP */}
            <section className="space-y-3" id="billing-and-subscriptions">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0" />
                <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                  7. Subscriptions, Free Trials, Auto-Renewal &amp; Mobile In-App Purchases
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Plan Tiers:</strong> PathPort offers a <strong>Free Personal Identity Documents &amp; Workplace Profile Tier ($0)</strong> alongside paid individual subscriptions (<strong>PathPort Essentials</strong> and <strong>PathPort Pro</strong>, billed monthly or annually) and organization plans for <strong>PathPort Workplace</strong> and <strong>PathPort Certify</strong>.
                </li>
                <li>
                  <strong>Reverse Trials, Beta Cohorts &amp; No-Data-Hostage Guarantee:</strong> We may offer a free trial (such as a 14-day Pro reverse trial without requiring a credit card upfront) or Founding Cohort access. If a trial or paid subscription expires without payment, your account transitions to free/read-and-export access for features above your tier limit, but <strong>we never delete or lock away the documents and records you have already uploaded.</strong>
                </li>
                <li>
                  <strong>Automatic Renewal:</strong> Paid monthly and annual subscriptions automatically renew at the end of each billing cycle at the then-current rate unless canceled at least <strong>24 hours prior to the end of the current billing period</strong>.
                </li>
                <li>
                  <strong>How to Manage or Cancel Your Subscription (By Purchase Channel):</strong> Because subscriptions may be purchased on the Web or inside our iOS and Android Mobile Apps (synchronized via <strong>RevenueCat</strong>), you must cancel through the platform where you originally subscribed:
                  <ul className="list-circle pl-5 mt-1.5 space-y-1">
                    <li><strong>Web Purchases (Stripe):</strong> Cancel anytime in <strong>Account Settings &rarr; Billing &amp; Subscription</strong> at <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">app.getpathport.com</code>.</li>
                    <li><strong>Apple App Store Purchases (iOS StoreKit):</strong> Apple processes billing directly. Manage or cancel in your iPhone/iPad <strong>Settings &rarr; [Your Name] &rarr; Subscriptions &rarr; PathPort</strong>.</li>
                    <li><strong>Google Play Purchases (Android):</strong> Google processes billing directly. Manage or cancel in the <strong>Google Play Store app &rarr; Profile Icon &rarr; Payments &amp; subscriptions &rarr; Subscriptions &rarr; PathPort</strong>.</li>
                  </ul>
                </li>
                <li>
                  <strong>Refunds:</strong> Cancellation takes effect at the end of the current paid billing cycle. For Web purchases via Stripe, refund inquiries may be submitted to <a href="mailto:hello@getpathport.com" className="text-teal-800 dark:text-teal-400 font-semibold underline">hello@getpathport.com</a>. For purchases made through the Apple App Store or Google Play Store, refund requests are governed by Apple&apos;s and Google&apos;s respective terms and must be submitted directly to Apple or Google.
                </li>
              </ul>
            </section>

            {/* 8. Workplace & Certify Organization Terms */}
            <section className="space-y-3" id="workplace-and-certify">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                8. Terms for Organizations &amp; Certifying Bodies (PathPort Workplace &amp; Certify)
              </h2>
              <p>
                If you create, claim, or administer an organization workspace in <strong>PathPort Workplace</strong> or <strong>PathPort Certify</strong>, you represent that you have authority to bind that organization, and you agree to the following structural rules:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Individual Account Sovereignty Invariant:</strong> Individual PathPort accounts belong permanently to the individual professionals—not to the employer, hospital, agency, or certifying body. Requesting compliance documents via <strong>Workplace</strong> or processing credential applications via <strong>Certify</strong> grants your organization scoped visibility into the consented records; it never transfers ownership of the individual&apos;s PathPort account or unrelated vault items to your organization.
                </li>
                <li>
                  <strong>PathPort Workplace Compliance &amp; CEU Assignment:</strong> Organizations using <strong>PathPort Workplace</strong> may define required credential checklists, send compliance share requests to employees, monitor real-time expiration alerts, and assign CEUs to verified training attendees. Organizations remain responsible for fulfilling any statutory primary-source verification obligations required by their industry regulators.
                </li>
                <li>
                  <strong>PathPort Certify Authority &amp; Partner Integrations:</strong> Certifying boards and credentialing bodies using <strong>PathPort Certify</strong> are solely responsible for configuring accurate eligibility and recertification rules, setting application/renewal fees, reviewing candidate document and exam-result submissions, authorizing digital badge issuance through connected badge providers, and making all credential approval, audit, or revocation determinations.
                </li>
              </ul>
            </section>

            {/* 9. Apple App Store & Google Play Additional Mobile Terms */}
            <section className="space-y-3" id="mobile-app-store-terms">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0" />
                <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                  9. Mobile Application License &amp; Apple App Store / Google Play Disclosures
                </h2>
              </div>
              <p>
                Subject to your compliance with these Terms, Veritas grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use the PathPort Mobile App on iOS or Android devices that you own or control.
              </p>
              <p>
                <strong>Required Apple Inc. (&ldquo;Apple&rdquo;) &amp; Google LLC (&ldquo;Google&rdquo;) App Store Terms:</strong> When you download our Mobile App from the Apple App Store or Google Play Store, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Parties:</strong> These Terms are concluded solely between you and <strong>Veritas Technology Solutions, LLC</strong>, and not with Apple or Google. Veritas, not Apple or Google, is solely responsible for the PathPort Mobile App and its content.</li>
                <li><strong>Maintenance &amp; Support:</strong> Veritas is solely responsible for providing any maintenance and support services for the Mobile App. Neither Apple nor Google has any obligation whatsoever to furnish maintenance and support services with respect to the Mobile App.</li>
                <li><strong>Warranty &amp; Product Claims:</strong> In the event of any failure of the iOS App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the App to you; to the maximum extent permitted by applicable law, Apple and Google will have no other warranty obligation or liability whatsoever with respect to the Mobile App (including product liability, consumer protection, or intellectual property infringement claims).</li>
                <li><strong>U.S. Export &amp; Sanctions Compliance:</strong> You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &ldquo;terrorist supporting&rdquo; country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.</li>
                <li><strong>Third-Party Beneficiary:</strong> You acknowledge and agree that Apple, and Apple&apos;s subsidiaries, are third-party beneficiaries of these Terms as related to your license of the iOS App, and that upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary thereof.</li>
              </ul>
            </section>

            {/* 10. Intellectual Property */}
            <section className="space-y-3" id="intellectual-property">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                10. Veritas Intellectual Property &amp; Feedback
              </h2>
              <p>
                Excluding your User Content, the PathPort platform—including our software architecture, multi-category renewal rule engines, user interface design, logos, and product names (<strong>PathPort</strong>, <strong>MyPortfolio</strong>, <strong>MyPath</strong>, <strong>PathAI</strong>, <strong>MyInterview</strong>, <strong>PathPort Workplace</strong>, and <strong>PathPort Certify</strong>)—is owned by <strong>Veritas Technology Solutions, LLC</strong> and protected by United States and international copyright, trademark, trade secret, and intellectual property laws. If you submit product suggestions or feedback, you grant Veritas an irrevocable, royalty-free license to incorporate that feedback into our products without obligation to you.
              </p>
            </section>

            {/* 11. Disclaimers & Limitation of Liability */}
            <section className="space-y-3" id="liability">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                11. Disclaimers of Warranties &amp; Limitation of Liability
              </h2>
              <p className="uppercase text-[11px] sm:text-xs leading-relaxed">
                THE SERVICES AND MOBILE APPS ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VERITAS TECHNOLOGY SOLUTIONS, LLC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT AI EXTRACTIONS, RENEWAL RULE CALCULATIONS, OR THIRD-PARTY REGISTRY SYNCS WILL BE UNINTERRUPTED OR ERROR-FREE.
              </p>
              <p className="uppercase text-[11px] sm:text-xs leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL VERITAS TECHNOLOGY SOLUTIONS, LLC, ITS OFFICERS, MEMBERS, EMPLOYEES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF LICENSURE, LOST WAGES, MISSED RENEWAL DEADLINES, OR EMPLOYMENT DECISIONS), OR FOR AGGREGATE DIRECT DAMAGES EXCEEDING THE GREATER OF (A) THE TOTAL AMOUNT PAID BY YOU TO VERITAS IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR (B) ONE HUNDRED U.S. DOLLARS ($100.00).
              </p>
            </section>

            {/* 12. Indemnification, Governing Law & Contact */}
            <section className="space-y-3" id="governing-law-and-contact">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                12. Indemnification, Governing Law, Updates &amp; Contact
              </h2>
              <p>
                <strong>Indemnification:</strong> You agree to indemnify and hold harmless Veritas Technology Solutions, LLC from and against any third-party claims, liabilities, damages, and expenses (including reasonable attorneys&apos; fees) arising out of your breach of these Terms, your upload of fraudulent or infringing credentials, or your violation of applicable law or licensing regulations.
              </p>
              <p>
                <strong>Dispute Resolution &amp; Governing Law:</strong> Before initiating any formal legal proceeding, you agree to contact us at <a href="mailto:legal@getpathport.com" className="text-teal-800 dark:text-teal-400 font-semibold underline">legal@getpathport.com</a> to allow 30 days for good-faith informal resolution. These Terms are governed by the laws of the United States and the state of formation of Veritas Technology Solutions, LLC, without regard to conflict-of-law principles.
              </p>
              <p>
                <strong>Modifications to Terms:</strong> We may update these Terms as our product ecosystem evolves. Material changes will be communicated via email or prominent in-app notice at least 15 days prior to taking effect.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">Veritas Technology Solutions, LLC — Legal &amp; Compliance</p>
                <p>
                  Legal Inquiries:{' '}
                  <a href="mailto:legal@getpathport.com" className="text-teal-800 dark:text-teal-400 font-semibold underline">
                    legal@getpathport.com
                  </a>{' '}
                  | Privacy:{' '}
                  <a href="mailto:privacy@getpathport.com" className="text-teal-800 dark:text-teal-400 font-semibold underline">
                    privacy@getpathport.com
                  </a>{' '}
                  | Support:{' '}
                  <a href="mailto:hello@getpathport.com" className="text-teal-800 dark:text-teal-400 font-semibold underline">
                    hello@getpathport.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
