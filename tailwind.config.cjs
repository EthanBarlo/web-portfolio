/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				lavender: {
					50: '#fafbfe',
					100: '#f6f6fe',
					200: '#e8e9fc',
					300: '#d9dbfa',
					400: '#bdc1f7',
					500: '#a1a6f3',
					600: '#9195db',
					700: '#797db6',
					800: '#616492',
					900: '#4f5177'
				}
			},
			fontFamily: {
				charm: ['Charm Handwriting', 'sans-serif']
			}
		}
	},
	plugins: []
};
