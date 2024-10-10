/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	darkMode: 'class', // Enable dark mode using the class strategy
	theme: {
		extend: {
			colors: {
				btnPrimary: '#184E77', // Primary color for Buttons
				bgPrimary: '#99D98C', // Primary color for Backgrounds
				bgSecondary: '#34A0A4', // Accent color for NavBar
				txtPrimary: '#184E77', // Primary color Text
				txtSecondary: '#34A0A4', // Secondary color Text
				//Dark mode colors
				bgPrimaryDark: '#1D1D1D', // Dark background color
				bgSecondaryDark: '#2C2C2C', // Dark secondary color
				txtPrimaryDark: '#FFFFFF', // Light text color
				txtSecondaryDark: '#A0A0A0', // Secondary light text color
			},
		},
	},
	plugins: [],
};
