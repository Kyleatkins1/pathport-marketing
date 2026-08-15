# Loops.so Email Automation & Onboarding Campaign Guide

## 1. Automation ("Loop") & Audience Setup in Loops.so

### Step 1: Mailing List Configuration
- **Mailing List Name:** `PathPort Beta`
- **Mailing List ID:** `cmstx4t94ey4r0jx5a3psh1cb`
- **List Scope:** All successful Register for Beta Access submissions are automatically enrolled in this list.

### Step 2: Create the Loop Automation
1. Navigate to **Loops** (https://app.loops.so) ➔ **Automations (Loops)**.
2. Click **Create Loop** and name it `Beta Onboarding Sequence`.
3. **Trigger Condition:**
   - Trigger: `Contact Added to List` ➔ Select `PathPort Beta` (or trigger on `userGroup equals "beta_waitlist"`).

---

## 2. Server Configuration & Cloudflare Pages Environment Variables

To protect credentials, the Loops API key is kept strictly on the server side:

### Environment Variables
| Variable Name | Description | Example / Value |
|---|---|---|
| `LOOPS_API_KEY` | Secret Loops API Key (Keep Encrypted) | `00e90...` |
| `LOOPS_BETA_LIST_ID` | Loops Mailing List ID for "PathPort Beta" | `cmstx4t94ey4r0jx5a3psh1cb` |

### Setting up in Cloudflare Pages:
1. Go to the **Cloudflare Dashboard** ➔ **Workers & Pages**.
2. Select the `pathport-marketing` Pages project.
3. Navigate to **Settings** ➔ **Environment variables**.
4. Click **Add variables**:
   - Variable name: `LOOPS_API_KEY` ➔ Value: `<your-loops-api-key>` (Select **Encrypt**).
   - Variable name: `LOOPS_BETA_LIST_ID` ➔ Value: `cmstx4t94ey4r0jx5a3psh1cb`.
5. Apply to both **Production** and **Preview** environments and save.

---

## 3. Contact Properties Mapped on Registration

Every submission to `/api/beta-signup` idempotently stores:
- `email`: Normalized lowercase email string
- `firstName`: User's first name
- `userGroup`: `beta_waitlist`
- `audience`: Selected target role (e.g. `Nurse / Healthcare Professional`, `Project Manager / PMO`, etc.)
- `source`: `PathPort`
- `betaSource`: Contextual source (e.g. `homepage`, `pricing_table`, `nurses_funnel`)
- `betaRegisteredAt`: ISO 8601 registration timestamp
- `utmSource`, `utmMedium`, `utmCampaign`: URL attribution parameters (when present)
- `mailingLists`: `{ [LOOPS_BETA_LIST_ID]: true }` (Subscribes user to `PathPort Beta`)

---

## 4. Drip Campaign Email Templates

### Email 1: Welcome & Beta Registration Confirmation
* **Send Timing:** Immediately on submission (`Delay: 0 minutes`)
* **Subject:** `Welcome to the PathPort Beta — You're on the List`
* **Preview Text:** `Maintain yourself once. Present yourself many ways.`

**Body Content:**
```markdown
Hi {{firstName | default: "there"}},

Welcome to the founding community of PathPort.

Your career is bigger than a static 1-page résumé. Over years of practice, you’ve led critical projects, earned demanding certifications, resolved complex crises, and accumulated continuing education. 

PathPort is built to give you back ownership of your professional story:

1. **The Canonical Living Record:** Consolidate your licenses, board certifications, degrees, and work history in one persistent, portable profile you own.
2. **Structured Case Studies:** Document the real work behind your credentials—Challenge, Approach, and Measurable Outcomes with attached evidence.
3. **Tailored Portfolios:** Create dedicated public or unlisted views (e.g. `getpathport.com/p/yourname`) for specific hiring managers, medical directors, or clients with zero copy-pasting.
4. **Organized CE & Provenance:** Real-time renewal organization across multi-topic category requirements with source verification.

We’re expanding beta access and testing new capabilities with founding members. Keep an eye on your inbox for your access updates.

In the meantime, feel free to reply directly to this email with what you're most excited to build.

Warm regards,

**The PathPort Team**
Veritas Technology Solutions
https://getpathport.com
```

---

### Email 2: The Things a Résumé Leaves Behind (Case Studies)
* **Send Timing:** 3 days after signup (`Delay: 3 days`)
* **Subject:** `The things a résumé leaves behind`
* **Preview Text:** `How to turn unlisted accomplishments into verifiable proof.`

**Body Content:**
```markdown
Hi {{firstName | default: "there"}},

When you apply for a high-impact leadership role, a grant, or a specialty clinical credential, what does a standard résumé drop?

- The constraints you navigated when a project was falling behind.
- The clinical protocol you co-authored that dropped ICU transfer delays by 40%.
- The multi-region architectural decision that avoided database downtime.
- The actual evidence—code repos, conference slides, and verified certificates.

In PathPort, you don't reduce a 6-month initiative to two bullet points. You capture it as a **Structured Case Study**:

- **Context & Constraints:** Where and why this problem occurred.
- **Challenge:** The specific obstacle or risk.
- **Your Approach & Role:** Exact methods, frameworks, and leadership applied.
- **Outcome & Evidence:** Measurable metrics, linked credentials, and attached artifacts.

As your beta access expands, we'll guide you through creating your first case study in minutes.

Best,
**The PathPort Team**
```

---

### Email 3: Maintain Once, Present Many Ways (Tailored Portfolios)
* **Send Timing:** 7 days after signup (`Delay: 4 days after Email 2`)
* **Subject:** `One living record. Endless tailored views.`
* **Preview Text:** `Build role-specific portfolios without duplicate files or outdated links.`

**Body Content:**
```markdown
Hi {{firstName | default: "there"}},

Most professionals have multiple distinct audiences:
- A prospective employer looking for executive leadership.
- A clinical board reviewing recertification contact hours.
- A client evaluating specific technical capabilities.
- An academic institution reviewing teaching and preceptorship.

With traditional websites or PDF resumes, you’re forced to maintain different file versions that quickly become stale.

PathPort solves this:
Your credentials, case studies, and experiences live in your core record once. When you build a tailored portfolio view (like `/p/{{firstName | downcase}}-leadership`), you select which items to spotlight.

If you update a credential or earn a new license, every active portfolio link updates automatically.

Get ready to share your first tailored link.

Best,
**The PathPort Team**
```

---

### Email 4: CE Tracking & Scoped Privacy
* **Send Timing:** 12 days after signup (`Delay: 5 days after Email 3`)
* **Subject:** `Keep your renewals organized and compliant`
* **Preview Text:** `Automated topic organization meets strict privacy firewalls.`

**Body Content:**
```markdown
Hi {{firstName | default: "there"}},

If you hold state licenses (Nursing, EMS, Engineering) or board credentials (CCRN, FP-C, PMP, AWS), you know the dread of logging into multiple portals to check topic minimums weeks before a renewal deadline.

PathPort's **CE Renewal Organizer** automatically categorizes your logged courses against specific topic requirements (like infection control, pharmacotherapeutics, or pediatric resuscitation).

Even better: our **Privacy-by-Default Architecture** ensures that when you connect with an employer, they only see the credentials strictly required for your active job role. Your personal projects, private case studies, and career goals remain yours alone.

We're excited to have you with us on the PathPort journey.

Warmly,
**The PathPort Team**
```
