import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("screenshot homepage", async ({ page }) => {
  await page.goto("https://www.google.com");

  await argosScreenshot(page, "Homepage", {
    outputDir: "./argos-output", // ✅ force correct path
  });
});
