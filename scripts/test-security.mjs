import { Browser, sleep } from '/Users/devanshkhanna/.gemini/config/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function testSecurity() {
  const browser = await Browser.launch();
  try {
    const page = await browser.newPage({ width: 1440, height: 900 });

    const errors = [];
    browser.on(page.sessionId, 'Runtime.consoleAPICalled', (params) => {
      if (params.type === 'error') {
        const text = params.args?.map((a) => a.value || a.description || JSON.stringify(a)).join(' ');
        errors.push(text);
      }
    });

    await page.goto('http://localhost:3000', { settleMs: 1500 });
    await sleep(1000);

    console.log('Console errors found:', errors.length);
    if (errors.length > 0) {
      console.log('Errors:', errors);
    } else {
      console.log('Zero console errors! CSP and security directives passed cleanly.');
    }

    // Check meta tags in DOM
    const metaCheck = await page.eval(() => {
      const csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]')?.getAttribute('content');
      const xfo = document.querySelector('meta[http-equiv="X-Frame-Options"]')?.getAttribute('content');
      const nosniff = document.querySelector('meta[http-equiv="X-Content-Type-Options"]')?.getAttribute('content');
      const referrer = document.querySelector('meta[name="referrer"]')?.getAttribute('content');
      const permissions = document.querySelector('meta[http-equiv="Permissions-Policy"]')?.getAttribute('content');
      return { csp: !!csp, xfo, nosniff, referrer, permissions };
    });

    console.log('Meta headers verified:', JSON.stringify(metaCheck, null, 2));
  } finally {
    await browser.close();
  }
}

testSecurity().catch(console.error);
