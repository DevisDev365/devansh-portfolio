import { Browser, sleep } from '/Users/devanshkhanna/.gemini/config/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { resolve, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const outDir = resolve('.taste-skill/screenshots');
mkdirSync(outDir, { recursive: true });

async function run() {
  const browser = await Browser.launch();

  try {
    const page = await browser.newPage({ width: 1440, height: 900, dsf: 1 });
    await page.goto('http://localhost:3000', { settleMs: 1500 });

    // 1. Arc 1 apparatus in view
    await page.eval(() => {
      const el = document.getElementById('arc-pipeline');
      if (el) {
        const rect = el.getBoundingClientRect();
        window.scrollBy(0, rect.top + 320);
      }
    });
    await sleep(600);
    await page.screenshot({ path: join(outDir, 'arc1-apparatus-1440px.jpg'), quality: 85 });

    // 2. Arc 2 bowling lane in view
    await page.eval(() => {
      const el = document.getElementById('arc-bowling');
      if (el) {
        const rect = el.getBoundingClientRect();
        window.scrollBy(0, rect.top + 280);
      }
    });
    await sleep(600);
    await page.screenshot({ path: join(outDir, 'arc2-bowling-1440px.jpg'), quality: 85 });

    // 3. Arc 3 SAP mind map in view
    await page.eval(() => {
      const el = document.getElementById('arc-sap');
      if (el) {
        const rect = el.getBoundingClientRect();
        window.scrollBy(0, rect.top + 340);
      }
    });
    await sleep(600);
    await page.screenshot({ path: join(outDir, 'arc3-sap-1440px.jpg'), quality: 85 });

    console.log('Targeted screenshots captured!');
  } finally {
    await browser.close();
  }
}

run().catch(console.error);
