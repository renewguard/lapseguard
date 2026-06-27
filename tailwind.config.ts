import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        // Core neutrals
        ink: {
          DEFAULT: '#0F1320',
          50: '#F6F7F9',
          100: '#EBEDF2',
          200: '#D7DAE3',
          300: '#AEB4C4',
          400: '#7C8398',
          500: '#5B6472',
          600: '#414A5A',
          700: '#2B3140',
          800: '#181C27',
          900: '#0F1320',
          950: '#090B12',
        },
        // Primary brand blue
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D4FF',
          300: '#A3B5FF',
          400: '#6E8CFF',
          500: '#3F69FF',
          600: '#2954FF',
          700: '#1E3FDB',
          800: '#1B33A8',
          900: '#192E85',
        },
        // Semantic status (renewal urgency)
        safe: { DEFAULT: '#16A34A', bg: '#ECFDF3' },
        warn: { DEFAULT: '#D97706', bg: '#FFF7E6' },
        danger: { DEFAULT: '#DC2626', bg: '#FEF2F2' },
        surface: {
          DEFAULT: '#FFFFFF',
          mist: '#F6F8FC',
          dark: '#0B0E14',
          'dark-raised': '#11151D',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter Tight', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '10xl': ['8.5rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(15 19 32 / 0.04), 0 8px 24px -8px rgb(15 19 32 / 0.08)',
        'soft-lg': '0 4px 12px 0 rgb(15 19 32 / 0.04), 0 24px 48px -16px rgb(15 19 32 / 0.16)',
        glow: '0 0 0 1px rgb(41 84 255 / 0.16), 0 8px 32px -8px rgb(41 84 255 / 0.35)',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(40% 40% at 15% 10%, rgb(41 84 255 / 0.10) 0%, transparent 100%), radial-gradient(35% 35% at 85% 0%, rgb(110 140 255 / 0.12) 0%, transparent 100%)',
        'mesh-dark':
          'radial-gradient(40% 40% at 15% 10%, rgb(41 84 255 / 0.20) 0%, transparent 100%), radial-gradient(35% 35% at 85% 0%, rgb(110 140 255 / 0.16) 0%, transparent 100%)',
        'grid-light':
          'linear-gradient(rgb(15 19 32 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(15 19 32 / 0.05) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(rgb(255 255 255 / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'radar-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.92)', opacity: '0.6' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'radar-spin': 'radar-spin 7s linear infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
