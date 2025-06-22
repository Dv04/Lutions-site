import { test, expect } from '@playwright/test';

test('should navigate to the product page', async ({ page }) => {
  // Start from the home page
  await page.goto('/');

  // Find the 'Product' link and click it
  await page.getByRole('link', { name: 'Product' }).click();

  // The new URL should be "/product"
  await expect(page).toHaveURL(/.*product/);

  // The new page should have a specific heading
  await expect(page.getByRole('heading', { name: 'From Dataset to Decision in Minutes.' })).toBeVisible();
});
