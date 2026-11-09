import { Browser, sleep } from '/Users/devanshkhanna/.gemini/config/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { resolve, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const outDir = resolve('.taste-skill/screenshots');
mkdirSync(outDir, { recursive: true });

async function run() {
  const browser = await Browser.launch();

  try {
    // 1440px desktop
    const page1440 = await browser.newPage({ width: 1440, height: 900, dsf: 1 });
    await page1440.goto('http://localhost:3000', { settleMs: 1500 });
    await page1440.eval(() => {
      const el = document.getElementById('arc-sap');
      if (el) {
        const rect = el.getBoundingClientRect();
        window.scrollBy(0, rect.top + 340);
      }
    });
    await sleep(600);
    await page1440.screenshot({ path: join(outDir, 'sap-lifecycle-desktop-1440px.jpg'), quality: 85 });

    // 390px mobile
    const page390 = await browser.newPage({ width: 390, height: 844, dsf: 2, mobile: true });
    await page390.goto('http://localhost:3000', { settleMs: 1500 });
    await page390.eval(() => {
      const el = document.getElementById('arc-sap');
      if (el) {
        const rect = el.getBoundingClientRect();
        window.scrollBy(0, rect.top + 520);
      }
    });
    await sleep(600);
    await page390.screenshot({ path: join(outDir, 'sap-lifecycle-mobile-390px.jpg'), quality: 85 });

    console.log('SAP lifecycle screenshots captured!');
  } finally {
    await browser.close();
  }
}

run().catch(console.error);
