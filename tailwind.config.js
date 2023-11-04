/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
		fontFamily: {
			'inria-serif': ['Inria Serif', 'sans-serif'],
			'code-serif': ["Engravers' Gothic Regular", 'sans-serif'],
		},
	},
	plugins: [require('flowbite/plugin')],
}
