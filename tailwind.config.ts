
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
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
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
				},
				// Cyberpunk theme colors
				neon: {
					cyan: '#00f5ff',
					purple: '#8b5cf6',
					pink: '#f72585',
					green: '#39ff14',
				},
				cyber: {
					dark: '#0a0a0f',
					navy: '#1a1a2e',
					chrome: '#c0c0c0',
					red: '#ff073a',
				}
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
				},
				'glitch': {
					'0%': {
						transform: 'translate(0)',
						filter: 'hue-rotate(0deg)',
					},
					'10%': {
						transform: 'translate(-2px, 2px)',
						filter: 'hue-rotate(90deg)',
					},
					'20%': {
						transform: 'translate(-2px, -2px)',
						filter: 'hue-rotate(180deg)',
					},
					'30%': {
						transform: 'translate(2px, 2px)',
						filter: 'hue-rotate(270deg)',
					},
					'40%': {
						transform: 'translate(2px, -2px)',
						filter: 'hue-rotate(360deg)',
					},
					'50%': {
						transform: 'translate(-2px, 2px)',
						filter: 'hue-rotate(45deg)',
					},
					'60%': {
						transform: 'translate(-2px, -2px)',
						filter: 'hue-rotate(135deg)',
					},
					'70%': {
						transform: 'translate(2px, 2px)',
						filter: 'hue-rotate(225deg)',
					},
					'80%': {
						transform: 'translate(-2px, -2px)',
						filter: 'hue-rotate(315deg)',
					},
					'90%': {
						transform: 'translate(2px, 2px)',
						filter: 'hue-rotate(405deg)',
					},
					'100%': {
						transform: 'translate(0)',
						filter: 'hue-rotate(0deg)',
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 245, 255, 0.8), 0 0 60px rgba(139, 92, 246, 0.6)',
					}
				},
				'spin-slow': {
					from: {
						transform: 'rotateY(0deg)',
					},
					to: {
						transform: 'rotateY(360deg)',
					}
				},
				'ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'scale(4)',
						opacity: '0',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 2s infinite linear alternate-reverse',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'ripple': 'ripple 2s ease-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
