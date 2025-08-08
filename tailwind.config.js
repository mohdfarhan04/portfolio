/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // YOUR EXISTING COLORS ARE PERFECT, LEAVE THEM AS-IS
        coral: {
          50: '#fef7f4',
          100: '#fdeee8',
          200: '#fad9c6',
          300: '#f6bfa4',
          400: '#ef8b60',
          500: '#e8571c',
          600: '#d14e19',
          700: '#ae4115',
          800: '#8b3411',
          900: '#712a0e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },

        // --- ADD THIS SMALL BLOCK ---
        // This makes classes like `bg-background` work by giving them a definition.
        // It uses colors you already have in your 'neutral' palette.
        background: '#fafafa',   // Corresponds to your neutral-50
        foreground: '#171717',   // Corresponds to your neutral-900
        border: '#e5e5e5',       // Corresponds to your neutral-200
        card: '#fafafa',         // Corresponds to your neutral-50
        'card-foreground': '#171717', // Corresponds to your neutral-900
        primary: '#e8571c',      // Corresponds to your coral-500
        'primary-foreground': '#fef7f4' // Corresponds to your coral-50
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // The rest of your file (animation, keyframes) stays the same
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}