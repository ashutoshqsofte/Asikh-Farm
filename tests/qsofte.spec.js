const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("http://test.qsofte.com/Connect");

  await expect(page).toHaveTitle("Qsofte");
});

test("get started link", async ({ page }) => {
  await page.goto("http://test.qsofte.com/Connect");
});
