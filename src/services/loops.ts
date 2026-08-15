export interface BetaSignupPayload {
  email: string;
  name: string;
  audience?: string;
  source?: string;
  betaSource?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

/**
 * Extracts UTM query parameters from the current URL search parameters.
 */
function getUtmParams(): { utmSource?: string; utmMedium?: string; utmCampaign?: string } {
  if (typeof window === 'undefined') return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source') || undefined;
    const utmMedium = params.get('utm_medium') || undefined;
    const utmCampaign = params.get('utm_campaign') || undefined;
    return { utmSource, utmMedium, utmCampaign };
  } catch {
    return {};
  }
}

/**
 * Submits beta registrations to the secure server-side endpoint (/api/beta-signup),
 * which idempotently creates/updates the contact in Loops.so and adds them to the PathPort Beta list.
 */
export async function registerForBeta(payload: BetaSignupPayload): Promise<{ success: boolean; message?: string }> {
  const utm = getUtmParams();

  const body = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    audience: payload.audience || 'Other Professional',
    source: payload.source || 'PathPort',
    betaSource: payload.betaSource || payload.source || 'homepage',
    utmSource: payload.utmSource || utm.utmSource,
    utmMedium: payload.utmMedium || utm.utmMedium,
    utmCampaign: payload.utmCampaign || utm.utmCampaign,
  };

  try {
    const response = await fetch('/api/beta-signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === false) {
      const errorMsg = data.message || 'We couldn’t complete your registration. Please try again.';
      return { success: false, message: errorMsg };
    }

    return {
      success: true,
      message: data.message || 'You’re on the beta list.',
    };
  } catch (error) {
    console.error('[Beta Registration Error]:', error);
    return {
      success: false,
      message: 'We couldn’t complete your registration. Please try again.',
    };
  }
}
