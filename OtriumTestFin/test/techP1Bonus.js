const {chromium} = require('playwright');
const { test, expect } = require('@playwright/test');
const assert = require('assert');

async function techP1Bonus (page) {

    const browser = await chromium.launch({
        headless:false,
        slowMo: 500
    })

    const context = await browser.newContext();
    // --------------------------------------------------------------------------------
    // A. Componenet testing
    // B. Visual Regression
    // --------------------------------------------------------------------------------

    // Go to the desired URL 
    await page.goto("http://localhost:3000/")

    //expect(await page.screenshot()).toMatchSnapshot('landing.png');

    //Search with Invalid Input
    await page.click('//*[@id="root"]/div/div[2]/div[1]/div/input')
    await page.fill('//*[@id="root"]/div/div[2]/div[1]/div/input', 'SDFF')
    
    const visibleResult1 = await page.$$('//*[@id="root"]/div/div[2]/div[2]/div')
    assert.equal(visibleResult1.length, 0)

     //Search with Valid Input
     await page.click('//*[@id="root"]/div/div[2]/div[1]/div/input')
     await page.fill('//*[@id="root"]/div/div[2]/div[1]/div/input', 'ABH')
     
     const visibleResult2 = await page.$$('//*[@id="root"]/div/div[2]/div[2]/div')
     assert.equal(visibleResult2.length, 1)

    await browser.close()

}

module.exports = {
    techP1Bonus
}
    