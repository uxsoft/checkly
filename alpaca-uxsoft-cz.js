import { test, expect } from "@playwright/test"


test('test', async ({ page }) => {
  await page.goto("https://alpaca.uxsoft.cz")

  await page.getByPlaceholder("Email").fill("me@uxsoft.cz")
  await page.getByPlaceholder('Password').fill('tahm5.e-STYCGGz')
  await page.getByRole('button', { name: 'Login' }).click()

  await page.waitForNavigation()
  await page.goto("https://alpaca.uxsoft.cz/Backlog")

  await page.screenshot({ path: 'screenshot.jpg' })
})
