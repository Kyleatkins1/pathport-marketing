import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: '',
    title: 'PathPort — Living Professional Record, Tailored Portfolios & PathAI',
    description: 'Maintain yourself once. Present yourself many ways. Turn unlisted projects into rich case studies, build tailored portfolios, track CE renewals, and chart your career with PathAI.'
  },
  {
    path: 'for/nurses',
    title: 'PathPort for Nurses & Healthcare Leaders — Licenses, CEUs & FACHE®',
    description: 'Consolidate multi-state RN/NP licenses, specialty board certifications, FACHE® records, and mandatory CE contact hours into verified case studies and tailored portfolios.'
  },
  {
    path: 'for/paramedics',
    title: 'PathPort for Paramedics & EMS — NCCP Recert, Flight Evidence & FP-C',
    description: 'Consolidate NREMT, state paramedic licenses, and IBSC board specialties (FP-C, CCP-C). Document high-acuity resuscitation case studies and QA protocols in one living record.'
  },
  {
    path: 'for/project-managers',
    title: 'PathPort for Project & Technical Leaders — PMP®, 60 PDUs & Delivery Case Studies',
    description: 'Show the real work behind the PMP®. Consolidate PMP®, Scrum, and cloud architecture certifications with verified delivery case studies and 3-year CCRS cycle tracking.'
  },
  {
    path: 'for/students',
    title: 'PathPort for Students & Early Career — Capstone Evidence & Research',
    description: "Don't wait until graduation for a sparse 1-page résumé. Document capstones, lab research, and micro-certifications in a living digital portfolio."
  },
  {
    path: 'for/enterprise',
    title: 'PathPort Teams — Workforce Compliance Radar, License Lapse Prevention & Privacy',
    description: 'Eliminate spreadsheet chaos and regulatory fines. Real-time workforce compliance radar for healthcare systems, aviation, and engineering enterprises.'
  },
  {
    path: 'for/board-certifications',
    title: 'PathPort Certify — Modern Credential Governance & Reviewer Workspace',
    description: 'Automate topic audit math, reviewer submission queues, and authoritative provenance badges for healthcare, engineering, and specialty certification programs.'
  },
  {
    path: 'privacy',
    title: 'PathPort — Privacy Policy & Zero Data Selling Commitment',
    description: 'PathPort Privacy Policy. Individual record sovereignty, privacy-by-default architecture, scoped employer consent, and zero data selling commitment.'
  },
  {
    path: 'terms',
    title: 'PathPort — Terms of Service',
    description: 'PathPort Terms of Service. Individual record sovereignty, commercial terms, and acceptable use policies provided by Veritas Technology Solutions, LLC.'
  },
  {
    path: 'security',
    title: 'PathPort — Security & Data Protection Architecture Whitepaper',
    description: 'PathPort Security Whitepaper. Technical specifications for AES-256 storage encryption, PostgreSQL Row Level Security (RLS), and 6-level provenance standards.'
  },
  {
    path: 'p/sarah-jenkins-rn',
    title: 'Sarah Jenkins, BSN, RN — Verified PathPort Record & Portfolio',
    description: 'Critical Care Charge Nurse & Clinical Preceptor in New York, NY. Verified NYS RN & CCRN® credentials with sepsis protocol case study.'
  },
  {
    path: 'p/elena-flight-lead',
    title: 'Elena Rodriguez, NRP, FP-C — Verified PathPort Record & Portfolio',
    description: 'Critical Care Flight Paramedic & Clinical Educator in Denver, CO. NREMT and IBSC FP-C flight transport credentials.'
  },
  {
    path: 'p/marcus-vance',
    title: 'Marcus Vance, PMP®, CSM — Verified PathPort Record & Portfolio',
    description: 'Senior Technical Program Director. PMP® certified with 4-region database migration case study.'
  },
  {
    path: 'p/david-kim-bio',
    title: 'David Kim, MS — Verified PathPort Record & Portfolio',
    description: 'Bioengineering Research Fellow & Capstone Lead. Published peer-reviewed research in microfluidic biosensors.'
  }
];

function generatePrerenderedPages() {
  const baseHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

  routes.forEach(route => {
    let customizedHtml = baseHtml;

    // Replace title
    customizedHtml = customizedHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    );

    // Replace description
    customizedHtml = customizedHtml.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${route.description}" />`
    );

    // Replace OG title
    customizedHtml = customizedHtml.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${route.title}" />`
    );

    // Replace OG description
    customizedHtml = customizedHtml.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${route.description}" />`
    );

    // Replace Twitter title
    customizedHtml = customizedHtml.replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    );

    // Replace Twitter description
    customizedHtml = customizedHtml.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    if (route.path === '') {
      fs.writeFileSync(baseHtmlPath, customizedHtml, 'utf8');
      console.log(`✓ Prerendered: /index.html (Homepage)`);
    } else {
      const targetFolder = path.join(distDir, route.path);
      if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
      }

      fs.writeFileSync(path.join(targetFolder, 'index.html'), customizedHtml, 'utf8');
      console.log(`✓ Prerendered: /${route.path}/index.html`);
    }
  });

  console.log('✅ Static Prerendering completed successfully for all routes including homepage.');
}

generatePrerenderedPages();
