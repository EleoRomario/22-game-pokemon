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
				tada: "tada 1s ease-in-out",
				"zoom-in": "zoom-in 0.2s ease-out",
				float: "float 3s ease-in-out infinite",
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
				tada: {
					"0%": {
						transform: "scale(1)",
					},
					"10%": {
						transform: "scale(0.9) rotate(-3deg)",
					},
					"20%": {
						transform: "scale(0.9) rotate(-3deg)",
					},
					"30%": {
						transform: "scale(1.1) rotate(3deg)",
					},
					"40%": {
						transform: "scale(1.1) rotate(-3deg)",
					},
					"50%": {
						transform: "scale(1.1) rotate(3deg)",
					},
					"60%": {
						transform: "scale(1.1) rotate(-3deg)",
					},
					"70%": {
						transform: "scale(1.1) rotate(3deg)",
					},
					"80%": {
						transform: "scale(1.1) rotate(-3deg)",
					},
					"90%": {
						transform: "scale(1.1) rotate(3deg)",
					},
					"100%": {
						transform: "scale(1) rotate(0)",
					},
				},
				"zoom-in": {
					"0%": {
						opacity: "0",
						transform: "scale(.5)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)",
					},
				},
				float: {
					"0%": {
						transform: "translateY(0px)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
					"100%": {
						transform: "translateY(0px)",
					},
				},
			},
		},
	},
	plugins: [],
};
