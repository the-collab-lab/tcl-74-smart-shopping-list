/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	darkMode: 'class', // Enable dark mode using the class strategy
	theme: {
		extend: {
			colors: {
				bgAccent: '#D9ED92', //Accent color for disclosures
				btnPrimary: '#184E77', // Primary color for Buttons
				bgPrimary: '#daf7dc', // Primary color for Backgrounds
				bgSecondary: '#34A0A4', // Accent color for NavBar
				txtPrimary: '#184E77', // Primary color Text
				txtSecondary: '#34A0A4', // Secondary color Text
				//Dark mode colors
				bgPrimaryDark: '#1D1D1D', // Dark background color
				bgSecondaryDark: '#2C2C2C', // Dark secondary color
				txtPrimaryDark: '#FFFFFF', // Light text color
				txtSecondaryDark: '#A0A0A0', // Secondary light text color
				//Purchase Urgency Colors
				duesoondark: '#F79720',
				duekindofsoondark: '#E3DB02',
				notduesoondark: '#4ED91C',
				nolongeractivedark: '#A0A0A0',
				overduedark: '#DB1212',
				duesoon: ' #C76D00',
				duekindofsoon: '#A29B00',
				notduesoon: ' #2C5E02',
				nolongeractive: ' #6B6B6B',
				overdue: '#9C0F0F',
			},
			backgroundImage: {
				'radio-gradient':
					'linear-gradient(to top, #34A0A4, #168AAD, #1A759F, #1E6091, #184E77)',
			},
		},
	},
	plugins: [],
};
