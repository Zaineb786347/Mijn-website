import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
// 16:10 ratio - exact same as the project card aspect ratio
await page.setViewportSize({ width: 960, height: 600 });
await page.goto('http://localhost:5173/');
await page.waitForTimeout(1500);
await page.evaluate(() => {
  document.querySelectorAll('[class*="reveal"]').forEach(el => el.classList.add('reveal-visible'));
});
await page.waitForTimeout(300);
await page.screenshot({ path: 'src/assets/img/portfolio.png' });
await browser.close();
console.log('done');
