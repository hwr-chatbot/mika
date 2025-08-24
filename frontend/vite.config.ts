/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			'@mika/shared': path.resolve(__dirname, '../shared/src'),
		},
	},
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
