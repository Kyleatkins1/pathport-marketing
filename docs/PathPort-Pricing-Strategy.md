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
| **Price** | $0 | **$8/mo** or **$79/yr** (2 months free) | **$5/user/mo**, billed annually · 5-seat minimum (~$300/yr floor) |
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

**Pro at $8/mo or $79/yr** is priced above CE Broker's $39.99 Professional tier on purpose — you're selling value, not undercutting. The justification is on the label: PathPort Pro covers *every* credential and profession, imports badges, builds a real portfolio, and parses your resume — CE Broker does none of that. The wedge to hammer in copy: **CE Broker puts "am I actually compliant?" behind its paywall and users resent it; PathPort makes compliance clarity the headline of Pro.** The annual plan at $79 works out to ~$6.58/mo — real savings that pull people onto a yearly commitment, which matters because credential renewal is inherently an annual behavior and annual plans cut churn hard. $8/mo stays in "affordable, slight stretch" territory rather than a grudging purchase.

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

## Launch levers (locked)

- **Founding Member offer** *(replaces a lifetime deal — deliberately).* A lifetime price is a bad promise when you can't guarantee a lifetime of operation, and it caps your revenue on your most committed users. Instead: **$49/yr locked for 2 years** (or $4.99/mo), for roughly the first 500 signups, then the plan reverts to standard $79/$8. It rewards early adopters, pulls cash forward, and creates a 2-year commitment window — with zero perpetual liability. Enforce the price-lock window in app logic + the Stripe subscription, not as a permanent plan.
- **Free for students / EDU** — verify a `.edu` or high-school email → free Pro-lite. It costs you little (students are low-usage), seeds the top of your funnel, and converts as they graduate into nurses/professionals who then need the real thing.

---

## How this maps to what you've already built

Your `subscription_plans` table already has the exact columns this needs: `price`, `billing_cycle`, `features` (jsonb flags), `max_users`, `max_documents`, `max_ceu_entries`, `stripe_price_id`. So this isn't a schema change — it's four seed rows (Free, Pro-monthly, Pro-annual, Org) plus feature flags. **I can generate that seed file and the Stripe price setup next, and build the pricing page for the new marketing repo, once you're happy with the numbers.**

---

## Locked decisions (2026-08-13)

1. **Org/Teams ships in v1** — billing plumbing built from the start, since B2B is the actual business.
2. **Price points:** Free $0 · Pro $8/mo or $79/yr · Teams $5/user/mo (5-seat min). Value-sold above CE Broker, not undercutting.
3. **No lifetime deal.** Replaced by the Founding Member offer ($49/yr locked for 2 years, first ~500 users).

**Next build steps:** (a) `subscription_plans` seed rows — done, see `seed_subscription_plans.sql`; (b) Stripe products/prices to get real `stripe_price_id` values (needs your Stripe account + the server route to hold the secret key); (c) the pricing page in the marketing repo (needs brand/design direction).
