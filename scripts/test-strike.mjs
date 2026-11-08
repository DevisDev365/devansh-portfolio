import { Browser, sleep } from '/Users/devanshkhanna/.gemini/config/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function testClick() {
  const browser = await Browser.launch();
  try {
    const page = await browser.newPage({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000', { settleMs: 1500 });

    // Scroll to SMAAASH
    await page.eval(() => {
      const el = document.getElementById('arc-bowling');
      if (el) el.scrollIntoView();
    });
    await sleep(800);

    // Click the Bowl button
    const clicked = await page.eval(() => {
      const btn = Array.from(document.querySelectorAll('button')).find((b) =>
        b.textContent?.includes('CLICK TO BOWL')
      );
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });

    console.log('Bowl button clicked:', clicked);
    await sleep(2000); // let animation and pins scatter finish

    const statusText = await page.eval(() => {
      const banner = document.querySelector('#arc-bowling');
      return banner ? banner.textContent?.includes('STRIKE RECORDED') : false;
    });
    console.log('Strike status recorded successfully:', statusText);
  } finally {
    await browser.close();
  }
}

testClick().catch(console.error);
