const puppeteer = require('puppeteer');

const pageURL = 'http://localhost:3002/';
let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width}, ${height}`],
  });
  page = await browser.newPage();
  await page.setViewport({width, height});
});

afterAll(() => {
  // browser.close();
});

describe('open', () => {
  beforeEach(async () => {
    await page.goto(pageURL, { waitUntil: 'networkidle2' });
  });
  test('initial title is correct', async () => {
    const brand = await page.$eval('.brand', (e) => e.textContent);
    expect(brand).toEqual('CORPORIS');
  });
});
