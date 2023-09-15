import { sveltekit } from '@sveltejs/kit/vite';
import webfont from 'vite-plugin-webfont-dl';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), webfont()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
