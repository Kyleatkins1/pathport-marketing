export interface FaqEntry {
  q: string;
  a: string;
}

export function buildFaqJsonLd(faqs: FaqEntry[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
