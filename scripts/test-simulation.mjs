import { Browser, sleep } from '/Users/devanshkhanna/.gemini/config/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function testSimulation() {
  const browser = await Browser.launch();
  try {
    const page = await browser.newPage({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000', { settleMs: 1500 });

    // Scroll to SAP
    await page.eval(() => {
      const el = document.getElementById('arc-sap');
      if (el) el.scrollIntoView();
    });
    await sleep(800);

    // Click Run Live Simulation
    const clicked = await page.eval(() => {
      const btn = Array.from(document.querySelectorAll('button')).find((b) =>
        b.textContent?.includes('Run Live Simulation')
      );
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });

    console.log('Run Live Simulation clicked:', clicked);
    await sleep(3000); // let it advance through steps

    const currentText = await page.eval(() => {
      return document.querySelector('#arc-sap')?.textContent;
    });

    console.log('Step advanced successfully:', currentText?.includes('STEP 02') || currentText?.includes('SHORTFALL'));
  } finally {
    await browser.close();
  }
}

testSimulation().catch(console.error);
