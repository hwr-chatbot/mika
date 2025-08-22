/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/***/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'bounce-lg': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-2px)' },
				},
			},
			animation: {
				'bounce-lg': 'bounce-lg 1s infinite',
			},
		},
	},
	plugins: [],
};
