// import AxeBuilder from '@axe-core/playwright';
// import { test, expect } from '@playwright/test';

// ////// Accessibility testing
// test.describe('homepage', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://entertainment-web-app-87503.web.app', {
//       waitUntil: 'networkidle',
//     });
//   });

//   test('should not have any automatically detectable accessibility issues', async ({
//     page,
//   }) => {
//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
//     expect(accessibilityScanResults.violations).toEqual([]);
//   });

//   test('should not have any automatically detectable WCAG A or AA violations', async ({
//     page,
//   }) => {
//     const accessibilityScanResults = await new AxeBuilder({ page })
//       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
//       .analyze();

//     expect(accessibilityScanResults.violations).toEqual([]);
//   });
// });
