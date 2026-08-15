import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: '',
    title: 'PathPort — Your Living Professional Record',
    description: 'Your career is bigger than a résumé. PathPort is your portable professional record. Capture verified evidence, turn projects into rich case studies, present tailored portfolios, and guide your career growth.'
  },
  {
    path: 'for/nurses',
    title: 'PathPort for Nurses & Healthcare Leaders — Licenses, CEUs & Career Growth',
    description: 'Consolidate multi-state RN/NP licenses, specialty board certifications, executive records, and mandatory CE contact hours into verified case studies and tailored portfolios.'
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
    title: 'PathPort Teams — Workforce Compliance Radar, Expiration Tracking & Privacy',
    description: 'Reduce administrative friction and compliance risks. Real-time workforce credential expiration tracking for healthcare, aviation, and engineering enterprises.'
  },
  {
    path: 'for/board-certifications',
    title: 'PathPort Certify — Modern Credential Governance & Reviewer Workspace',
    description: 'Automate topic audit calculations, reviewer submission queues, and authoritative provenance badges for healthcare, engineering, and specialty certification programs.'
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
    description: 'PathPort Security Whitepaper. Technical specifications for AES-256 storage encryption, PostgreSQL Row Level Security (RLS), and source verification standards.'
  },
  {
    path: 'p/sarah-jenkins-rn',
    title: 'Sarah Jenkins, BSN, RN — Simulated Demo Portfolio',
    description: 'Critical Care Charge Nurse & Clinical Preceptor in New York, NY. Verified NYS RN & CCRN® credentials with sepsis protocol case study (Demo).'
  },
  {
    path: 'p/elena-flight-lead',
    title: 'Elena Rodriguez, NRP, FP-C — Simulated Demo Portfolio',
    description: 'Critical Care Flight Paramedic & Clinical Educator in Denver, CO. NREMT and IBSC FP-C flight transport credentials (Demo).'
  },
  {
    path: 'p/marcus-vance',
    title: 'Marcus Vance, PMP®, CSM — Simulated Demo Portfolio',
    description: 'Senior Technical Program Director. PMP® certified with 4-region database migration case study (Demo).'
  },
  {
    path: 'p/david-kim-bio',
    title: 'David Kim, MS — Simulated Demo Portfolio',
    description: 'Bioengineering Research Fellow & Capstone Lead. Published research in microfluidic biosensors (Demo).'
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
