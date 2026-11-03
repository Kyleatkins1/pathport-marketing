import type { SignupIntent } from '../services/loops';

export const APP_SIGN_IN_URL = 'https://app.getpathport.com/auth';
export const APP_SIGN_UP_URL = 'https://app.getpathport.com/auth?signup=true';

/**
 * November Launch Window: Anyone who signs up through Nov 30, 2026 at 11:59:59 PM ET
 * (2026-12-01T00:00:00-05:00 = 2026-12-01T05:00:00.000Z) receives a 30-day Pro trial.
 * Starting Dec 1, 2026 at 12:00:00 AM ET, new signups receive the standard 14-day Pro trial.
 */
export const EARLY_BIRD_CUTOFF_ISO = '2026-12-01T05:00:00.000Z';

export function isEarlyBirdPromoActive(now: Date = new Date()): boolean {
  return now.getTime() < new Date(EARLY_BIRD_CUTOFF_ISO).getTime();
}

export function getActiveTrialDays(now: Date = new Date()): 30 | 14 {
  return isEarlyBirdPromoActive(now) ? 30 : 14;
}

export interface OpenModalDetail {
  intent?: SignupIntent;
  persona?: string;
  primaryState?: string;
  primaryNeed?: string;
  source?: string;
}

export const OPEN_MODAL_EVENT = 'pathport:open-modal';

/**
 * Helper to route individual CTAs directly to live signup (`https://app.getpathport.com/auth?signup=true`)
 * while opening the 2027 Pilot / Early Access modal for `workplace` and `certify` organization tracks.
 */
export function triggerLeadModal(arg?: string | OpenModalDetail) {
  if (typeof window === 'undefined') return;

  let detail: OpenModalDetail = { intent: 'individual' };

  if (typeof arg === 'string') {
    const lower = arg.toLowerCase();
    if (
      lower.includes('workplace') ||
      lower.includes('enterprise') ||
      lower.includes('hospital') ||
      lower.includes('employer') ||
      lower.includes('teams')
    ) {
      detail = { intent: 'workplace', persona: arg };
    } else if (
      lower.includes('certify') ||
      lower.includes('board') ||
      lower.includes('issuer') ||
      lower.includes('association')
    ) {
      detail = { intent: 'certify', persona: arg };
    } else {
      detail = { intent: 'individual', persona: arg };
    }
  } else if (arg && typeof arg === 'object') {
    detail = {
      intent: arg.intent || 'individual',
      ...arg,
    };
  }

  // Individual V1 is live: take individual users straight to live account signup
  if (detail.intent === 'individual') {
    window.location.href = APP_SIGN_UP_URL;
    return;
  }

  window.dispatchEvent(new CustomEvent<OpenModalDetail>(OPEN_MODAL_EVENT, { detail }));
}


