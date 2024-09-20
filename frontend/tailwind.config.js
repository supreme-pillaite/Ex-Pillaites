import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: 'hsl(0 0% 100%)',
				foreground: 'hsl(220 10% 20%)',
				card: 'hsl(0 0% 98%)',
				'card-foreground': 'hsl(220 10% 20%)',
				popover: 'hsl(0 0% 98%)',
				'popover-foreground': 'hsl(220 10% 20%)',
				primary: 'hsl(45 100% 50%)',
				'primary-foreground': 'hsl(220 10% 20%)',
				secondary: 'hsl(220 15% 90%)',
				'secondary-foreground': 'hsl(220 10% 20%)',
				muted: 'hsl(220 15% 95%)',
				'muted-foreground': 'hsl(220 10% 40%)',
				accent: 'hsl(45 100% 50%)',
				'accent-foreground': 'hsl(220 10% 20%)',
				destructive: 'hsl(0 85% 60%)',
				'destructive-foreground': 'hsl(0 0% 100%)',
				border: 'hsl(220 15% 90%)',
				input: 'hsl(220 15% 90%)',
				ring: 'hsl(45 100% 50%)',
			},
			borderRadius: {
				radius: '0.25rem',
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				Pillaites: {
					primary: 'hsl(45 100% 50%)',
					secondary: 'hsl(0 0% 100%)',
					accent: 'hsl(45 100% 50%)',
					neutral: 'hsl(0 0% 0%)',
					'base-100': 'hsl(0 0% 95%)',
					info: 'hsl(220 15% 70%)',
					success: 'hsl(150 80% 40%)',
					warning: 'hsl(45 100% 50%)',
					error: 'hsl(0 85% 60%)',
				},
			},
			{
				PillaitesDark: {
					primary: 'hsl(45 100% 50%)',
					secondary: 'hsl(220 15% 15%)',
					accent: 'hsl(45 100% 50%)',
					neutral: 'hsl(220 20% 5%)',
					'base-100': 'hsl(220 20% 8%)',
					info: 'hsl(220 20% 95%)',
					success: 'hsl(150 80% 70%)',
					warning: 'hsl(45 100% 60%)',
					error: 'hsl(0 85% 50%)',
				},
			},
		],
	},
};
