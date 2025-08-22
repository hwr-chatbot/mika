import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
	{
		ignores: ['dist', 'node_modules'],
	},
	js.configs.recommended,
	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			react,
			'react-hooks': reactHooks,
			prettier,
			import: importPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'prettier/prettier': 'warn',
			'import/order': [
				'warn',
				{
					groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
					pathGroups: [
						{
							pattern: '@components/**',
							group: 'internal',
							position: 'before',
						},
						{
							pattern: '@icons/**',
							group: 'internal',
							position: 'before',
						},
						{
							pattern: '@services/**',
							group: 'internal',
							position: 'before',
						},
						{
							pattern: '@pages/**',
							group: 'internal',
							position: 'before',
						},
						{
							pattern: '@type/**',
							group: 'internal',
							position: 'before',
						},
						{
							pattern: '@assets/**',
							group: 'internal',
							position: 'before',
						},
					],
					pathGroupsExcludedImportTypes: ['builtin'],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
