import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('link', { name: 'English' }).click();
  await page.locator('div').filter({ hasText: /^Double-tap to search Google\.$/ }).nth(1).click();
  await page.getByText('Mason Mount').click();
  await page.getByRole('button', { name: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQPaoomdIPiIrbMP5e2S_RCi8BQCO3s5mQoj_CZN9aGLBfFwdK46Q4FqRfHfbI2tSt8j_W_CfRDzb72-m0' }).click();
});