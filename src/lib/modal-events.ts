import type { SignupIntent } from '../services/loops';

export interface OpenModalDetail {
  intent?: SignupIntent;
  persona?: string;
  primaryState?: string;
  primaryNeed?: string;
  source?: string;
}

export const OPEN_MODAL_EVENT = 'pathport:open-modal';

/**
 * Helper to open the lead capture modal from any component or island.
 * Accepts either a simple persona string (backward compatible) or a structured detail object.
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

  window.dispatchEvent(new CustomEvent<OpenModalDetail>(OPEN_MODAL_EVENT, { detail }));
}

