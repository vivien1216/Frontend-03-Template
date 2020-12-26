/*
 * @Author: vivien
 * @Date: 2020-12-25 15:22:06
 * @Last Modified by: vivien
 * @LastEditTime: 2020-12-26 11:08:51
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://developers.google.com/web/updates/2017/04/headless-chrome');
    // const a = await page.$('a');
    // console.log(await a.asElement().boxModel())
    const img = await page.$$('a');
    console.log(img)
  })();