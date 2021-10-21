const {chromium} = require('playwright');
//const { test, expect } = require('@playwright/test');
const assert = require('assert');

//async function techP2 (page) {
(async ()  => {   

    const browser = await chromium.launch({
        headless:false,
        slowMo: 500
    })

    const page = await browser.newPage();
    //const context = await browser.newContext();
    // --------------------------------------------------------------------------------
    // A. e2e scenario for the Otrium website
    // --------------------------------------------------------------------------------

    // Go to the desired URL 
    await page.goto("https://www.otrium.co.uk/")

    //expect(await page.screenshot()).toMatchSnapshot('landing.png');

    //Accept Cookies 
    await page.click('//*[@data-testid="accept-cookie-close"]')
    
    //Click on All Brands Link 
    await page.click('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div/div/a[1]')

    //Click on Search Brand Input
    const handle = await page.$('//*[@class="desktop-wrap"]/div/div[1]/div[1]')
    await handle.hover();
    await handle.click();

    //await page.click('//*[@class="desktop-wrap"]/div/div[1]/div[1]')

    //Select Adidas and Save
    await page.click('//*[@class="desktop-wrap"]/div/div[1]/div[2]/div/form/label[1]/input')
    await page.click('//*[@class="desktop-wrap"]/div/div[1]/div[2]/a')

    //Click on ShopNow
    await page.click('//*[@class="brand-action"]/a')

    //Click User Details with authentication
    await page.click('//*[@id="__next"]/div/div/div[2]/div/div[2]/div/div/div[4]/button[2]')
    await page.click('//*[@id="__next"]/div/div/div[2]/div/div[2]/div/div/div[5]/form/input')
    await page.fill('//*[@id="__next"]/div/div/div[2]/div/div[2]/div/div/div[5]/form/input', 'abhi12test@mailinator.com')
    await page.click('//*[@id="__next"]/div/div/div[2]/div/div[2]/div/div/div[5]/form/div/button')

    //remove promotion offer 
    await page.click('//*[@id="portal"]/div[4]/div/div/div[2]/div/div[2]/div/button/span')

    //Close the notification popup
    await page.click('//*[@id="ot-notifications-popup"]/div/div/a[1]')

    //click on 1st product 
    await page.click('//*[@id="pagination-0"]/div/div/div/div[1]/a/div[1]/div[1]/div/div/img')

    // //MouseHover on Size
    // const handle1 = await page.$('//*[@id="__next"]/div/div/div[2]/div/div[1]/div[2]/div[2]/div[3]/div[2]/div/div[1]')
    // await handle1.hover();
    // await handle1.click();

    //SelctSize
    await page.click('//*[@id="__next"]/div/div/div[2]/div/div[1]/div[2]/div[2]/div[3]/div[2]/div/div[1]')
    await page.click('//*[@id="__next"]/div/div/div[2]/div/div[1]/div[2]/div[2]/div[3]/div[2]/div/div[2]/div[1]/div')

    //Add to Bag 
    await page.click('//*[@data-testid="product-order-button"]')

    //Proceed to SB
    await page.click('//*[@data-testid="order-now-button"]')

    //Continue checkout
    await page.click('//*[@id="__next"]/div/div/div[2]/div/div/div/div[2]/div[2]/a/button/div/span')

    //enter first name
    await page.click('//*[@id="shipping_first_name"]')
    await page.fill('//*[@id="shipping_first_name"]', 'ABH')

    await page.click('//*[@id="shipping_last_name"]')
    await page.fill('//*[@id="shipping_last_name"]', 'ABH')

    await page.click('//*[@id="shipping_email_repeat"]')
    await page.fill('//*[@id="shipping_email_repeat"]', 'abhi12test@mailinator.com')

    await page.click('//*[@id="shipping_phone"]')
    await page.fill('//*[@id="shipping_phone"]', '+441234567899')

    await page.click('//*[@id="shipping_city"]')
    await page.fill('//*[@id="shipping_city"]', 'London')

    await page.click('//*[@id="shipping_postcode"]')
    await page.fill('//*[@id="shipping_postcode"]', 'SW1A 2AA')

    await page.click('//*[@id="shipping_street_name"]')
    await page.fill('//*[@id="shipping_street_name"]', 'Downing Street')

    await page.click('//*[@id="shipping_house_number"]')
    await page.fill('//*[@id="shipping_house_number"]', '123')
    
    await browser.close()
})();
//}

// module.exports = {
//     techP2
// }