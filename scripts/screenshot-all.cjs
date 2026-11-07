const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = '/Users/devanshkhanna/.gemini/antigravity/brain/4b31c01d-3833-4fe3-a18e-034658a0d831/screenshots';
if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

async function run() {
  const chromeProcess = spawn(
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    [
      '--headless=new',
      '--remote-debugging-port=9222',
      '--hide-scrollbars',
      '--window-size=1440,900',
    ]
  );

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const versionRes = await fetch('http://127.0.0.1:9222/json/version');
    const versionData = await versionRes.json();
    const wsUrl = versionData.webSocketDebuggerUrl;

    const ws = new WebSocket(wsUrl);
    let msgId = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && callbacks.has(msg.id)) {
        const { resolve, reject } = callbacks.get(msg.id);
        callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };

    await new Promise((resolve) => {
      ws.onopen = resolve;
    });

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        callbacks.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    // Create a new target page
    const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
    const targetWsRes = await fetch('http://127.0.0.1:9222/json');
    const targets = await targetWsRes.json();
    const pageTarget = targets.find((t) => t.id === targetId);

    const pageWs = new WebSocket(pageTarget.webSocketDebuggerUrl);
    await new Promise((resolve) => {
      pageWs.onopen = resolve;
    });

    const pageCallbacks = new Map();
    let pageMsgId = 1;
    pageWs.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pageCallbacks.has(msg.id)) {
        const { resolve, reject } = pageCallbacks.get(msg.id);
        pageCallbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };

    function sendPage(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = pageMsgId++;
        pageCallbacks.set(id, { resolve, reject });
        pageWs.send(JSON.stringify({ id, method, params }));
      });
    }

    await sendPage('Page.enable');
    await sendPage('DOM.enable');
    await sendPage('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });

    await sendPage('Page.navigate', { url: 'http://localhost:3000/' });
    await new Promise((r) => setTimeout(r, 2000));

    // Capture sections
    const sections = [
      { id: 'hero', name: '01_hero', selector: null },
      { id: 'arc-pipeline', name: '02_arc_imperial_fuel', selector: '#arc-pipeline' },
      { id: 'arc-bowling', name: '03_arc_smaaash_strike', selector: '#arc-bowling' },
      { id: 'arc-sap', name: '04_arc_elevra_solutions_white', selector: '#arc-sap' },
      { id: 'arc-gtm', name: '05_arc_gtm_intelligence', selector: '#arc-gtm' },
    ];

    for (const sec of sections) {
      if (sec.selector) {
        await sendPage('Runtime.evaluate', {
          expression: `
            if (window.__lenis) {
              window.__lenis.scrollTo('${sec.selector}', { immediate: true });
            } else {
              document.querySelector('${sec.selector}')?.scrollIntoView({ behavior: 'instant', block: 'start' });
            }
          `,
        });
        await new Promise((r) => setTimeout(r, 1200));
      }

      const { data } = await sendPage('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(ARTIFACT_DIR, `${sec.name}.png`), Buffer.from(data, 'base64'));
      console.log(`Captured ${sec.name}.png (${Math.round(data.length * 0.75 / 1024)} KB)`);
    }

    // Now capture mobile view at 390x844
    await sendPage('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await sendPage('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
    await new Promise((r) => setTimeout(r, 1000));

    const { data: mobileData } = await sendPage('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(ARTIFACT_DIR, `06_mobile_390.png`), Buffer.from(mobileData, 'base64'));
    console.log(`Captured 06_mobile_390.png (${Math.round(mobileData.length * 0.75 / 1024)} KB)`);

    pageWs.close();
    ws.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    chromeProcess.kill();
  }
}

run();
