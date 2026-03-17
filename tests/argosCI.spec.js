import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("screenshot homepage", async ({ page }) => {
  await page.goto("https://gmail.com");

  await argosScreenshot(page, "homepage 2", {
    outputDir: "./argos-output", // ✅ force correct path
  });
});