import { test, expect } from '../src/fixtures/testFixtures';

test.describe('Smoke Tests - Visakh Vijayan', () => {

  test('should load homepage and verify title', async ({ homepage, logger }) => {
    logger.info('Starting smoke test: homepage load');
    await homepage.open();
    const title = await homepage.getTitle();
    expect(title).toBeTruthy();
    logger.info(`Page title: ${title}`);
  });


  test('should have visible page content', async ({ page, logger }) => {
    logger.info('Starting smoke test: page content');
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });
});
