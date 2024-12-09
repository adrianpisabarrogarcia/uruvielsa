/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)'
				]
			},
			fontSize: {
				'1.5-xl': '1.2rem' //to use the class is text-1.txs
			},
			colors: {
				'blue-personal': '#0B90C6',
				'yellow-personal': '#EEAC29',
				'yellow-personal-light2': '#f7cc72',
				'blue-personal-light': '#80DDF3',
				'yellow-personal-dark': '#D36D10',
				'yellow-personal-light': '#D36C11',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				bold: ['Montserrat', 'sans-serif'],
				black: ['Montserrat', 'sans-serif'],
				light: ['Montserrat', 'sans-serif'],
				regular: ['Montserrat', 'sans-serif'],
				medium: ['Montserrat', 'sans-serif'],
				semibold: ['Montserrat', 'sans-serif'],
				thin: ['Montserrat', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
