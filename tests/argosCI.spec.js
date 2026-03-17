import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("screenshot homepage", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");

  await argosScreenshot(page, "wikipedia", {
    outputDir: "./argos-output", // ✅ force correct path
  });
});