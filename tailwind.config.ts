import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: '#0A1F4D', // Dark Blue
  				foreground: '#FFFFFF',
  				50: '#E6E9F0',
  				100: '#CCD4E1',
  				200: '#99A9C3',
  				300: '#667FA5',
  				400: '#335487',
  				500: '#0A1F4D',
  				600: '#08193D',
  				700: '#06132E',
  				800: '#040C1F',
  				900: '#02060F',
  			},
  			secondary: {
  				DEFAULT: '#1E3A8A', // Lighter Blue
  				foreground: '#FFFFFF',
  			},
  			accent: {
  				DEFAULT: '#FF3B30', // Vibrant Red
  				foreground: '#FFFFFF',
  			},
  			destructive: {
  				DEFAULT: '#EF4444',
  				foreground: '#FFFFFF',
  			},
  			muted: {
  				DEFAULT: '#F1F5F9',
  				foreground: '#64748B',
  			},
  			card: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#0F172A',
  			},
  			popover: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#0F172A',
  			},
  			border: 'hsl(214.3 31.8% 91.4%)',
  			input: 'hsl(214.3 31.8% 91.4%)',
  			ring: '#0A1F4D',
  			chart: {
  				'1': '#0A1F4D',
  				'2': '#1E3A8A',
  				'3': '#3B82F6',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
