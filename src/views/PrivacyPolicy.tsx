import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BetaRegistrationModal } from '../components/BetaRegistrationModal';
import { ShieldCheck, Lock, Smartphone, EyeOff, Cpu, Trash2, Building2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO 
        title="PathPort — Privacy Policy & Data Sovereignty Architecture"
        description="PathPort Privacy Policy by Veritas Technology Solutions, LLC. Individual record ownership, mobile app permissions, AI processing boundaries, zero data selling, and GDPR/CCPA rights."
      />
      <Navbar />
      <BetaRegistrationModal />

      <main id="main-content" tabIndex={-1} className="py-16 md:py-24 focus:outline-none">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              VERITAS TECHNOLOGY SOLUTIONS, LLC
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span>Effective Date: November 1, 2026</span>
              <span>•</span>
              <span>Last Updated: November 1, 2026</span>
              <span>•</span>
              <span>Applies to Web, iOS &amp; Android Apps</span>
            </div>
          </div>

          {/* At-a-Glance Commitments Banner */}
          <div className="bg-emerald-950/5 dark:bg-emerald-950/30 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-emerald-800/60 space-y-5">
            <div className="flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0" />
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                At a Glance: Our Core Privacy Invariants
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <EyeOff className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Zero Data Selling:</strong> We never sell, rent, or trade your personal data, licenses, identity documents, or contact details to data brokers, recruiters, or advertisers.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">No Public AI Training:</strong> Your private vault documents, personal IDs, resumes, and case studies are never used to train public or third-party foundation AI models.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Individual Sovereignty:</strong> Your record belongs to you—not your employer. Organizations only see the specific compliance records you consent to share.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Trash2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Self-Service Export &amp; Deletion:</strong> Export your complete record or permanently delete your account and encrypted vault at any time on Web, iOS, or Android.
                </div>
              </div>
            </div>
          </div>

          {/* Main Policy Body */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs space-y-8 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            
            {/* 1. Scope */}
            <section className="space-y-3" id="scope">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                1. Scope, Data Controller &amp; Products Covered
              </h2>
              <p>
                This Privacy Policy explains how <strong>Veritas Technology Solutions, LLC</strong> (&ldquo;Veritas,&rdquo; &ldquo;PathPort,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, encrypts, shares, and protects information when you use the PathPort ecosystem. Veritas Technology Solutions, LLC acts as the data controller for personal information associated with your individual PathPort account.
              </p>
              <p>This Privacy Policy applies to all PathPort websites, mobile applications, and product surfaces, including:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>PathPort Web &amp; Mobile Applications:</strong> Our marketing site (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">getpathport.com</code>), web application (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">app.getpathport.com</code>), and native/hybrid mobile applications for <strong>Apple iOS</strong> and <strong>Google Android</strong>.</li>
                <li><strong>PathPort Individual (Essentials &amp; Pro):</strong> Credential and licensure tracking, continuing education (CE/CEU/CME/PDU) renewal workspaces, SHA-256 encrypted evidence vault, and multi-source ingestion.</li>
                <li><strong>Personal Identity Documents Tracker ($0 Free Tier):</strong> Private expiration tracking and encrypted vault storage for everyday personal identity documents (such as Driver&apos;s Licenses, REAL IDs, Passports, Global Entry / TSA PreCheck cards, and Vehicle Registrations).</li>
                <li><strong>MyPortfolio:</strong> Tailored, permissioned portfolio views, structured case studies, projects, immutable point-in-time submission snapshots, and custom domain presentations.</li>
                <li><strong>MyPath, PathAI &amp; MyInterview:</strong> AI-assisted document parsing, career path progression modeling, What-If Role Audits, Application &amp; Interview Studio, and interactive voice/audio interview simulation.</li>
                <li><strong>PathPort Workplace &amp; PathPort Certify:</strong> Workforce compliance request workflows, CEU attendance assignment, and certifying board application, exam-result tracking, badge issuance, and recertification management.</li>
              </ul>
            </section>

            {/* 2. Information We Collect */}
            <section className="space-y-3" id="information-collected">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                2. Categories of Information We Collect
              </h2>
              <p>We collect information that you voluntarily provide, data imported at your direction, and limited technical telemetry required to secure and operate the service:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Account &amp; Authentication Information:</strong> When you register or sign in (managed via our authentication provider, <strong>Clerk</strong>), we collect your full name, primary and secondary email addresses, password hashes or OAuth/SSO tokens (e.g., Google, Apple, Microsoft, LinkedIn, GitHub), profile avatar, multi-factor authentication (MFA) configuration, and account preferences.
                </li>
                <li>
                  <strong>Professional Credentials, CE Logs &amp; Career Artifacts:</strong> Licenses, board certifications, trade and safety cards, academic degrees, transcripts, continuing education completion records, clinical or practice hours, employment history, skills, structured case studies, projects, and scholarly publications.
                </li>
                <li>
                  <strong>Personal Identity Documents (Free Identity Tracker):</strong> If you use PathPort to track personal identity documents (such as a Driver&apos;s License, REAL ID, Passport, Global Entry / TSA PreCheck / NEXUS card, or Vehicle Registration), we store the document metadata (issuer, jurisdiction, issue/expiration dates, and optional document numbers or file scans) inside your private, user-isolated storage vault (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">artifacts/&#123;userId&#125;/</code>). Personal identity documents are marked <strong>Private by default</strong> and are never included in public portfolios unless you explicitly change their visibility.
                </li>
                <li>
                  <strong>Inbound Email-to-Vault Data (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">@in.getpathport.com</code>):</strong> When you forward course completion emails or certificate attachments to your unique <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">@in.getpathport.com</code> inbox (processed via Cloudflare Email Routing), we receive the sender address, subject line, message body, cryptographic headers, and attached files solely to extract and stage candidate records in your private review tray.
                </li>
                <li>
                  <strong>Third-Party Badge, Research &amp; Registry Imports:</strong> When you initiate an import or verification lookup from external platforms—including <strong>Credly, Accredible (credential.net), Badgr / Canvas Credentials, Coursera, Open Badges 2.0/3.0, ORCID, PubMed, CrossRef/DOI, Google Scholar, BibTeX, GitHub, Open Science Framework (OSF)</strong>, or official licensing/certification registries—we collect the assertion metadata, verification URLs, and cryptographic signatures associated with those records.
                </li>
                <li>
                  <strong>Voice &amp; Audio Practice Data (MyPath / MyInterview):</strong> If you choose to use interactive voice interview coaching or mock interview simulations, we process your microphone audio input and resulting transcripts solely to generate your private interview coaching feedback and session history.
                </li>
                <li>
                  <strong>Subscription, Billing &amp; In-App Purchase Metadata:</strong> When you subscribe via Web (<strong>Stripe</strong>) or Mobile In-App Purchases (<strong>Apple App Store StoreKit</strong> or <strong>Google Play Billing</strong>, orchestrated via <strong>RevenueCat</strong>), we receive your subscription tier, entitlement state, billing interval, transaction IDs, and tax/billing postal code. <strong>Veritas never stores raw credit card numbers, CVV codes, or bank account credentials on our servers.</strong>
                </li>
                <li>
                  <strong>Device, Log &amp; Security Telemetry:</strong> IP address, browser type, operating system version, mobile device identifier, app version, crash diagnostics, and audit log timestamps used to enforce Row-Level Security (RLS), prevent abuse, and maintain service reliability.
                </li>
              </ul>
            </section>

            {/* 3. Mobile App Permissions */}
            <section className="space-y-3" id="mobile-permissions">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0" />
                <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                  3. Mobile Application Permissions (iOS &amp; Android)
                </h2>
              </div>
              <p>
                Our iOS and Android mobile applications request device permissions strictly on a just-in-time, user-initiated basis. You may grant or revoke any permission at any time in your device&apos;s system settings:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Camera Access (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">NSCameraUsageDescription</code> / <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">android.permission.CAMERA</code>):</strong> Used exclusively when you tap to scan or photograph a physical certificate, license, wallet card, transcript, or identity document for upload to your vault. PathPort never activates your camera in the background.
                </li>
                <li>
                  <strong>Photo Library &amp; Media Picker (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">NSPhotoLibraryUsageDescription</code> / Android Photo Picker):</strong> Used exclusively when you choose to import an existing image or screenshot of a credential from your device. Where supported by the OS, we use the scoped system photo picker so PathPort only accesses the specific image(s) you select.
                </li>
                <li>
                  <strong>Files &amp; Document Storage:</strong> Used when you select PDF certificates, resumes, or BibTeX files from your device storage or export audit packets and portfolios to your device.
                </li>
                <li>
                  <strong>Microphone Access (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">NSMicrophoneUsageDescription</code> / <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">RECORD_AUDIO</code>):</strong> Requested only if and when you actively start an optional voice-based interview simulation session in <strong>MyInterview / MyPath</strong>.
                </li>
                <li>
                  <strong>Push Notifications:</strong> Used to deliver proactive credential and identity document expiration alerts (e.g., 180, 90, 60, and 30 days prior to expiration), recertification reminders, and <strong>PathPort Workplace</strong> or <strong>Certify</strong> status updates. You can customize or disable push notifications in-app or in OS Settings.
                </li>
                <li>
                  <strong>Biometric Authentication (Face ID, Touch ID &amp; Android BiometricPrompt):</strong> Optional biometric app lock uses your device&apos;s native Secure Enclave / Android Keystore. PathPort only receives a boolean pass/fail signal from the operating system and never accesses, transmits, or stores biometric templates or facial/fingerprint data.
                </li>
              </ul>
            </section>

            {/* 4. How We Use Information & AI Processing */}
            <section className="space-y-3" id="ai-and-usage">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                4. How We Use Your Information &amp; AI Processing Principles (PathAI / MyPath)
              </h2>
              <p>We process your information strictly to deliver, secure, and improve the PathPort platform:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Staged Extraction &amp; Human-in-the-Loop Confirmation:</strong> When you upload a resume, PDF certificate, or forward an email to <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">@in.getpathport.com</code>, our AI extraction pipeline (<strong>PathAI</strong>) parses candidate titles, issuers, dates, credit hours, and <strong>smart-suggested requirement bucket attributions</strong> into your private staging tray. Staged items are never published or applied to a credential renewal log until you review and confirm them.
                </li>
                <li>
                  <strong>Multi-Credential Renewal &amp; Surplus Rollup Calculation:</strong> We evaluate your confirmed CE/CEU/CME/PDU evidence against multi-category credential renewal rules to calculate remaining deficits, cross-credential credit attributions, and automatic spillover into general/elective requirement buckets.
                </li>
                <li>
                  <strong>Career Readiness &amp; Public Benchmark Modeling (MyPath):</strong> When you run a <strong>MyPath</strong> roadmap, What-If Role Audit, or Application Studio session, we compare your confirmed profile against public occupational licensing directories and wage benchmarks—including U.S. Department of Labor (USDOL/ETA) <strong>CareerOneStop</strong> and <strong>Bureau of Labor Statistics (BLS)</strong> datasets—to identify requirement gaps and generate tailored career materials.
                </li>
                <li>
                  <strong>No Training of Public or Third-Party Foundation AI Models:</strong> <strong>We do not use your private vault documents, personal identity documents, resumes, case studies, or audio recordings to train, fine-tune, or improve public or third-party foundation AI models.</strong> When PathPort utilizes enterprise LLM/OCR inference APIs to extract document fields or generate career guidance, requests are transmitted over encrypted channels under strict zero-training commercial API terms.
                </li>
              </ul>
            </section>

            {/* 5. Zero Data Selling */}
            <section className="space-y-3" id="zero-data-selling">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                5. Zero Data Selling &amp; Ethical Discovery Commitment
              </h2>
              <p>
                <strong>Veritas Technology Solutions, LLC never sells, rents, licenses, or trades your personal information, credential records, identity documents, or contact information to third-party data brokers, staffing agencies, recruiters, or advertisers.</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>We do not serve third-party behavioral advertisements inside PathPort.</li>
                <li>We do not &ldquo;sell&rdquo; or &ldquo;share&rdquo; personal information for cross-context behavioral advertising as defined under the California Consumer Privacy Act (CCPA/CPRA).</li>
                <li>Where PathPort surfaces optional continuing education (CE/PD) courses or partner test platforms to help you close a specific renewal gap, those recommendations are driven strictly by your credential requirements—never by selling your contact list to course vendors.</li>
              </ul>
            </section>

            {/* 6. Visibility, MyPortfolio, Workplace & Certify */}
            <section className="space-y-3" id="sharing-and-consent">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                6. Visibility Tiers, MyPortfolio Sharing &amp; Organization Consent (Workplace &amp; Certify)
              </h2>
              <p>
                PathPort is architected around <strong>individual-owned record sovereignty</strong>. Your data is only disclosed to others when you explicitly configure a share or submit an application:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Private-by-Default Vault:</strong> All newly uploaded documents, personal identity records, and staged imports default to <strong>Private</strong>. Private files are stored in user-isolated storage paths (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">artifacts/&#123;userId&#125;/</code>) accessible only to your authenticated session.
                </li>
                <li>
                  <strong>MyPortfolio Visibility &amp; Immutable Snapshots:</strong> You may configure individual portfolios and artifacts as <strong>Private</strong>, <strong>Unlisted (Link-Only)</strong>, or <strong>Public</strong>, and choose whether underlying evidence files are downloadable, preview-only, or hidden (displaying verified metadata and SHA-256 provenance badges only). When you create an immutable submission snapshot for a job, residency, or grant application, the recipient can view the exact point-in-time record you submitted until you revoke the snapshot link.
                </li>
                <li>
                  <strong>PathPort Workplace (Scoped Employer &amp; Workforce Sharing):</strong> When an employer, hospital, agency, or enterprise using <strong>PathPort Workplace</strong> requests compliance credentials from you, you review the request and consent to share the specific required items from your free or paid PathPort profile. Your employer receives scoped visibility into those shared compliance items (and may assign earned CEUs to your profile for internal training), but <strong>your employer never owns your PathPort account or gains access to your unrelated personal documents</strong>. You may revoke an employer&apos;s live connection at any time (subject only to static compliance audit logs captured during active employment).
                </li>
                <li>
                  <strong>PathPort Certify (Certifying Boards, Test Platforms &amp; Badge Issuers):</strong> When you apply for a credential, track application payments, connect official test-platform exam results, or submit a recertification packet through <strong>PathPort Certify</strong>, the materials and evidence you select are transmitted to the applicable certifying body and its authorized testing or digital badge partners so they can evaluate your application, issue <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Issuer-Verified</code> credentials into your PathPort profile, and syndicate your badge through supported badge providers.
                </li>
              </ul>
            </section>

            {/* 7. Sub-Processors & Security */}
            <section className="space-y-3" id="subprocessors-and-security">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                7. Infrastructure Security, Cryptographic Provenance &amp; Sub-Processors
              </h2>
              <p>
                We protect your data using defense-in-depth technical controls: <strong>AES-256 encryption at rest</strong>, <strong>TLS 1.3 encryption in transit</strong>, database-level <strong>PostgreSQL Row-Level Security (RLS)</strong>, and <strong>SHA-256 cryptographic hashing</strong> of uploaded evidence files to guarantee tamper-evident document provenance.
              </p>
              <p>To operate PathPort across Web, iOS, and Android, we rely on the following vetted infrastructure sub-processors under strict data processing agreements:</p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 my-2">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800/70 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">
                      <th className="py-2.5 px-4 font-semibold">Sub-Processor</th>
                      <th className="py-2.5 px-4 font-semibold">Role &amp; Purpose</th>
                      <th className="py-2.5 px-4 font-semibold">Primary Region</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">Clerk, Inc.</td>
                      <td className="py-2.5 px-4">Identity authentication, session management, MFA, OAuth/SSO, and organization role security</td>
                      <td className="py-2.5 px-4">United States</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">Supabase, Inc.</td>
                      <td className="py-2.5 px-4">RLS-enforced PostgreSQL database and encrypted private vault storage (<code className="text-[11px]">artifacts/&#123;userId&#125;/</code>)</td>
                      <td className="py-2.5 px-4">United States</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">Cloudflare, Inc.</td>
                      <td className="py-2.5 px-4">Edge hosting, WAF security, serverless Workers, and <code className="text-[11px]">@in.getpathport.com</code> Email Routing</td>
                      <td className="py-2.5 px-4">Global / United States</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">Stripe, Inc. &amp; RevenueCat, Inc.</td>
                      <td className="py-2.5 px-4">Web checkout, organization invoicing, and cross-platform Web / iOS App Store / Google Play entitlement sync</td>
                      <td className="py-2.5 px-4">United States</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">Apple Inc. &amp; Google LLC</td>
                      <td className="py-2.5 px-4">Mobile app distribution, StoreKit / Google Play Billing in-app purchases, and push notification delivery</td>
                      <td className="py-2.5 px-4">United States / Global</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">Loops (Astroize LLC)</td>
                      <td className="py-2.5 px-4">Transactional account emails, credential expiration alerts, and opt-in product updates</td>
                      <td className="py-2.5 px-4">United States</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">PostHog, Inc. &amp; Sentry</td>
                      <td className="py-2.5 px-4">Privacy-scrubbed crash diagnostics and cookie-free feature reliability telemetry (no session recording or document content)</td>
                      <td className="py-2.5 px-4">United States</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 8. Retention, Export & Account Deletion */}
            <section className="space-y-3" id="retention-and-deletion">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                8. Data Retention, Self-Service Export &amp; Account Deletion (Web &amp; Mobile Apps)
              </h2>
              <p>
                We retain your personal record and encrypted vault files for as long as your PathPort account remains active. If a paid subscription or trial expires, your existing records remain safely stored and accessible for viewing or export—we never hold your career or identity documents hostage.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Full Data Portability:</strong> You may download your uploaded files, credential logs, and portfolio records at any time from your account settings.
                </li>
                <li>
                  <strong>Self-Service Account &amp; Vault Deletion (Apple App Store &amp; Google Play Compliance):</strong> You have the right to permanently delete your PathPort account and all associated vault data at any time. You can initiate immediate deletion directly inside the Web, iOS, or Android app via <strong>Account Settings &rarr; Security &amp; Privacy &rarr; Delete Account</strong>, or by submitting a request to{' '}
                  <a href="mailto:privacy@getpathport.com" className="text-teal-800 dark:text-teal-400 font-semibold underline">
                    privacy@getpathport.com
                  </a>.
                </li>
                <li>
                  <strong>Deletion Timeline:</strong> When you delete your account, your active database profile, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">MyPortfolio</code> links, and private storage bucket (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">artifacts/&#123;userId&#125;/</code>) are immediately de-provisioned and permanently purged from production systems within <strong>30 days</strong> (and cycled out of encrypted disaster-recovery backups within <strong>90 days</strong>), except for limited financial billing records or formal certifying-board regulatory logs that must be retained by applicable law.
                </li>
              </ul>
            </section>

            {/* 9. US State & International Privacy Rights */}
            <section className="space-y-3" id="privacy-rights">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                9. Your U.S. State (CCPA/CPRA) &amp; International (GDPR / UK GDPR) Privacy Rights
              </h2>
              <p>
                Depending on where you live—including California (CCPA/CPRA), Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Texas (TDPSA), the European Economic Area (EEA), the United Kingdom, and Switzerland—you have enforceable rights regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Right to Access &amp; Know:</strong> Request confirmation of what personal data we process and receive a portable copy of your records.</li>
                <li><strong>Right to Correction (Rectification):</strong> Edit or update inaccurate personal or credential data directly in your workspace.</li>
                <li><strong>Right to Deletion (Erasure):</strong> Delete individual artifacts or permanently purge your entire account and vault.</li>
                <li><strong>Right to Restrict or Object to Processing:</strong> Withdraw consent for optional features (such as public portfolio indexing, third-party badge sync, or marketing emails) at any time without penalty.</li>
                <li><strong>Non-Discrimination:</strong> We will never discriminate against you or degrade service quality for exercising your privacy rights.</li>
                <li><strong>EEA/UK Legal Bases &amp; Transfers:</strong> For users in the EEA, UK, or Switzerland, we process personal data under <em>Performance of a Contract</em> (providing your PathPort vault and workspace), <em>Explicit Consent</em> (when you share records or enable optional permissions), <em>Legitimate Interests</em> (platform security and fraud prevention), and <em>Legal Obligations</em>. Data is hosted in the United States and protected via Standard Contractual Clauses (SCCs) and applicable Data Privacy Framework safeguards.</li>
              </ul>
            </section>

            {/* 10. Cookies & Analytics */}
            <section className="space-y-3" id="cookies">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                10. Cookies, Local Storage &amp; Do Not Track
              </h2>
              <p>
                PathPort uses strictly necessary first-party cookies and browser local storage to maintain your authenticated Clerk session, enforce CSRF protection, and remember your UI preferences (such as dark mode). We do not use third-party cross-site advertising pixels or invasive behavioral tracking cookies, we honor Global Privacy Control (GPC) and Do Not Track browser signals, and you can opt out of cookie-free usage diagnostics at any time under <strong>Settings &rarr; Privacy &amp; Sharing</strong>.
              </p>
            </section>

            {/* 11. Children's Privacy */}
            <section className="space-y-3" id="children">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                11. Children&apos;s Privacy (Age 16+)
              </h2>
              <p>
                PathPort is designed for students, graduates, and working professionals aged <strong>16 and older</strong>. We do not knowingly collect personal information from children under the age of 16 (or under 13 under COPPA). If we learn that we have inadvertently collected personal data from a child under 16, we will promptly delete the account and associated data.
              </p>
            </section>

            {/* 12. Updates & Contact */}
            <section className="space-y-3" id="contact">
              <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                12. Policy Updates &amp; Contact Information
              </h2>
              <p>
                We may update this Privacy Policy as we launch new capabilities across PathPort Individual, Workplace, Certify, and our mobile applications. If we make material changes, we will notify you by email and via an in-app notification prior to the change taking effect.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">Veritas Technology Solutions, LLC — Privacy &amp; Data Protection Team</p>
                <p>
                  Email:{' '}
                  <a href="mailto:privacy@getpathport.com" className="text-teal-800 dark:text-teal-400 font-semibold underline">
                    privacy@getpathport.com
                  </a>{' '}
                  | General Support:{' '}
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

export default PrivacyPolicy;
