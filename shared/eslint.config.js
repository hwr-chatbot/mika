import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import path from 'path';
import { fileURLToPath } from 'url';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
	{
		ignores: ['dist', 'node_modules'],
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: [path.resolve(__dirname, './tsconfig.json')],
				tsconfigRootDir: __dirname,
				sourceType: 'module',
			},
			globals: {
				...globals.es2021,
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			prettier,
		},
		rules: {
			'prettier/prettier': 'error',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
		},
	},
];
