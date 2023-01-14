import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto("https://oldpaca.uxsoft.cz")

  await page.getByPlaceholder("Email").fill("me@uxsoft.cz")
  await page.getByPlaceholder("Password").fill("asd")
  await page.getByRole("button", { name: "Login" }).click()

  await page.waitForNavigation()

  await page.screenshot({ path: "screenshot.jpg" })
})
