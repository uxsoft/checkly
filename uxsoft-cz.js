const { expect, test } = require('@playwright/test')

test('visit page and take screenshot', async ({ page }) => {
    const response = await page.goto(process.env.ENVIRONMENT_URL || 'https://uxsoft.cz')
    await page.waitForSelector("#logo")

    expect(response.status()).toBeLessThan(400)
    await page.screenshot({ path: 'screenshot.jpg' })
})
