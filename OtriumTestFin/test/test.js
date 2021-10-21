const {chromium} = require('playwright');
const { test, expect } = require('@playwright/test');
const assert = require('assert');
const techP1Int = require('./techP1Int');
const techP1Bonus = require('./techP1Bonus');

test('techP1Int', async ({ page }) => {
    await techP1Int.techP1Int(page);

})

test('techP1Bonus', async ({ page }) => {
    await techP1Bonus.techP1Bonus(page);

});
    