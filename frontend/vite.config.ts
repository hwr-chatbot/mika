/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	preview: {
		allowedHosts: ['mika.lehre.hwr-berlin.de'],
	},
	server: {
		allowedHosts: ['mika.lehre.hwr-berlin.de'],
	},
});
