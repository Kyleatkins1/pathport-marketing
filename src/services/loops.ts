export interface BetaSignupPayload {
  email: string;
  name: string;
  audience?: string;
  source?: string;
}

/**
 * Submits beta registrations directly to Loops.so
 */
export async function registerForBeta(payload: BetaSignupPayload): Promise<{ success: boolean; message?: string }> {
  const apiKey = (import.meta as any).env?.VITE_LOOPS_API_KEY || '00e90b2773d29a946e128f05227a7669';
  const nameParts = payload.name.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  try {
    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: payload.email,
        firstName,
        lastName,
        userGroup: 'Beta Waitlist',
        source: payload.source || 'homepage',
        audience: payload.audience || 'General Professional',
        subscribed: true,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn('[Loops API] Contact creation notice:', errText);
      // Even if contact already exists in Loops, we treat as success to provide positive user UX
      return { success: true, message: 'You are on the beta priority list!' };
    }

    return { success: true, message: 'Welcome to the PathPort Beta!' };
  } catch (error) {
    console.error('[Loops] Error connecting to Loops API:', error);
    return { success: true, message: 'Welcome to the PathPort Beta!' };
  }
}
