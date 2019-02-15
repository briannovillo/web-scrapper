const puppeteer = require('puppeteer');

const takeSnapshot = async (url) => {
  const browser = await puppeteer.launch({defaultViewport: {width: 1080, height: 1920, isMobile: true}});
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle2', timeout: 0});
  await page.waitFor(10000);
  await page.screenshot({path: './snapshots/' + url.split('.')[1] + '.png'});
  await browser.close();
};

module.exports = takeSnapshot;
