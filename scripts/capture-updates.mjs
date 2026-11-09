import { Browser, sleep } from '/Users/devanshkhanna/.gemini/config/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { resolve, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const outDir = resolve('.taste-skill/screenshots');
mkdirSync(outDir, { recursive: true });

async function run() {
  const browser = await Browser.launch();

  try {
    const page = await browser.newPage({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000', { settleMs: 1500 });

    // 1. Arc SAP updated
    await page.eval(() => {
      const el = document.getElementById('arc-sap');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await sleep(600);
    await page.screenshot({ path: join(outDir, 'arc-sap-updated-1440px.jpg'), quality: 85 });

    // 2. Footer updated
    await page.eval(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await sleep(600);
    await page.screenshot({ path: join(outDir, 'contact-footer-1440px.jpg'), quality: 85 });

    // Mobile view of SAP and footer
    const mobilePage = await browser.newPage({ width: 390, height: 844, dsf: 2, mobile: true });
    await mobilePage.goto('http://localhost:3000', { settleMs: 1500 });

    await mobilePage.eval(() => {
      const el = document.getElementById('arc-sap');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await sleep(600);
    await mobilePage.screenshot({ path: join(outDir, 'arc-sap-updated-390px.jpg'), quality: 85 });

    await mobilePage.eval(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await sleep(600);
    await mobilePage.screenshot({ path: join(outDir, 'contact-footer-390px.jpg'), quality: 85 });

    console.log('Update screenshots captured successfully!');
  } finally {
    await browser.close();
  }
}

run().catch(console.error);
