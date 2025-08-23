import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
	{
		ignores: ['dist', 'node_modules'],
	},
	js.configs.recommended,
	{
		files: ['**/*.{js,ts}'],
		languageOptions: {
			ecmaVersion: 12,
			sourceType: 'module',
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
			},
			globals: {
				...globals.node,
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			prettier: prettier,
		},
		rules: {
			'prettier/prettier': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'no-console': 'warn',
			eqeqeq: ['error', 'always'],
			curly: ['error', 'all'],
		},
	},
];
