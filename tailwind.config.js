/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			colors: {
				btnPrimary: '#184E77', // Primary color for Buttons
				bgPrimary: '#99D98C', // Primary color for Backgrounds
				bgSecondary: '#34A0A4', // Accent color for NavBar
				txtPrimary: '#184E77', // Primary color Text
				txtSecondary: '#34A0A4', // Secondary color Text
			},
			backgroundImage: {
				'radio-gradient':
					'linear-gradient(to top, #34A0A4, #168AAD, #1A759F, #1E6091, #184E77)',
			},
		},
	},
	plugins: [],
};
