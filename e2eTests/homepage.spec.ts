import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/', { waitUntil: 'load' });
});

test.describe('navigation', () => {
  test('changing page to movie list with loaded data', async ({ page }) => {
    await page.getByLabel('link to movies page').click();
    await expect(page.getByRole('heading', { name: 'Movies' })).toBeVisible();
    await expect(page.getByLabel('movieBox').nth(2)).toBeVisible();
  });

  test('if not logged in after click on favs redirect to log in page', async ({
    page,
  }) => {
    await page.getByLabel('link to favourites page').click();
    await expect(page).toHaveURL(/.*login/);
  });
});

////////
test.describe('searchbar', () => {
  test('check if search bar exist', async ({ page }) => {
    await expect(
      page.getByPlaceholder('Search for movies or TV series')
    ).toBeVisible();
  });

  test('check if search bar redirect to search result page', async ({
    page,
  }) => {
    await expect(page.getByRole('heading', { name: 'Trending' })).toBeVisible();
    await page.getByPlaceholder('Search for movies or TV series').fill('the');
    await page.getByLabel('search button').click();

    await expect(page).toHaveURL(/.*search-result/);
    await expect(page.getByLabel('movieBox').nth(1)).toBeVisible();
  });

  test('search button not visibile after writng wrong string', async ({
    page,
  }) => {
    await page
      .getByPlaceholder('Search for movies or TV series')
      .fill('dddddddd');
    await expect(page.getByLabel('search button')).not.toBeVisible();
  });
});

//////////
test.describe('homepage', () => {
  test('check if treding carousel is working', async ({ page }) => {
    const sliderTrack = await page.getByLabel('trendingBox').nth(2);
    const sliderOffsetWidth = await sliderTrack.evaluate((el) => {
      return el.getBoundingClientRect().width;
    });
    await sliderTrack.hover({ force: true, position: { x: 0, y: 0 } });
    await page.mouse.down();
    await sliderTrack.hover({
      force: true,
      position: { x: sliderOffsetWidth, y: 0 },
    });
    await page.mouse.up();
  });

  test('check if modal with info about logging after adding to fave is showing', async ({
    page,
  }) => {
    const movieBox = page.getByLabel('movieBox').nth(1);
    const favBtn = movieBox.getByRole('button', { name: 'favorite' });
    favBtn.click();
    await expect(page.getByTestId('modal')).toBeVisible();
    await page.getByRole('button', { name: 'X' }).click();
  });

  test('check if after logging adding to favs working', async ({ page }) => {
    await page.getByLabel('link to login page').click();
    await expect(page).toHaveURL(/.*login/);

    await page.getByPlaceholder('Email address').click();
    await page.getByPlaceholder('Email address').fill('test@test.pl');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Test123456789!');
    await page.getByRole('button', { name: 'Login to your account' }).click();
    await expect(page.getByRole('heading', { name: 'Trending' })).toBeVisible();
    await page.getByLabel('link to favourites page').click();
    await expect(page.getByLabel('movieBox').nth(0)).toBeVisible();
  });
});
