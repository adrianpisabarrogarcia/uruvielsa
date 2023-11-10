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
				'blue-personal': '#0094D1',
				'yellow-personal': '#FDB827',
			}
		},
	},
	plugins: [],
}
