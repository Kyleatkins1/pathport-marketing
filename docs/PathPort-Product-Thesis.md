# PathPort — Product Thesis: The Path Engine & the Three-Sided Credential Platform

*Prepared for Kyle Atkins · Veritas Technology Solutions · 2026-08-13*

> This supersedes the "aggregation wedge" framing in the earlier competitive analysis. After Kyle's input on the **Path** mission and the **certifying-body** opportunity, PathPort's thesis is bigger and more defensible than "a better credential vault."

---

## The reframe: one engine, three front doors, a guidance layer on top

PathPort is not a vault with features bolted on. It's a **credential + CEU + renewal engine** exposed to three audiences, with a **guidance engine (the "Path")** that makes the stored data actually useful, and a **CE marketplace** that monetizes intent.

- **Front door 1 — Individuals.** "Every credential, always current, and a map for where to go next."
- **Front door 2 — Employers.** "Know who on your team is compliant, before it's a problem."
- **Front door 3 — Certifying bodies (the new one).** "Run your entire certificant base's recertification in a modern system — better than Prometric, cheaper than LearningBuilder."

This is the key point that answers the "isn't this scope creep?" worry: **it's the same underlying engine every time.** A credential record, a CEU/PDU ledger, renewal rules, expiration dates, and a notification system serve all three audiences. Your live schema already models most of it (`credentials`, `credential_types`, `continuing_education`, `certifying_bodies`, `credential_requirements`, `renewal_checklists`, `organizations`). You're not building three products — you're building one engine and three interfaces onto it.

**New positioning line:**
> *PathPort is your career's system of record — it holds every credential, warns you before anything lapses, and shows you where to go next. And for the organizations that issue credentials, it runs the whole thing.*

---

## Part I — The Path Engine (the core, not the creep)

Storage is table stakes and it's boring. The reason someone opens PathPort when nothing is expiring — and the reason it's defensible — is the **Path**. It does three jobs:

### 1. The renewal safety net (the emotional hook)
Your colleague's lapsed AHA certs are the entire pitch: a system that merely *stored* his cards would have done nothing; a system that *watched the calendar and told him* would have saved the redo. Most people hold multiple credentials on **different cycles from different bodies** (AHA every 2 years, state license on another, NREMT on another). Nobody tracks that well.

- Multi-credential, multi-cycle expiration tracking with **escalating, proactive notifications** (email + push + SMS) at 90/60/30/7 days — not one buried email.
- Every alert is **actionable**: "Your ACLS expires in 60 days. Here's how to renew, and here are 3 approved options." (This is where the safety net feeds the marketplace.)
- Doing this *reliably across many credentials* is the wedge. It's also the feature that generates word-of-mouth ("PathPort literally saved my license").

### 2. Next-step discovery (the "Path" mission)
This is what you built the product for. Most professionals don't know what's *adjacent* to what they hold:

- The experienced EMS provider who's never heard of a **Certified EMS Training Officer** path.
- The nurse who doesn't know **CVAHP** exists (straight out of your AHVAP world).
- The new grad with a bachelor's and no map.

The engine looks at what someone holds + their role, experience, and stated goals (your schema already has a `goals` table) and surfaces: *"People with your credentials often pursue X next,"* *"You're two steps from Y,"* *"Z is an adjacent specialization."*

### 3. CE / course routing (the everyday utility + the money)
"I need CEUs but I don't know if I should use Coursera or Udemy" is a real, constant decision. The engine routes people to options that **actually satisfy their specific requirement** — matched to the credential's approved categories, hours, format, and cost — instead of a generic search. This is the surface that becomes the marketplace.

### How the Path engine actually works: the credential knowledge graph

The hard, valuable, copy-resistant asset underneath all three jobs is a **structured credential graph**:

- **Nodes:** credentials, designations, degrees (you have `credential_types`).
- **Edges:** `next_step`, `adjacent`, `prerequisite`, `specialization` — the pathways.
- **Attached data:** renewal rules, CEU category requirements, approved CE options, cost, issuing body (you have `credential_requirements`, `ceu_requirements`, `certifying_bodies`).

**Building it — and why you specifically win here:** you seed the **EMS and nursing graphs by hand, from your own domain expertise.** Almost nobody can author those as well as you can. That's your unfair advantage showing up again. Then you expand vertical-by-vertical with LLM-assisted drafting, partner/issuer-supplied data (issuers *give* you their pathway data — see Part II), and community contribution. The graph compounds: every issuer and every vertical you add makes the guidance smarter for everyone.

**Recommendation logic:** rules-first (deterministic, explainable, requirement-matched) at launch; an LLM-assisted conversational layer later ("where should I go next?" / "Coursera vs Udemy for this?"). Keep the rules-based core honest and transparent — it's the trust foundation the marketplace depends on.

---

## Part II — The three-sided model (and why the certifying-body side is the clever wedge)

### The new segment: certifying bodies / issuers

Small-to-mid certifying organizations (ALM, AHVAP, and thousands of niche professional certs) have the same problem from the *other* side: they have to manage recertification for their whole certificant base — collect CEUs, verify them, track cycles, renew, report — and their current options are **spreadsheets, email, or legacy systems** (LearningBuilder/Heuristic Solutions, Momentive/Community Brands, Oasis LMS, Certifier) that are expensive and clunky, or **Prometric**, which is really exam delivery, not modern recert management.

**PathPort for Certifying Bodies:** the issuer defines their credential's recert rules once; their certificants get PathPort accounts, submit CEUs into a clean workflow, and the issuer reviews/approves and **renews in a few clicks** with full reporting and audit trail. "Better than Prometric" is a fair, fundable claim for the recert use case.

### The insight that makes this defensible: don't fight issuance — own the lifecycle it ignores

Issuance is commoditizing. **Credly** issues badges perfectly well — but it **does not track recertification, CEUs, or PDUs.** **Certifier** is *free* and has an open **API** — but it, too, is an *issuing* tool, not a lifecycle manager. The same is true across the board: the market has plenty of ways to *hand out* a credential and almost nothing good for managing what happens over the **years after** — the CEUs earned, the cycle clock, the renewal, the ongoing relationship with the certificant.

So PathPort's play is **not** to build a better badge issuer. It's to **integrate with all of them and own the part they skip:**

- **Ride on top of existing issuance.** Pull issued credentials in via the **Credly API, the Certifier API, and Open Badges** — for the *individual* (their badge wallet) *and* for the *issuer* (sync their whole cohort). The issuer keeps whatever issuing tool they love; PathPort becomes the recert layer over it.
- **Own the lifecycle nobody else does:** CEU/PDU capture and verification, multi-cycle tracking, the renewal safety net, reporting, and certificant engagement.
- **Position as a complement, not a competitor,** to Credly/Certifier: *"Keep issuing however you like. PathPort manages everything after the badge is earned."* That framing lowers the barrier to adoption (you're not asking them to rip out issuing) and sidesteps a fight with well-funded issuers.

This also sharpens "better than Prometric/LearningBuilder": those legacy suites try to own issuing *and* management and charge accordingly. PathPort can sit lightly on top of **free/cheap issuing (Certifier's free API, Credly)** and win purely on the lifecycle — a smaller surface to build and a cheaper, more modern offer for the certifying body.

### Why this is arguably the *smartest* wedge, not just another segment

1. **You have warm relationships right now.** ALM is a client. AHVAP is a relationship. You can land a lighthouse issuer without cold outreach — most startups would kill for that.
2. **One issuer delivers a cohort.** Signing ALM auto-onboards *hundreds* of certificants as individual PathPort users. That **solves the cold-start problem** that plagues every consumer app — you don't acquire users one $8 subscription at a time.
3. **Higher ACV, stickier, less price-sensitive.** An org contract dwarfs individual subs and doesn't churn on a whim once their recert runs on you.
4. **It supplies the graph.** Issuers hand you authoritative pathway + requirement data for their credentials — feeding the Path engine for free.

### The flywheel (this is the real engine)

```
Certifying body runs recert on PathPort
        ↓  (auto-onboards their certificants)
Individuals get accounts → hold OTHER credentials too
        ↓  (vault + renewal safety net + Path guidance)
Path routes them to CE / next-step options
        ↓  (high-intent, about-to-renew audience)
CE providers & issuers pay for those leads / placement
        ↓  (revenue funds growth + better data)
More issuers join → more individuals → smarter graph
```

Each side strengthens the others. The issuer side seeds users; the individual side creates marketplace demand; the marketplace and subscriptions fund the build; the data makes guidance better, which retains everyone. This is a **multi-sided network effect** on top of the knowledge-graph moat — a genuinely defensible position, not just a nicer UI.

### Strategic partnership: Pocket Prep (the prep → hold → recert loop)

Pocket Prep offers exam prep across ~150 exams and does it well (Kyle authors their NREMT content — genuine warm access). Their users are people **actively earning credentials right now** — the exact moment PathPort wants to catch them. The loop is clean and non-competitive: **Pocket Prep preps you → you pass → PathPort holds it, tracks recert, and maps your path → the Path engine points to your next credential → back to Pocket Prep to prep for that one.** Their DNA is prep/testing; yours is the lifecycle after. Three shapes, lightest to heaviest:

1. **Cross-promo / affiliate** — they promote PathPort to exam-passers; the Path engine recommends their prep for next-step credentials, with affiliate revenue both directions. *Start here.*
2. **Data partnership** — their 150-exam taxonomy is a ready-made seed for the credential knowledge graph and marketplace inventory.
3. **Strategic** — deeper integration/investment later.

**How to approach it:** lead with one small, specific, mutually-beneficial ask (a cross-promo pilot), not "partner on everything." Be measured about how much of the graph/roadmap you expose — a well-resourced partner *could* build recert themselves, though it's off their core. This is likely your **best top-of-funnel** and worth a real conversation once there's an MVP to point at.

---

## Part III — The CE marketplace (your advertising idea, made real and safe)

Your instinct to "sell advertising to renewal providers" is right, and it can eventually rival subscription revenue — but sequence it and guard it:

- **v1 — Affiliate / referral (no sales team needed).** Many CE providers and course platforms run affiliate/referral programs. When the engine routes a user to an option they enroll in, you earn a referral fee. Zero friction, works from day one, aligned incentives.
- **v2 — Sponsored placement & featured providers.** Once you have traffic, CE providers and certifying bodies pay for visibility to your **high-intent, about-to-renew** audience (the most valuable ad inventory in this space — these people *have* to buy CE).
- **v3 — Issuer lead-gen.** Certifying bodies pay for qualified prospects who are one credential away from theirs (e.g., surface CVAHP to compliant nurses).
- **v4 — Recert payment processing (Phase 2+, but design for it now).** Many small issuers charge a recertification fee and collect it clumsily. If PathPort collects that fee *inside* the renewal flow via **Stripe Connect** and pays the issuer out, you earn a **payments take-rate** (a small platform fee per transaction) on top of the SaaS subscription — and payment volume scales with the certificant base, not seats. More importantly, once the money flows through you the **switching cost becomes enormous**; this is what fully completes "we manage the after." Caveat: Stripe Connect makes PathPort a payment facilitator (connected-account onboarding/KYC, refunds, chargebacks, tax) — Express accounts handle most of it, but it's real surface, hence Phase 2+. Do now: model `recert_payments` / connected-account fields so it isn't a retrofit later.

**The trust guardrail — design this in from day one, not later.** The moment money changes *what satisfies a requirement*, the guidance is worthless and the whole product dies. Rules:

1. Payment may influence **ordering among equally-valid options**, never **whether an option satisfies a requirement.**
2. Sponsored results are **always labeled** and visually separated from algorithmic "meets your requirement" results.
3. The requirement-matching logic stays transparent and unpaid.

Your credibility *is* the product. Protect it and the marketplace prints money; compromise it and you're just another ad-choked directory.

---

## Part IV — Schema additions (on top of your existing 32 tables)

Mostly additive; the engine bones already exist.

- **`credential_pathways`** — the graph edges: `from_credential_type_id`, `to_credential_type_id`, `relationship` (next_step | adjacent | prerequisite | specialization), `vertical`, `rationale`.
- **`learning_resources`** (CE marketplace inventory) — provider, type (course | ceu | exam | bundle), `credential_type_id` links, satisfies-categories, hours, cost, format, `affiliate_url`, `is_sponsored`.
- **`ce_providers` / advertisers** — marketplace supply side + billing.
- **Issuer side:** extend `certifying_bodies` + `organization_members` with an **issuer-admin** role; add **`certification_programs`** (owned by a body), **`certificants`** (user ↔ program: cycle, status), and a **`ceu_submissions`** review workflow (submitted → under_review → approved/rejected) feeding `renewal_checklists`.
- **`notifications` + `notification_preferences`** — the escalating renewal safety net (channels, schedule, per-credential).
- **`issuer_integrations`** — connector config + sync state for pulling issued credentials from **Credly, Certifier (free API), and Open Badges**, at both the individual (badge wallet) and issuer (cohort sync) level. This is the "ride on top of issuance" plumbing; PathPort owns the recert lifecycle over whatever they issue with.

I can turn this into DDL against the consolidated baseline whenever you want.

---

## Part V — Sequencing (the honest strategic call)

You can't build all three sides at once, and you shouldn't. But the order I'd choose is **B2B2C, led by a lighthouse issuer** — because it's faster to real revenue *and* it seeds the user base:

1. **Build the shared engine** (credential + CEU + renewal + notifications). Needed by everyone regardless.
2. **Land ALM (or AHVAP) as a lighthouse issuer pilot.** Warm, high-value, and it forces you to build the recert/CEU-submission workflow while auto-onboarding hundreds of individuals. Keep the individual Free/Pro tier live as the surface those certificants land in. *This is likely your fastest path to a paying customer AND your cold-start solution in one move.*
3. **Turn on the Path engine** for those seeded individuals — starting with the EMS/nursing graph you author — plus the renewal safety net.
4. **Layer the CE marketplace** as affiliate first.
5. **Broaden:** more issuers, more verticals, the employer tier, then sponsored marketplace.

**The tradeoff to weigh:** leading with an issuer means more to build (issuer admin, submission review, reporting) before first revenue than a pure consumer launch — but the revenue is bigger, stickier, and brings its own users. Given your warm relationships, I think it's the right bet. The alternative (consumer-first via your EMS/nurse audience) is lower-build but slower to meaningful revenue and doesn't solve cold-start. **My recommendation: pursue the ALM issuer pilot as the wedge, with the consumer tier riding along underneath.**

---

## Part VI — Risks & guardrails

- **The real scope risk isn't the vision — it's trying to *productize* all three sides simultaneously.** Build one engine; expose one front door at a time. Lead with the issuer pilot; don't open a full employer sales motion and a consumer ad campaign and an issuer product in the same quarter.
- **Trust in the marketplace** (covered in Part III) — the single most important guardrail.
- **Graph cold-start** — start narrow (EMS + nursing, authored by you). A shallow graph across 20 verticals is useless; a deep one in two is magic.
- **Notification reliability is now safety-critical.** If people trust PathPort to warn them and it misses one, that's your colleague's story with your name on it. This deserves real engineering rigor (idempotent scheduled jobs, delivery confirmation, redundant channels).
- **Don't over-claim "verified."** Tiered trust labels (self-reported / imported / issuer-verified). On the issuer side you *can* legitimately claim issuer-verified — lean into that as a differentiator.

---

## Sources

- [Certification Management Software 2026 Guide — Oasis LMS](https://oasis-lms.com/post/certification-management-software)
- [Recertification Management: More than CE Tracking — Heuristic Solutions (LearningBuilder)](https://www.heuristics.net/recertification-management-more-than-ce-tracking/)
- [Professional Certification Management Software 2026 — CE App](https://myceapp.com/blog/professional-certification-management-software)
- [Certification Management Software — Momentive Software](https://momentivesoftware.com/solutions/certification-management/)
- Prior PathPort docs: `PathPort-Competitive-GTM-Analysis.md`, `PathPort-Pricing-Strategy.md`, `PathPort-Rebuild-Plan.md`
