const {chromium} = require('playwright');
const { test, expect } = require('@playwright/test');
const assert = require('assert');

async function techP1Int (page) {
    
    const browser = await chromium.launch({
        headless:false,
        slowMo: 500
    })

    const context = await browser.newContext();

    // Intergration test : CRUD properties 
    // Task 1: Create a user profile 
    // Task 2 Read a user profile 
    // Task 3: Update a user profile 
    // Task 4: Delete a user profile 
    
    // --------------------------------------------------------------------------------
    // ------ Task 1: Create a user profile  ---- 
    // --------------------------------------------------------------------------------

    // Go to the desired URL 
    await page.goto("http://localhost:3000/")

    // Click on AddContact
    await page.click('//*[@id="root"]/div/div[2]/h2/a/button')

    // Click on InputName Field
    await page.click('//*[@id="root"]/div/div[2]/form/div[1]/input') 

    // Fill some Name 
    await page.fill('//*[@id="root"]/div/div[2]/form/div[1]/input', 'ABHIJIT2')

    // Click on Email Field
    await page.click('//*[@id="root"]/div/div[2]/form/div[2]/input') 

    // Fill some Name 
    await page.fill('//*[@id="root"]/div/div[2]/form/div[2]/input', 'ABHIJIT2@test.com')

    // Click on Add Button
    await page.click('//*[@id="root"]/div/div[2]/form/button') 
    
    // --------------------------------------------------------------------------------
    // ----  Task 2 Read a user profile / Verify new Name has been entered or not --- 
    // --------------------------------------------------------------------------------
    // Read Name 
    const locator = page.locator('//*[@id="root"]/div/div[2]/div[2]/div[4]/div/a/div[1]');
    await expect(locator).toContainText('ABHIJIT2');
    // const fName = await page.evaluate(el => el.innerText, await page.$('//*[@id="root"]/div/div[2]/div[2]/div[4]/div/a/div[1]'))
    // console.log(fName)
    // assert.equal(fName, 'ABHIJIT2')
   
    // Read Email ID  
    // const fEmail = await page.evaluate(el => el.innerText, await page.$('//*[@id="root"]/div/div[2]/div[2]/div[4]/div/a/div[2]'))
    // console.log(fEmail)
    // assert.equal(fEmail, 'ABHIJIT2@test.com')

    // --------------------------------------------------------------------------------
    // ---- Task 3: Update a user profile ---- 
    // --------------------------------------------------------------------------------
    // Click on Edit Button
    await page.click('//*[@id="root"]/div/div[2]/div[2]/div[4]/a/i')

    // Update Name
    const input1 = await page.$('//*[@id="root"]/div/div[2]/form/div[1]/input');
    await input1.click({ clickCount: 3 })
    await input1.type("NewName1");

    // Update Email
    const input2 = await page.$('//*[@id="root"]/div/div[2]/form/div[2]/input');
    await input2.click({ clickCount: 3 })
    await input2.type("NewName1@test.com");

    // Click on Update Button
    await page.click('//*[@id="root"]/div/div[2]/form/button')

    // --------------------------------------------------------------------------------
    // ---- Task 4: Delete a user profile   -----
    // --------------------------------------------------------------------------------
    await page.click('//*[@id="root"]/div/div[2]/div[2]/div[4]/i')

    // Take a Screenshot and Visual regression
    await page.screenshot({path:'landing.png', fullPage: true})

    expect(await page.screenshot({fullPage:true})).toMatchSnapshot('element.png', { threshold: 0.5 })

    await browser.close()

}

module.exports = {
    techP1Int
}