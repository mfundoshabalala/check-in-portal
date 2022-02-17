module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				default: ["'Signika', sans-serif"],
				firaSans: ["'Fira Sans'"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
