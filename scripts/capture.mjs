import { Browser, sleep } from '/Users/devanshkhanna/.gemini/config/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { resolve, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const outDir = resolve('.taste-skill/screenshots');
mkdirSync(outDir, { recursive: true });

const step = process.argv[2] || 'test';
const sectionId = process.argv[3] || ''; // optional section id to scroll into view
const targetUrl = process.argv[4] || 'http://localhost:3000';

async function run() {
  const browser = await Browser.launch();

  try {
    // 1440px desktop
    const page1440 = await browser.newPage({ width: 1440, height: 900, dsf: 1 });
    await page1440.goto(targetUrl, { settleMs: 1500 });
    if (sectionId) {
      await page1440.eval((id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'instant' });
      }, sectionId);
      await sleep(1000);
    }
    const desktopPath = join(outDir, `${step}-desktop-1440px.jpg`);
    await page1440.screenshot({ path: desktopPath, quality: 85 });
    console.log(`Saved: ${desktopPath}`);

    // 390px mobile
    const page390 = await browser.newPage({ width: 390, height: 844, dsf: 2, mobile: true });
    await page390.goto(targetUrl, { settleMs: 1500 });
    if (sectionId) {
      await page390.eval((id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'instant' });
      }, sectionId);
      await sleep(1000);
    }
    const mobilePath = join(outDir, `${step}-mobile-390px.jpg`);
    await page390.screenshot({ path: mobilePath, quality: 85 });
    console.log(`Saved: ${mobilePath}`);
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
