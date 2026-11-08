import { Browser, sleep } from '/Users/devanshkhanna/.gemini/config/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function testImperial() {
  const browser = await Browser.launch();
  try {
    const page = await browser.newPage({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000', { settleMs: 1500 });

    // Scroll to Imperial
    await page.eval(() => {
      const el = document.getElementById('arc-pipeline');
      if (el) el.scrollIntoView();
    });
    await sleep(800);

    // Click Disengage Clamp
    const toggled = await page.eval(() => {
      const btn = Array.from(document.querySelectorAll('button')).find((b) =>
        b.textContent?.includes('Disengage Clamp')
      );
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });

    console.log('Clamp button toggled:', toggled);
    await sleep(600);

    const disengagedText = await page.eval(() => {
      return document.querySelector('#arc-pipeline')?.textContent?.includes('DISENGAGED');
    });
    console.log('Status shows DISENGAGED:', disengagedText);
  } finally {
    await browser.close();
  }
}

testImperial().catch(console.error);
