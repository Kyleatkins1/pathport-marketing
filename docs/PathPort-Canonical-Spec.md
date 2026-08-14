# PathPort — Canonical Product & Strategy Spec

**Version:** 1.0 (source of truth) · **Date:** August 14, 2026 · **Owner:** Kyle Atkins / Veritas Technology Solutions
**Governing constraint:** Bootstrapped, solo build. Every decision here bends to that reality.

> **What this document is.** The single source of truth for PathPort, reconciling six prior strategy docs (three from this Claude workstream, two from the GPT session, plus the pricing seed). Those docs are now **inputs, not references** — when they disagree with this spec, this spec wins. Prior docs: `PathPort-Rebuild-Plan.md`, `PathPort-Pricing-Strategy.md`, `PathPort-Competitive-GTM-Analysis.md`, `PathPort-Product-Thesis.md`, and the two GPT docs (`MVP Product Briefs`, `Product Thesis/PMF/GTM v2`). Keep them in `/docs/archive/` for provenance.

---

## 0. The one thing to remember

You are one person. The vision below is venture-scale and correct — but you do not build it in order. You build **one Certify design partner running one real renewal cohort, with a thin individual App underneath it.** Everything else is deferred until that exists and someone has paid. The validation you already have (interest on all three sides) earns you the right to build; it does not earn you the right to build all three at once.

---

## 1. Thesis

> **Your professional record belongs to you.** PathPort is portable professional infrastructure centered on the individual: it preserves the evidence of a person's professional life, connects trusted organizations to the parts they legitimately govern, and uses context to help the person decide what to do next.

A career is bigger than a résumé, a credential wallet, or any one institution's portal. PathPort is the persistent home for it — and, for the organizations that issue and depend on credentials, the system that runs the lifecycle.

**Positioning north star:** *Your career is bigger than a résumé.*

---

## 2. Resolved decisions (the divergences, settled)

These were inconsistent across the six docs. Here is the ruling for each:

| Question | Decision |
|---|---|
| **Domain** | **`getpathport.com`** as canonical, with product subdomains (`app.`, `teams.`, `certify.`, `api.`). `pathport.app` redirects to it if you own it. *(Confirm you control getpathport.com — if not, we standardize on what you own before any marketing goes live.)* |
| **How many products** | **Three products + one internal API layer.** App, Teams, Certify are products. API is *infrastructure*, internal-first — not a product to sell until real external integration demand exists. |
| **Product to lead with** | **Certify.** Validated budget, warm targets (ALM/AHVAP), and one issuer seeds a cohort of individual users. App rides underneath from day one but is thin at first. |
| **Pricing model** | **App = freemium adoption engine; Teams + Certify = revenue.** App: Free / Pro $8/mo or $79/yr / Founding Member $49/yr locked 24mo (first ~500) / free EDU tier. Teams: $5/user/mo, annual, 5-seat min. Certify: **priced from buyer interviews, not pre-anchored** — expect platform fee + per-certificant + optional payment take-rate. |
| **Individual pricing role** | App pricing is for adoption and retention, not primary revenue. Don't over-optimize consumer ARPU; the money is Teams + Certify. |
| **Stack** | Web-first. **Open decision: Next.js vs staying React+Vite** (see §11). Marketing site already exists (Vite/Tailwind/Cloudflare, npm). |
| **Package manager** | npm everywhere (npm workspaces for the shared core). |
| **Mobile** | Real, but Phase 2 (Expo). Mobile scope = *capture + awareness* (wallet, reminders, add credential, photograph evidence, view portfolios), not the full desktop workflow. |
| **Wearables** | No. Resell a white-label NFC card at most; never build hardware. |

---

## 3. Architecture — one core, three front doors

```
                         PATHPORT CORE  (framework-agnostic, no UI)
   Identity & Access · Professional Record · Credentials & Provenance
   Credential/Career Knowledge Graph · CE & Requirement Engine · Renewal Engine
   Portfolio & Evidence Engine · Path/Guidance Engine · Notifications
   Permissions & Org Relationships · AI/ML Services
                                   │
                          api.getpathport.com  (internal-first)
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        ▼                          ▼                          ▼
  app.getpathport.com      teams.getpathport.com      certify.getpathport.com
     INDIVIDUAL                 EMPLOYER                    ISSUER
        │
        ▼
    iOS / Android (Phase 2)
```

**The moat is the architecture, not "we have AI."** Two things compound and competitors structurally can't copy:

1. **Portable-identity + scoped-permission model.** The individual owns the identity; organizations get scoped authority over what they legitimately govern, never ownership of the whole record. CE Broker, Certemy, and issuer portals are all institution-centered — they'd have to rebuild to match this.
2. **The credential/career knowledge graph** — a structured, proprietary data asset you seed from EMS/nursing domain expertise (your unfair advantage), enriched by every issuer and certificant over time.

**The permission rule (load-bearing):** *Organizations see the information they are authorized to see or govern; they do not receive unrestricted access to the individual's PathPort.* This must be visible in every demo — it's the differentiator made tangible.

---

## 4. The professional record (what makes it not-a-vault)

The individual's record holds far more than credentials — this is what separates PathPort from CE Broker and from a résumé:

- **Credentials** — licenses, certifications, degrees, microcredentials, badges, CE.
- **Evidence & work** — projects, repos, apps, research, publications, presentations, posters, class projects, artifacts.
- **Case studies (first-class object)** — Challenge / Context / Role / Approach / Evidence / Outcome / Reflection. *This is the differentiator.* It turns experience into reusable proof of capability.
- **Experience, recognition, professional narratives** (teaching/leadership/clinical philosophy), **goals**.
- **Portfolios = curated views over the one record**, not copies. *"Maintain yourself once. Present yourself many ways."* Opportunity-tailored (a job, a scholarship, a board seat) — selects and contextualizes existing evidence, never invents claims.

**Provenance tiers on every record:** self-reported → document-supported → imported → organization-verified → issuer-verified. **Never market everything as "verified."**

---

## 5. The Path engine (the core, not the creep)

Answers *Where am I? Where do I want to go? What could move me there?* Recommendations span six types so it never collapses into "take another course":

**Learn · Earn · Build · Experience · Demonstrate · Reflect.**

The "Demonstrate" category is uniquely PathPort: sometimes the answer is *"You don't need another certification — you need evidence for a capability you already have."*

**Knowledge graph:** nodes = credentials, roles, skills, CE categories, learning resources, certifying bodies, industries. Edges = prerequisite / next-step / adjacent / specialization / satisfies-requirement / commonly-expected-for-role / develops-capability / accepted-CE / issued-by / renews-through. **Rules-first and explainable** for anything touching eligibility/compliance; AI assists (drafting, extraction, conversational guidance) but never makes consequential decisions. Seed **EMS + nursing only** first — deep-in-two beats shallow-in-twenty.

---

## 6. Business model

- **Subscriptions** — App Pro (adoption), Teams (per-seat), Certify (platform + per-certificant). Primary near-term revenue = **Certify + Teams**.
- **Marketplace** — sequence it: **v1 affiliate/referral** (course/CE providers) → **v2 sponsored placement** to high-intent, about-to-renew users → **v3 issuer lead-gen** → **v4 recert payment processing via Stripe Connect** (platform take-rate; huge stickiness; Phase 2+ — but model the data now).
- **Services** — implementation/migration for Certify pilots.

**Trust guardrail (design in from day one):** payment may affect *ordering among equally-valid options*, never *whether an option satisfies a requirement*. Sponsored results always labeled and separated. Requirement-matching stays transparent and unpaid. **Credibility is the product.**

**Partnership — Pocket Prep:** their ~150-exam prep audience is people actively earning credentials = your best top-of-funnel. Loop: prep → pass → PathPort holds/recerts/paths → next credential → back to prep. Start with a cross-promo/affiliate pilot; their taxonomy can seed the graph. One small specific ask; be measured about roadmap exposure.

---

## 7. Competitive positioning

**Do not claim "nobody tracks CE."** The category is validated (CE Broker: 350+ professions, 6,500+ providers, 90M+ completions, free to boards, but only ~4 national-association partners as of mid-2026 — which is exactly the opening for small cert orgs). Differentiate on **portability + evidence + connected identity + modern workflow + context-aware growth.**

- **vs CE Broker / compliance platforms:** "Compliance is one part of your professional life. PathPort travels with the person and turns the same record into growth and opportunity." (Also: it shows you what you still need without paywalling the answer.)
- **vs LinkedIn:** "LinkedIn tells people what you say you do. PathPort helps you show the evidence." Complement, don't replace.
- **vs Credly/Certifier (issuers):** "Keep issuing however you like — PathPort runs everything after the badge is earned." (Credly issues but doesn't track recert; Certifier is free with an open API. Integrate; own the lifecycle.)
- **vs Portfolium (dying 6/30/2026):** "Your work shouldn't disappear when you graduate. Your PathPort goes with you." *(Time-sensitive: free EDU tier + import path this cycle.)*
- **vs résumé builders:** "Build your record once, then create the right view for each opportunity."

---

## 8. Go-to-market

**Motion: B2B2C through a lighthouse Certify partner.** The first milestone is not thousands of signups — it's **one certification program trusting PathPort with a real renewal cycle.** App rides underneath (every certificant gets a real PathPort identity, not a stripped portal login).

**Beachhead:** EMS/fire + healthcare, via your warm audience (NarcTrack, EMS Study Buddy, AHVAP, Pocket Prep) — near-zero CAC and your unfair advantage. Enter *narrow*; keep the horizontal identity vision as horizon, not launch surface.

**Channels (later, once there's a product to point at):** SEO state renewal guides + "CE Broker alternative"; r/nursing, r/ems, nurse/EMS Facebook groups; TikTok/IG nurse & EMS creators; school / CE-provider / association partnerships; a free CEU/renewal-checker lead magnet.

---

## 9. Execution plan for a solo bootstrapper (the spine)

This is the section that matters most given who's building it. **Build vertical slices through the shared core, not four products in sequence.** Ship the smallest thing that proves the thesis and earns a paying pilot.

**Milestone 0 — Foundation (the rebuild).** Fresh Supabase project; consolidated `0001_baseline.sql` (collapse the triple requirements tables; move Stripe secrets to env); the framework-agnostic `pathport-core` package; auth; the identity + org + permission model. *Exit: one user can hold a credential governed by an org and expose only scoped data.*

**Milestone 1 — Certify pilot core + thin App.** The ONLY external-facing goal until it's real:
- Certify: one certification program, certificants, CE requirements, CE submission → review/approve, deficiency status, renewal, audit log, basic reporting.
- App (thin): persistent account, credential wallet, CE history, renewal status, evidence capture, one basic portfolio.
- *Exit: a real issuer runs a real renewal cohort end-to-end and wants to keep using it.* **This is PMF.**

**Milestone 2 — The App differentiators.** Only after M1: projects, case studies, richer record, portfolios-as-views, sharing/privacy, opportunity-tailored assistance.

**Milestone 3 — Path v1 (rules-first).** Goal selection, EMS/nursing graph, gap analysis, the six recommendation types, transparent rationale.

**Milestone 4 — Teams pilot.** Org connection, role requirements, compliance dashboard, expiration alerts, reporting. (You already have Teams interest — this can move up if a design partner is ready and Certify M1 is stable.)

**Milestone 5 — Intelligence + marketplace.** AI CE-extraction (the Certify labor-savings hero), portfolio tailoring, conversational Path, affiliate marketplace, then payments.

**Explicitly defer (write it down so you don't drift):** social feed, endorsements, job board, full résumé builder, exam delivery/proctoring, LMS, HRIS/payroll, custom domains, badge authoring, public developer platform, SSO (until a paying customer demands it), autonomous AI decisions, and any second vertical before EMS/nursing is deep.

**Solo-reality caveat:** built as written, M0–M1 is the realistic near-term focus for one person — likely a few months, not a few weeks. Resist M2+ pull until a Certify partner has paid. If you raise later, the full vision (§1–§6) is the pitch and you staff up against it then.

---

## 10. Validation status

Early interest is real on the two sides that matter first, and it maps cleanly onto the sequencing:

- **Certify (the wedge):** **ALM** may be interested and Kyle can sell it directly — ALM is already a warm Veritas relationship, which makes it the natural **lighthouse design partner.** Separately, Kyle's **AHVAP contact** reports that *a lot of small certifying bodies need exactly this* and believes it's a real, monetizable market ("could make bank") — insider validation of the whole Certify segment, not just one logo.
- **Individual (the cohort underneath):** Kyle already has **a large group of nurses and others who want to use it as individuals.** This is a gift: it's the beta cohort that rides underneath Certify, the proof of App retention, and near-zero-CAC word of mouth — *without* needing a separate consumer launch.
- **Teams:** deprioritized by Kyle for now ("Teams will come"). Correct call — let it follow Certify traction.

**Implication:** ALM is the commercial move; the nurse audience is the validation-and-retention cohort that proves the App half; Teams waits. Do not let the (very real) individual demand pull the build toward a full consumer App before the ALM Certify pilot is live — the nurses get the *thin* App that ships as part of Certify M1.

**Validation plan (lightweight, do alongside M0–M1):** structured discovery with 10–15 cert orgs, 5–10 credential-dependent employers, 20–30 individuals given a real "build a portfolio for an actual opportunity" task. Success signal: one org commits to a paid design partnership / real renewal cohort.

---

## 11. Open decisions

1. **Domain** — confirm `getpathport.com` ownership (spec assumes it; swap if you're keeping `pathport.app`).
2. **Stack** — Next.js (SSR for public portfolios + server routes for OAuth/payment secrets — my recommendation) vs staying React+Vite (your comfort zone). This affects M0. *Decide before scaffolding.*
3. **Certify pricing** — set from the first 2–3 buyer interviews, not now.
4. **Which Certify partner** is the lighthouse (ALM vs AHVAP vs other).

---

## 12. What not to do

Don't build three independent products with three identities. Don't make employers owners of employee records. Don't make the App a mere vault or the Path a generic AI chatbot. Don't assume every gap needs another certification. Don't let AI invent evidence. Don't claim universal verification. Don't let marketplace payment influence whether a resource satisfies a requirement. Don't try to replace every issuing/exam/HR/LMS/social system at launch. Don't expand verticals before the EMS/nursing graph is deep. **And don't build the whole vision because it's exciting — build the Certify pilot because it pays.**

---

## 13. Immediate next actions

1. Confirm the domain and the stack decision (§11 #1–2).
2. Stand up the fresh Supabase project + `0001_baseline.sql` (richer record + permission model + the new tables: `credential_pathways`, `learning_resources`, `ce_providers`, `certification_programs`, `certificants`, `ceu_submissions`, `notifications`, `issuer_integrations`, `recert_payments`).
3. Draft the **Certify pilot one-pager** for your warmest issuer lead and get the meeting.
4. Populate §10 with your real validation specifics.
5. Scaffold `pathport-app` + `pathport-core` (M0), CI green with one test before any feature.

---

*This spec supersedes all prior PathPort strategy docs. Update it here rather than spawning new documents — one source of truth.*
