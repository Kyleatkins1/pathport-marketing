// Cloudflare Pages Edge Function for /api/beta-signup — Loops.so PathPort Beta enrollment
/// <reference types="@cloudflare/workers-types" />

interface Env {
  LOOPS_API_KEY?: string;
  LOOPS_BETA_LIST_ID?: string;
}

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

interface BetaSignupRequest {
  name: string;
  email: string;
  audience?: string;
  source?: string;
  betaSource?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

const DEFAULT_LOOPS_BETA_LIST_ID = 'cmstx4t94ey4r0jx5a3psh1cb';

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // Set CORS headers
  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = (await request.json()) as BetaSignupRequest;

    if (!body.email || !body.name) {
      return new Response(
        JSON.stringify({ success: false, message: 'Name and email are required.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const email = body.email.trim().toLowerCase();
    const nameParts = body.name.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || undefined;

    const apiKey = env.LOOPS_API_KEY;
    if (!apiKey) {
      console.error('[Beta Signup Error] Missing LOOPS_API_KEY environment variable in Cloudflare Pages');
      return new Response(
        JSON.stringify({ success: false, message: 'Server configuration error. Please try again later.' }),
        { status: 500, headers: corsHeaders }
      );
    }

    const listId = env.LOOPS_BETA_LIST_ID || DEFAULT_LOOPS_BETA_LIST_ID;

    const contactPayload = {
      email,
      firstName,
      ...(lastName ? { lastName } : {}),
      userGroup: 'beta_waitlist',
      source: body.source || 'PathPort',
      audience: body.audience || 'Other Professional',
      betaSource: body.betaSource || body.source || 'homepage',
      betaRegisteredAt: new Date().toISOString(),
      ...(body.utmSource ? { utmSource: body.utmSource } : {}),
      ...(body.utmMedium ? { utmMedium: body.utmMedium } : {}),
      ...(body.utmCampaign ? { utmCampaign: body.utmCampaign } : {}),
      subscribed: true,
      mailingLists: {
        [listId]: true,
      },
    };

    // 1. Attempt to create the contact
    const createRes = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'PathPort-API/1.0',
      },
      body: JSON.stringify(contactPayload),
    });

    if (createRes.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'You’re on the beta list.' }),
        { status: 200, headers: corsHeaders }
      );
    }

    // 2. If contact already exists (409 Conflict), update idempotently
    if (createRes.status === 409) {
      const updateRes = await fetch('https://app.loops.so/api/v1/contacts/update', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'User-Agent': 'PathPort-API/1.0',
        },
        body: JSON.stringify(contactPayload),
      });

      if (updateRes.ok) {
        return new Response(
          JSON.stringify({ success: true, message: 'You’re on the beta list.' }),
          { status: 200, headers: corsHeaders }
        );
      }

      const updateErr = await updateRes.text();
      console.error(`[Beta Signup / Loops Update Error] Status: ${updateRes.status}`, updateErr);
      return new Response(
        JSON.stringify({ success: false, message: 'We couldn’t complete your registration. Please try again.' }),
        { status: 502, headers: corsHeaders }
      );
    }

    // 3. Any other error from create
    const createErr = await createRes.text();
    console.error(`[Beta Signup / Loops Create Error] Status: ${createRes.status}`, createErr);
    return new Response(
      JSON.stringify({ success: false, message: 'We couldn’t complete your registration. Please try again.' }),
      { status: 502, headers: corsHeaders }
    );

  } catch (error: any) {
    console.error('[Beta Signup Internal Error]:', error?.message || error);
    return new Response(
      JSON.stringify({ success: false, message: 'We couldn’t complete your registration. Please try again.' }),
      { status: 500, headers: corsHeaders }
    );
  }
};

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
};
