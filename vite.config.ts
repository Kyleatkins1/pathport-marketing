import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

function betaSignupDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'beta-signup-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/beta-signup', (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { name, email, audience, source, betaSource, utmSource, utmMedium, utmCampaign } = data;

            if (!email || !name) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'Name and email are required.' }));
              return;
            }

            const apiKey = env.LOOPS_API_KEY || env.VITE_LOOPS_API_KEY || process.env.LOOPS_API_KEY;
            const listId = env.LOOPS_BETA_LIST_ID || process.env.LOOPS_BETA_LIST_ID || 'cmstx4t94ey4r0jx5a3psh1cb';

            if (!apiKey) {
              console.warn('[Vite Dev Middleware] LOOPS_API_KEY not configured in .env');
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'Loops API key not configured in .env' }));
              return;
            }

            const normalizedEmail = email.trim().toLowerCase();
            const nameParts = name.trim().split(/\s+/);
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || undefined;

            const contactPayload = {
              email: normalizedEmail,
              firstName,
              ...(lastName ? { lastName } : {}),
              userGroup: 'beta_waitlist',
              source: source || 'PathPort',
              audience: audience || 'Other Professional',
              betaSource: betaSource || source || 'homepage',
              betaRegisteredAt: new Date().toISOString(),
              ...(utmSource ? { utmSource } : {}),
              ...(utmMedium ? { utmMedium } : {}),
              ...(utmCampaign ? { utmCampaign } : {}),
              subscribed: true,
              mailingLists: {
                [listId]: true,
              },
            };

            // 1. Try create
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
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'You’re on the beta list.' }));
              return;
            }

            // 2. If already exists (409), update idempotently
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
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: 'You’re on the beta list.' }));
                return;
              }

              const updateErr = await updateRes.text();
              console.error(`[Dev Beta Signup / Loops Update Error] Status: ${updateRes.status}`, updateErr);
              res.statusCode = 502;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'We couldn’t complete your registration. Please try again.' }));
              return;
            }

            const createErr = await createRes.text();
            console.error(`[Dev Beta Signup / Loops Create Error] Status: ${createRes.status}`, createErr);
            res.statusCode = 502;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: 'We couldn’t complete your registration. Please try again.' }));

          } catch (err: any) {
            console.error('[Dev Beta Signup Error]:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: 'We couldn’t complete your registration. Please try again.' }));
          }
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), betaSignupDevPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      host: true,
    },
  };
});
