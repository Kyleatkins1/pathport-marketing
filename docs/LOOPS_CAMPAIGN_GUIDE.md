# Loops.so Email Automation & Onboarding Campaign Guide

## 1. Automation ("Loop") Setup in Loops.so

### Step 1: Create the Loop Automation
1. Navigate to **Loops** (https://app.loops.so) ➔ **Automations (Loops)**.
2. Click **Create Loop** and name it `Beta Onboarding Sequence`.
3. **Trigger Condition:**
   - Trigger: `Contact Added` or `Contact Updated`
   - Filter: `User Group equals "Beta Waitlist"`

---

## 2. Drip Campaign Email Templates

### Email 1: Welcome & Founding Cohort Confirmation
* **Send Timing:** Immediately on submission (`Delay: 0 minutes`)
* **Subject:** `Welcome to the PathPort Beta — Your Living Record Invitation`
* **Preview Text:** `Maintain yourself once. Present yourself many ways.`

**Body Content:**
```markdown
Hi {{firstName | default: "there"}},

Welcome to the founding cohort of PathPort.

Your career is bigger than a static 1-page résumé. Over years of practice, you’ve led critical projects, earned demanding certifications, resolved complex crises, and accumulated continuing education. 

PathPort is built to give you back ownership of your professional story:

1. **The Canonical Living Record:** Consolidate your licenses, board certifications, degrees, and work history in one persistent, portable profile you own forever.
2. **Structured Case Studies:** Document the real work behind your credentials—Challenge, Approach, and Measurable Outcomes with evidence attachments.
3. **Tailored Portfolios:** Create dedicated public or unlisted views (e.g. `getpathport.com/p/yourname`) for specific hiring managers, medical directors, or clients with zero copy-pasting.
4. **Automated CE & Provenance:** Real-time renewal math across multi-topic category requirements with 6-level provenance verification.

As a founding beta member, your personal living record and portfolio features are free for life.

We are rolling out invitation links to private beta workspaces weekly. Keep an eye on your inbox for your access link.

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

When cohort access opens for your account this week, we'll walk you through creating your first case study in under 5 minutes.

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

With traditional websites or PDF resumes, you’re forced to maintain 5 different file versions that quickly become stale.

PathPort uses an **object-reference architecture**:
Your credentials, case studies, and experiences live in your core record once. When you build a tailored portfolio (like `/p/{{firstName | downcase}}-leadership`), you select which items to spotlight.

If you update a credential or earn a new license, every active portfolio link updates automatically.

Get ready to share your first tailored link.

Best,
**The PathPort Team**
```

---

### Email 4: CE Tracking & Scoped Privacy
* **Send Timing:** 12 days after signup (`Delay: 5 days after Email 3`)
* **Subject:** `Never panic before a renewal deadline again`
* **Preview Text:** `Automated topic audit math meets strict privacy firewalls.`

**Body Content:**
```markdown
Hi {{firstName | default: "there"}},

If you hold state licenses (Nursing, EMS, Engineering) or board credentials (CCRN, FP-C, PMP, AWS), you know the dread of logging into multiple portals to check topic minimums weeks before a renewal deadline.

PathPort's **CE Renewal Engine** automatically checks your logged courses against specific topic requirements (like infection control, pharmacotherapeutics, or pediatric resuscitation).

Even better: our **Privacy-by-Default Architecture** ensures that when you connect with an employer, they only see the credentials strictly required for your active job role. Your personal projects, private case studies, and career goals remain yours alone.

We're excited to have you with us on the PathPort journey.

Warmly,
**The PathPort Team**
```
