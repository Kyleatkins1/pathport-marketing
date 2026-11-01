// Cloudflare Pages Function: /api/beta-signup
// Segments Individual, PathPort Workplace (2027), and PathPort Certify (2027) leads in Loops.so

interface Env {
  LOOPS_API_KEY: string;
  LOOPS_LIST_INDIVIDUAL_ID?: string;
  LOOPS_LIST_WORKPLACE_ID?: string;
  LOOPS_LIST_CERTIFY_ID?: string;
}

type SignupIntent = 'individual' | 'workplace' | 'certify';

interface SignupRequestBody {
  email?: string;
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

const DEFAULT_INDIVIDUAL_LIST_ID = 'cmstx4t94ey4r0jx5a3psh1cb';

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;

  try {
    const body = (await request.json()) as SignupRequestBody;
    const email = (body.email || '').trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Please provide a valid email address.',
        }),
        { status: 400, headers: JSON_HEADERS }
      );
    }

    const intent: SignupIntent =
      body.intent === 'workplace' || body.intent === 'certify'
        ? body.intent
        : 'individual';

    const apiKey = env.LOOPS_API_KEY;

    if (!apiKey) {
      console.warn(
        'LOOPS_API_KEY is not configured in Cloudflare Pages environment variables. Returning local dev simulation.'
      );
      return new Response(
        JSON.stringify({
          success: true,
          simulated: true,
          intent,
          message:
            intent === 'workplace'
              ? 'Your PathPort Workplace (2027) pilot request has been recorded.'
              : intent === 'certify'
                ? 'Your PathPort Certify (2027) issuer request has been recorded.'
                : 'You are on the PathPort Founding Cohort list!',
        }),
        { status: 200, headers: JSON_HEADERS }
      );
    }

    // Build Mailing Lists map based on intent + configured environment IDs
    const mailingLists: Record<string, boolean> = {};
    const individualListId = env.LOOPS_LIST_INDIVIDUAL_ID || DEFAULT_INDIVIDUAL_LIST_ID;

    if (intent === 'workplace') {
      if (env.LOOPS_LIST_WORKPLACE_ID) {
        mailingLists[env.LOOPS_LIST_WORKPLACE_ID] = true;
      } else {
        // Fallback so contact is still captured in the workspace list if dedicated list ID isn't set yet
        mailingLists[individualListId] = true;
      }
    } else if (intent === 'certify') {
      if (env.LOOPS_LIST_CERTIFY_ID) {
        mailingLists[env.LOOPS_LIST_CERTIFY_ID] = true;
      } else {
        mailingLists[individualListId] = true;
      }
    } else {
      mailingLists[individualListId] = true;
    }

    const sourceLabel =
      body.source ||
      (intent === 'workplace'
        ? 'PathPort Marketing — Workplace (2027)'
        : intent === 'certify'
          ? 'PathPort Marketing — Certify (2027)'
          : 'PathPort Marketing — Individual');

    const userGroupLabel =
      intent === 'workplace'
        ? 'Workplace Pilot (2027)'
        : intent === 'certify'
          ? 'Certify Issuer (2027)'
          : body.persona || 'General Professional';

    const contactPayload: Record<string, unknown> = {
      email,
      firstName: body.firstName?.trim() || '',
      lastName: body.lastName?.trim() || '',
      source: sourceLabel,
      userGroup: userGroupLabel,
      signupIntent: intent,
      persona: body.persona || userGroupLabel,
      organizationName: body.organizationName?.trim() || '',
      jobTitle: body.jobTitle?.trim() || '',
      organizationScale: body.organizationScale?.trim() || '',
      primaryNeed: body.primaryNeed?.trim() || '',
      primaryState: body.primaryState?.trim() || '',
      sourcePath: body.sourcePath?.trim() || '/',
      betaRegisteredAt: new Date().toISOString(),
      mailingLists,
    };

    const authHeaders = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };

    // 1. Create or Update Contact in Loops
    const createResp = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify(contactPayload),
    });

    const createData = (await createResp.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!createResp.ok) {
      if (createResp.status === 409 || createData.message?.toLowerCase().includes('already')) {
        const updateResp = await fetch('https://app.loops.so/api/v1/contacts/update', {
          method: 'PUT',
          headers: authHeaders,
          body: JSON.stringify(contactPayload),
        });

        if (!updateResp.ok) {
          const updateData = (await updateResp.json().catch(() => ({}))) as {
            message?: string;
          };
          return new Response(
            JSON.stringify({
              success: false,
              message: updateData.message || 'Could not update your registration in Loops.',
            }),
            { status: updateResp.status, headers: JSON_HEADERS }
          );
        }
      } else {
        return new Response(
          JSON.stringify({
            success: false,
            message: createData.message || 'Failed to register contact with Loops.so.',
          }),
          { status: createResp.status, headers: JSON_HEADERS }
        );
      }
    }

    // 2. Fire Intent-Specific Loops Event to trigger automated workflows reliably
    const eventName =
      intent === 'workplace'
        ? 'pathport_workplace_inquiry'
        : intent === 'certify'
          ? 'pathport_certify_inquiry'
          : 'pathport_individual_signup';

    await fetch('https://app.loops.so/api/v1/events/send', {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({
        email,
        eventName,
        eventProperties: {
          signupIntent: intent,
          persona: body.persona || userGroupLabel,
          organizationName: body.organizationName || '',
          jobTitle: body.jobTitle || '',
          organizationScale: body.organizationScale || '',
          primaryNeed: body.primaryNeed || '',
          primaryState: body.primaryState || '',
          sourcePath: body.sourcePath || '/',
        },
      }),
    }).catch((err) => {
      console.warn('Non-fatal Loops event send warning:', err);
    });

    const successMessage =
      intent === 'workplace'
        ? 'Your PathPort Workplace (2027) pilot inquiry is confirmed. Check your inbox for next steps.'
        : intent === 'certify'
          ? 'Your PathPort Certify (2027) early access request is confirmed. Check your inbox for details.'
          : 'Welcome to the PathPort Founding Cohort! Check your inbox for confirmation.';

    return new Response(
      JSON.stringify({
        success: true,
        intent,
        message: successMessage,
      }),
      { status: 200, headers: JSON_HEADERS }
    );
  } catch (error: unknown) {
    console.error('Server error in /api/beta-signup:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Internal server error processing registration.',
      }),
      { status: 500, headers: JSON_HEADERS }
    );
  }
};
