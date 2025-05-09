
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				brand: {
					primary: {
						blue: "#443DF6",
						grey: "#1B2124",
						black: "#000000"
					},
					tones: {
						navy: "#191489",
						red: "#C5292A",
						sunny: "#FFD965",
						marina: "#A6D4FF",
						green: "#22B02E"
					},
					greys: {
						grey1: "#8D9091",
						grey2: "#CCCCCC",
						grey3: "#EFEFEF"
					}
				},
				semantic: {
					error: "#C5292A",
					success: "#22B02E",
					warning: "#FFD965",
					info: "#A6D4FF"
				},
				ui: {
					background: "#FFFFFF",
					foreground: "#1B2124",
					border: {
						DEFAULT: "#EFEFEF",
						hover: "#CCCCCC",
						focus: "#443DF6",
						disabled: "#EFEFEF"
					}
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'avenir': ['Avenir Next', 'sans-serif']
			},
			fontSize: {
				xs: '12px',
				sm: '14px',
				base: '16px',
				lg: '24px',
				xl: '32px',
				'2xl': '40px',
				'3xl': '64px'
			},
			lineHeight: {
				tight: '16px',
				normal: '24px',
				relaxed: '32px',
				loose: '40px',
				'extra-loose': '72px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			boxShadow: {
				'card': '0px 2px 5px 0px rgba(0,0,0,0.05)',
				'modal': '0px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px 25px 35px 0px rgba(0, 0, 0, 0.03)'
			},
			spacing: {
				'1': '4px',
				'2': '8px',
				'3': '12px',
				'4': '16px',
				'5': '20px',
				'6': '24px',
				'8': '32px',
				'10': '40px',
				'12': '48px',
				'16': '64px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
