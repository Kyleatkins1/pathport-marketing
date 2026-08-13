# PathPort — Pricing & Tier Strategy

*Prepared for Kyle Atkins · 2026-08-13*

---

## The market reality that should drive this

Before the tiers, the two facts that matter most, because they should shape the numbers more than any pricing theory:

- **Your launch persona's incumbent is nearly free.** The new-grad nurse already uses **CE Broker**, priced **Free / $39.99/yr / $89.99/yr** — and in several states the free tier is *mandated*, so basic CE tracking is effectively free forever. You cannot out-price free, and you shouldn't try to charge a nurse $15/mo to do what CE Broker's free tier already does.
- **The real margin is in the SMB-org middle.** Enterprise credential-compliance tools (Certemy, Cobalt, TalentGuard) start at **~$10k–$350k/yr**. That leaves a wide, underserved gap: small hospitals, clinics, fire/EMS departments, nursing schools, and training programs who need org-wide credential tracking but will never pay enterprise prices.

**The strategic conclusion — and the one assumption I'm making explicit so you can veto it:** treat **B2C as the acquisition and beachhead engine, and B2B/orgs as the actual business.** Price the consumer tiers to convert and build the nurse beachhead, not to maximize revenue per user. The org tier is where PathPort makes money. If you disagree and want consumer ARPU to be the engine, tell me — it changes the numbers below.

Your differentiation vs CE Broker is also what justifies charging anything at all: PathPort isn't a nursing-only CE compliance logger. It's an **all-credential vault + portfolio + badge import + career advisor** that works for *any* profession, plus the high-schooler and the 50-cert power user. Lead with that breadth; don't compete head-on as "a cheaper CE Broker."

---

## Recommended tiers

Billing is **annual-forward** on purpose: credential renewal is an annual behavior, annual plans cut churn, and it matches how the incumbent prices. Offer monthly at a premium for people who want it.

| | **Free** | **Pro** | **Teams / Org** |
|---|---|---|---|
| **Price** | $0 | **$59/yr** or $7/mo | **$5/user/mo**, billed annually · 5-seat minimum (~$300/yr floor) |
| **Who it's for** | High-schoolers, casual users, trials | The nurse, the 50-cert power user, any individual professional | Clinics, schools, fire/EMS depts, training programs |
| **Credentials stored** | Up to 10 | Unlimited | Unlimited per member |
| **CEU / renewal engine** | — | **Full compliance tracking** ("what do I still need") | Full, per member |
| **Expiration reminders** | Basic | Smart / scheduled | Org + individual |
| **Badge import** (Credly, Open Badges) | — | ✓ | ✓ |
| **Resume auto-import** | — | ✓ | ✓ |
| **Portfolio** | 1, PathPort URL | Multiple, custom slug | Org-branded |
| **Path advisor** | Preview only | ✓ | ✓ |
| **Admin dashboard / reporting** | — | — | ✓ org-wide compliance + expiration reporting |
| **Role-based requirement templates** | — | — | ✓ |
| **Bulk invite / credential verification** | — | — | ✓ |
| **Support** | Community | Email | Priority |
| **Later add-ons** | — | — | SSO, API, custom domain, white-label |

### Why these numbers

**Free at 10 credentials** is deliberately generous enough to be genuinely useful (a high-schooler's college portfolio fits easily) but hits a wall for the working professional the moment they get serious — which is exactly when you want the upgrade prompt. The cap is your `max_documents` lever.

**Pro at $59/yr** sits just above CE Broker's $39.99 Professional tier, and the justification is on the label: PathPort Pro covers *every* credential and profession, imports badges, builds a real portfolio, and parses your resume — CE Broker does none of that. The wedge to hammer in copy: **CE Broker puts "am I actually compliant?" behind its paywall and users resent it; PathPort makes compliance clarity the headline of Pro.** $7/mo monthly ($84/yr effective) nudges people to annual.

**Teams at $5/user/mo** undercuts enterprise credentialing by an order of magnitude and targets orgs who find Certemy/Cobalt absurd for a 30-person clinic. The 5-seat minimum sets a ~$300/yr floor so small deals still clear. This is your highest-margin, most-defensible revenue — a 40-person nursing school at $5/seat is $2,400/yr with near-zero marginal cost.

---

## The differentiation levers, stated plainly

Six axes separate the tiers. Keep them clean — don't let tiers differ on twenty tiny things:

1. **Volume** — credential/document cap (Free capped at 10; paid unlimited). Schema: `max_documents`.
2. **The compliance engine** — the single biggest value gate. Free tracks; **Pro tells you if you're compliant and what's missing.** Schema: `max_ceu_entries` + feature flag.
3. **Import** — badge (Credly/Open Badges) + resume auto-import are Pro+.
4. **Portfolio surface** — PathPort URL → custom slug → org-branded (Free → Pro → Org).
5. **Multi-user & oversight** — admin dashboard, org-wide reporting, requirement templates are Org-only.
6. **Support & enterprise plumbing** — SSO/API/white-label as the top-end upgrade path.

---

## Two launch levers worth considering (optional, not core tiers)

- **Lifetime Pro** — a one-time ~$149–199 offer, time-boxed to your first ~100–500 users. Power users (your 50-cert persona) love lifetime deals, it generates early cash before you have recurring revenue, and those buyers become evangelists. Cap it and sunset it.
- **Free for students / EDU** — verify a `.edu` or high-school email → free Pro-lite. It costs you little (students are low-usage), seeds the top of your funnel, and converts as they graduate into nurses/professionals who then need the real thing.

---

## How this maps to what you've already built

Your `subscription_plans` table already has the exact columns this needs: `price`, `billing_cycle`, `features` (jsonb flags), `max_users`, `max_documents`, `max_ceu_entries`, `stripe_price_id`. So this isn't a schema change — it's four seed rows (Free, Pro-monthly, Pro-annual, Org) plus feature flags. **I can generate that seed file and the Stripe price setup next, and build the pricing page for the new marketing repo, once you're happy with the numbers.**

---

## What I need from you to finalize

1. **Is B2B in v1, or does org come later?** (I'd build the org tier's billing plumbing in v1 even if you soft-launch it, since it's the business — but that's your call.)
2. **Are the price points in range,** or do you want to go cheaper (undercut CE Broker at ~$39/yr) or more premium (~$99/yr with heavier positioning)?
3. **Lifetime deal — yes/no** for launch?

Give me those three and I'll lock the numbers, write the `subscription_plans` seed, and build the pricing page.
