npm init playwright@latest

npx playwright test
npx playwright test --project=chromium
npx playwright test --project=chromium --headed

npx playwright test example.spec.ts --project=chromium
npx playwright test -g "has title" --project=chromium


//TEST SKIP

test.skip('has title', async ({ page }) => {
});

//TEST ONLY

test.only('has title', async ({ page }) => {
});