/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: { IBM_Plex_Mono: ['Fragment Mono', 'monospace'] },
			animation: {
				fadeUp: 'fadding 2s ease-out alternate',
				fadeIn: 'faddingIn 10s ease-out alternate',
			},
			keyframes: {
				fadding: {
					'0%,  50%': { opacity: '5%', transform: 'translateY(-50px)' },
					'75%': { opacity: '40%', transform: 'translateY(-20px)' },
					' 100%': { transform: 'translateY(0)', opacity: '100%' },
				},
				faddingIn: {
					'0%, 25%': { opacity: '0%' },
					' 50%': { opacity: '30%' },
					' 75%': { opacity: '100%' },
				},
			},
		},
	},
	plugins: [],
};
