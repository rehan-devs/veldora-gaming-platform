import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Sky Blues
        sky: {
          primary: '#87CEEB',
          azure: '#007FFF',
          baby: '#89CFF0',
          powder: '#B0E0E6',
          cerulean: '#00B7EB',
        },
        // Secondary Clouds/Whites
        cloud: {
          DEFAULT: '#F8FBFF',
          pearl: '#FDFEFE',
          snow: '#FFFAFA',
          cream: '#FFF8F0',
          mist: '#E8F4F8',
        },
        // Accent Colors
        accent: {
          sunshine: '#FFD93D',
          coral: '#FF8B94',
          mint: '#98D8AA',
          lavender: '#C3AED6',
          peach: '#FFCAB0',
          bubblegum: '#FFB5E8',
        },
        // Dragon Colors
        dragon: {
          blue: '#5DADE2',
          belly: '#FAD7A0',
          blush: '#FADBD8',
        },
        // Background
        bg: {
          sky: '#E8F6FF',
          night: '#1A1A2E',
        },
      },
fontFamily: {
  display: ['Fredoka', 'cursive'],
  heading: ['Nunito', 'sans-serif'],
  body: ['Poppins', 'sans-serif'],
  handwritten: ['Patrick Hand', 'cursive'],
  mono: ['Fira Code', 'monospace'],
},
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1' }],
        'section': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.2' }],
        'subtitle': ['clamp(1.25rem, 3vw, 2rem)', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'cloud': '50px',
        'fluffy': '30px',
        'soft': '20px',
      },
      boxShadow: {
        'cloud': '0 10px 40px rgba(135, 206, 235, 0.2)',
        'float': '0 20px 60px rgba(135, 206, 235, 0.15)',
        'bounce': '0 5px 20px rgba(0, 127, 255, 0.1)',
        'glow-magic': '0 0 30px rgba(135, 206, 235, 0.4)',
        'glow-sunshine': '0 0 40px rgba(255, 217, 61, 0.3)',
        'glow-fairy': '0 0 20px rgba(195, 174, 214, 0.5)',
        'inner-cloud': 'inset 0 0 32px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-sky': 'linear-gradient(180deg, #87CEEB 0%, #E0F4FF 50%, #FFFFFF 100%)',
        'gradient-sunrise': 'linear-gradient(135deg, #FFD93D 0%, #FF8B94 50%, #C3AED6 100%)',
        'gradient-rainbow': 'linear-gradient(90deg, #FF8B94, #FFD93D, #98D8AA, #87CEEB, #C3AED6)',
        'gradient-cloud': 'linear-gradient(180deg, #FFFFFF 0%, #F0F8FF 100%)',
        'gradient-dreamy': 'linear-gradient(135deg, #E0F4FF 0%, #F8F0FF 50%, #FFF0F5 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'drift': 'drift 20s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'wobble': 'wobble 1s ease-in-out',
        'peek': 'peek 0.5s ease-out forwards',
        'rainbow-shift': 'rainbowShift 3s linear infinite',
        'squish': 'squish 0.3s ease-out',
        'pop': 'pop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'zzz': 'zzz 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
        peek: {
          '0%': { transform: 'translateY(100%) scale(0.8)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        rainbowShift: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        squish: {
          '0%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1.1, 0.9)' },
          '100%': { transform: 'scale(1, 1)' },
        },
        pop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zzz: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-30px) translateX(10px) scale(0.5)', opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config