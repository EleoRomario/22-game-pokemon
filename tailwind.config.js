/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: "#364eba",
					900: "#0d1a35",
				},
				bg: {
					DEFAULT: "#111111",
				},
			},
			animation: {
				error: "error 0.5s ease-in-out",
			},
			keyframes: {
				error: {
					"0%, 100%": {
						transform: "translateX(0)",
					},
					"25%, 75%": {
						transform: "translateX(-5px)",
					},
					"50%": {
						transform: "translateX(5px)",
					},
				},
			},
		},
	},
	plugins: [],
};
