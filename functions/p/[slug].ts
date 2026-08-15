// Cloudflare Pages Edge Function for /p/:slug Public Passport OpenGraph Unfurler
/// <reference types="@cloudflare/workers-types" />

interface Env {}

interface EventContext<Env, P extends string, Data> {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<unknown>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env;
  params: Record<P, string | string[]>;
  data: Data;
}

type PagesFunction<Env = unknown, P extends string = string, Data extends Record<string, unknown> = Record<string, unknown>> = (
  context: EventContext<Env, P, Data>
) => Response | Promise<Response>;

const personaMeta: Record<string, { name: string; title: string; bio: string; avatar: string }> = {
  'sarah-jenkins': {
    name: 'Sarah Jenkins, BSN, RN',
    title: 'Critical Care Charge Nurse & Clinical Preceptor',
    bio: 'Critical Care Registered Nurse with 8 years in Level 1 Trauma ICU. Verified NYS RN & CCRN® credentials with sepsis protocol case study.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600'
  },
  'elena-rodriguez': {
    name: 'Elena Rodriguez, NRP, FP-C',
    title: 'Critical Care Flight Paramedic & Clinical Educator',
    bio: 'Critical care rotary transport clinician with 10 years pre-hospital experience. Specializing in high-altitude ventilation and pre-hospital RSI.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
  },
  'marcus-vance': {
    name: 'Marcus Vance, PMP®, CSM',
    title: 'Senior Technical Program Director',
    bio: '12+ years leading enterprise distributed systems delivery and cloud migrations. PMP® certified with 4-region database migration case study.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
  },
  'david-kim': {
    name: 'David Kim, MS',
    title: 'Bioengineering Research Fellow & Capstone Lead',
    bio: 'Biomedical engineering graduate with published peer-reviewed research in microfluidic biosensors and wearable diagnostics.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'
  }
};

const slugAliases: Record<string, string> = {
  'sarah-jenkins-rn': 'sarah-jenkins',
  'nurse-multi': 'sarah-jenkins',
  'elena-flight-lead': 'elena-rodriguez',
  'paramedic-cct': 'elena-rodriguez',
  'marcus-vance': 'marcus-vance',
  'pmp-single': 'marcus-vance',
  'david-kim-bio': 'david-kim',
  'student-research': 'david-kim'
};

const CRAWLER_USER_AGENTS = [
  'twitterbot',
  'facebookexternalhit',
  'linkedinbot',
  'slackbot',
  'discordbot',
  'whatsapp',
  'telegrambot',
  'applebot',
  'chatgpt-user',
  'claudebot',
  'perplexitybot',
  'bingbot',
  'googlebot'
];

interface ElementHandler {
  setInnerContent(content: string): void;
  setAttribute(name: string, value: string): void;
}

export const onRequest: PagesFunction<Env, 'slug'> = async (context) => {
  const { request, params, next } = context;
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
  const slugParam = params.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : (slugParam || '');
  const normalizedSlug = slugAliases[slug] || slug;

  // Check if crawler
  const isCrawler = CRAWLER_USER_AGENTS.some((crawler) => userAgent.includes(crawler));

  const response = await next();
  const persona = personaMeta[normalizedSlug] || personaMeta['sarah-jenkins'];

  if (isCrawler && persona && typeof HTMLRewriter !== 'undefined') {
    const pageTitle = `${persona.name} — Verified PathPort Living Record`;
    const pageDesc = `${persona.title}. ${persona.bio}`;
    const pageUrl = `https://getpathport.com/p/${slug}`;

    return new HTMLRewriter()
      .on('title', {
        element(e: ElementHandler) {
          e.setInnerContent(pageTitle);
        }
      })
      .on('meta[name="description"]', {
        element(e: ElementHandler) {
          e.setAttribute('content', pageDesc);
        }
      })
      .on('meta[property="og:title"]', {
        element(e: ElementHandler) {
          e.setAttribute('content', pageTitle);
        }
      })
      .on('meta[property="og:description"]', {
        element(e: ElementHandler) {
          e.setAttribute('content', pageDesc);
        }
      })
      .on('meta[property="og:url"]', {
        element(e: ElementHandler) {
          e.setAttribute('content', pageUrl);
        }
      })
      .on('meta[property="og:image"]', {
        element(e: ElementHandler) {
          e.setAttribute('content', persona.avatar);
        }
      })
      .on('meta[name="twitter:title"]', {
        element(e: ElementHandler) {
          e.setAttribute('content', pageTitle);
        }
      })
      .on('meta[name="twitter:description"]', {
        element(e: ElementHandler) {
          e.setAttribute('content', pageDesc);
        }
      })
      .on('meta[name="twitter:image"]', {
        element(e: ElementHandler) {
          e.setAttribute('content', persona.avatar);
        }
      })
      .transform(response);
  }

  return response;
};
