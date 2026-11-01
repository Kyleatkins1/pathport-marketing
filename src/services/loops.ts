/**
 * Loops.so Marketing & Lead Capture Service
 *
 * Routes signups through the Cloudflare Pages Function (`/api/beta-signup`)
 * and segments contacts across three explicit conversion tracks:
 * - 'individual': PathPort Individual (Founding Cohort / 30-Day Pro Trial)
 * - 'workplace': PathPort Workplace (2027 Workforce Pilot & Design Partner Program)
 * - 'certify': PathPort Certify (2027 Certification Board & Issuer Early Access)
 */

export type SignupIntent = 'individual' | 'workplace' | 'certify';

export interface LoopsContactPayload {
  email: string;
  firstName?: string;
  lastName?: string;
  intent?: SignupIntent;
  persona?: string;
  source?: string;
  sourcePath?: string;
  organizationName?: string;
  jobTitle?: string;
  organizationScale?: string;
  primaryNeed?: string;
  primaryState?: string;
}

export interface LoopsSignupResponse {
  success: boolean;
  message: string;
  intent?: SignupIntent;
}

export async function submitToLoopsWaitlist(
  payload: LoopsContactPayload
): Promise<LoopsSignupResponse> {
  const endpoint = '/api/beta-signup';
  const intent: SignupIntent = payload.intent || 'individual';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        intent,
        sourcePath:
          payload.sourcePath ||
          (typeof window !== 'undefined' ? window.location.pathname : '/'),
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || (data && data.success === false)) {
      console.error('Waitlist API error:', data);
      return {
        success: false,
        message:
          data?.message ||
          'Unable to complete your request right now. Please check your connection and try again.',
        intent,
      };
    }

    return {
      success: true,
      message:
        data?.message ||
        (intent === 'workplace'
          ? 'Your PathPort Workplace (2027) pilot inquiry has been recorded.'
          : intent === 'certify'
            ? 'Your PathPort Certify (2027) early access inquiry has been recorded.'
            : 'Welcome to the PathPort Founding Cohort! Check your inbox for confirmation.'),
      intent,
    };
  } catch (error) {
    console.error('Error submitting to Loops waitlist:', error);
    return {
      success: false,
      message: 'Network error while submitting your request. Please try again.',
      intent,
    };
  }
}
