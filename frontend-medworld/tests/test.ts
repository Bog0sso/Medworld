import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Quelle tenue souhaiteriez-vous commander ?');
});

test('index page has expected h2', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h2')).toBe('Veuillez choisir votre tenue');
});

