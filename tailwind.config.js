/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				suffering: '#FFC8DD',
				origin: '#FFAFCC',
				cessation: '#BDE0FE',
				way: '#A2D2FF',
				tree: '#4F518C',
				treeHighlight: '#CDB4DB',
				elaboration: '#F7DBA7',
				footer: '#464655',
			},
			fontFamily: {
				lemon: ['var(--font-lemon)'],
				nunito: ['var(--font-nunito)'],
				fasthand: ['var(--font-fasthand)'],
			},
		},
	},
	plugins: [],
}
