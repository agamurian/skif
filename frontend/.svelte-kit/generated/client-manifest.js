export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/en/index.svelte"),
	() => import("../../src/routes/en/about.md"),
	() => import("../../src/routes/en/login.svelte"),
	() => import("../../src/routes/ru/index.svelte"),
	() => import("../../src/routes/ru/about.md"),
	() => import("../../src/routes/ru/login.svelte"),
	() => import("../../src/routes/[lang]/[...error]/__layout.reset.svelte"),
	() => import("../../src/routes/[lang]/[...error]/index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"en": [[0, 3], [1]],
	"en/about": [[0, 4], [1]],
	"en/login": [[0, 5], [1]],
	"ru": [[0, 6], [1]],
	"ru/about": [[0, 7], [1]],
	"ru/login": [[0, 8], [1]],
	"[lang]/[...error]": [[9, 10], []]
};