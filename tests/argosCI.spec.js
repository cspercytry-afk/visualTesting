import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("screenshot homepage", async ({ page }) => {
  await page.goto("https://google.com");

  await argosScreenshot(page, "homepage", {
    outputDir: "./argos-output", // ✅ force correct path
  });
});