/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const fs = require('fs');

const pageURL = 'http://localhost:3002/?pid=9507';
let page;
let browser;
const width = 1280;
const height = 720;
const now = new Date();

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width}, ${height}`],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('open', () => {
  beforeEach(async () => {
    await page.goto(pageURL, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: `./Spec/screenshots/${now}.png` });
  });

  test('entry loaded is correct', async () => {
    const brand = await page.$eval('.brand', (e) => e.textContent);
    expect(brand).toEqual('DOLORES');
  });

  test('screenshot was taken on load', async () => {
    await fs.readFile(`./Spec/screenshots/${now}.png`, (err) => {
      if (err) {
        expect(false).toEqual(true);
      } else {
        expect(true).toEqual(true);
      }
    });
  });
});
