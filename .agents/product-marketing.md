# PathPort — Product Marketing Context

**Document version:** v3
**Last updated:** 2026-11-15

## 1. Product Overview
- **Product Name:** PathPort
- **Primary Brand Tagline:** *"Own your journey. Shape what's next."*
- **Core Universal Positioning:** *"If you have a credential, you can track it."* PathPort is built for everyone across every industry—not just healthcare.
- **Category:** Encrypted Document & Credential Vault, Verifiable Professional Portfolio Builder (`MyPortfolio`), and Credential-Matched Job Search & Career Growth Platform (`MyPath Career`)
- **Product Ecosystem & Hierarchy:**
  1. **PathPort (Individual — Launching Nov 2026):** The flagship individual workspace. Professionals bring in their existing resume/CV, LinkedIn PDF, Credly/Accredible/Badgr digital badges, and CE certificates—or forward completion receipts directly to their `@in.getpathport.com` email vault—to maintain one canonical, document-backed professional record.
     - **Document Vault & CE Renewal Engine:** SHA-256 encrypted storage plus smart-suggested state and national board requirement buckets (never silently auto-commits) so users can confirm attribution across one or multiple credentials with automatic surplus hour rollup.
     - **MyPortfolio (Verifiable Professional Portfolio Module):** Permissioned, verifiable professional web portfolios (`Modern`, `Executive`, and `Minimal` themes) and PDF dossiers/Speaker One-Sheets backed by SHA-256 document integrity and instant consent revocation—built for hiring, consulting proposals, speaking engagements, hospital/agency credentialing, promotions, board appointments, and fellowships.
     - **MyPath Career (Pro Module):** Live **credential-matched job search engine**, **AI/rules-backed career path suggestions** (with USDOL CareerOneStop licensure and BLS salary benchmarks), **instant job-alignment scoring & What-If role audits**, **6-pillar professional growth tracking software** (`Learn`, `Credential`, `Experience`, `Build`, `Publish`, `Lead`), and **Application & Interview Studio** (tailored resumes, cover letters, submission packets, and STAR interview prep grounded in verified records).
  2. **PathPort Personal Identity Documents Tracker ($0 • Free Forever):** A dedicated free version of PathPort strictly for tracking everyday personal identity documents (**Driver’s License, REAL ID, Passport, Global Entry / TSA PreCheck, Vehicle Registration & Insurance**) so people never forget to renew them.
  3. **PathPort Workplace (Launching 2027):** Built for any workforce that has to obtain and verify employee credentials without sending countless back-and-forth emails. Employers simply log in, select what they need, and send the request to the employee. Employees create a free PathPort profile, upload their required documents once, and share them instantly. System intelligence ensures everyone maintains compliance, and employers can assign CEUs or training credits directly to event attendees.
  4. **PathPort Certify (Launching 2027):** End-to-end credential management for certifying bodies, associations, and training organizations across any industry. Allows candidates to apply for a credential, submit documents, and track payments; tracks exam results from official test platforms (or streamlines testing via PathPort's testing partners); issues credentials from PathPort Certify through any badge provider (Credly, Accredible, Badgr, Open Badges) and with `Issuer-Verified` provenance in PathPort; and manages recertifications directly within the PathPort platform.

- **Business Model & Pricing:**
  - **Personal Identity Documents Tracker ($0 / Free Forever):** Track everyday identity documents (Driver's License, Passport, Global Entry, Vehicle Registration) with smart renewal reminders.
  - **PathPort Essentials ($9.99/mo or $7.99/mo billed annually):** Keep your professional record current—unlimited credentials, Credly/badge sync, SHA-256 document vault, 50-state & national board renewal tracking, email ingress (`@in.getpathport.com`), and 1 public **MyPortfolio** link.
  - **PathPort Pro ($19.99/mo or $14.99/mo billed annually — 30-Day Free Trial for Founding Cohort):** Includes everything in Essentials plus **MyPath** Career Intelligence, What-If Role Audits, Opportunity & Application Studio, unlimited tailored **MyPortfolio** views (`Modern`, `Executive`, `Minimal`), and custom slugs.
  - **PathPort Workplace (2027 Pilot Cohort):** Custom workforce pricing based on connected staff seats.
  - **PathPort Certify (2027 Issuer Cohort):** Custom board/association pricing based on active certificants.

## 2. Target Audience (ICP)
### Primary Individual Segments (Universal Across Industries)
1. **Project, Program & Technical Leaders (PMPs, Scrum Masters, Cloud & Security Architects):**
   - Importing digital badges from Credly/Accredible, tracking PMI Talent Triangle PDUs and CPEs/CEUs across AWS/CompTIA/ISC2/ISACA, and linking live case studies and architectures to their credentials via **MyPortfolio**.
2. **Healthcare & Nursing (RNs, APRNs, Travel Nurses, Clinical Educators):**
   - Managing multi-state licenses (NLC compact & non-compact), state-mandated CE topics (smart-suggested bucket attribution), ANCC/AACN board certifications, and AHA life-support cards (`BLS`, `ACLS`, `PALS`).
3. **Aviation, EMS, Public Safety & Skilled Trades:**
   - Navigating FAA certificates, OSHA/trade licenses, the 60-hour NREMT NCCP model (National, State/Local, and Individual hour buckets), and agency reciprocity.
4. **Students, Residents & Early-Career Graduates:**
   - Capturing clinical rotations, preceptor evaluations, capstones, and initial licensure exams into a permanent record that doesn't vanish when their `.edu` email expires.
5. **Everyday Consumers (Free Identity Document Tracker):**
   - Tracking Driver's Licenses, Passports, Global Entry / TSA PreCheck, and Vehicle Registrations for free so they never miss an expiration date.

### Secondary Organization Segments (Launching 2027)
1. **PathPort Workplace Buyers:** Operations leaders, HR/Compliance Directors, PMO leads, aviation/construction managers, and clinical directors across any workforce who want to collect employee credentials without endless email threads and assign CEUs to attendees.
2. **PathPort Certify Buyers:** Executive Directors and Credentialing VPs at certifying bodies, professional associations, and training organizations across any industry looking for one platform from candidate application and testing to badge issuance and recertification.

## 3. Core Differentiators
1. **Universal ("If You Have a Credential, You Can Track It") + Free Identity Tier:**
   - Works for any credential in any industry, plus a free forever tier for personal identity documents (DL, Passport).
2. **60-Second Multi-Channel Intake + Credly Sync + `@in.getpathport.com` Email Forwarding:**
   - Users drop in an existing resume/CV, LinkedIn PDF, bulk CE certificates, or Credly/badge profile links—or forward CE completion emails directly to `ce-{id}@in.getpathport.com`—and review extracted items in a staged tray.
3. **Smart-Suggested, User-Confirmed CE Requirement Attribution:**
   - PathPort smart-suggests matching state and national board requirement buckets and lets users confirm attribution across multiple credentials at once with automatic surplus hour rollup.
4. **Individual Sovereignty vs. State/Employer Silos (e.g., CE Broker):**
   - PathPort belongs to the individual for life across all 50 states and every employer.

## Changelog
*Newest first. One line per revision: what changed and why.*
- v3 (2026-11-15) — Clarified **MyPortfolio** (verifiable professional portfolio for all professional audiences, not strictly job search) and **MyPath Career** (live credential-matched job search engine, AI/rules-backed career suggestions, instant job alignment & What-If audits, 6-pillar growth tracking, and Application & Interview Studio); confirmed `Pricing.tsx` limits (Essentials includes unlimited credentials and Email-to-Vault).
- v2 (2026-11-01) — Repositioned around universal industry coverage ("if you have a credential, you can track it"), added the $0 Free Personal Identity Documents tracker (DL, Passport), clarified smart-suggested CE bucket attribution, and expanded PathPort Workplace (zero-email credential requests, free employee profile sharing, CEU assignment) and PathPort Certify (end-to-end applications, payments, official test platform sync, universal badge provider issuance, and recertification).
- v1 (2026-11-01) — Initial context.
