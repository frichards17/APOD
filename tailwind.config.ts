import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  corePlugins: {
    preflight: false
  },
  important: '#app',
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#1A1F23',
          '50': '#D0D4DD',
          '100': '#B8BFCC',
          '200': '#A0A9BA',
          '300': '#8994A9',
          '400': '#717E98',
          '500': '#5E6A82',
          '600': '#4D566A',
          '700': '#3C4353',
          '800': '#2B303B',
          '900': '#1A1F23',
          '950': '#090A0C',
        },
        'secondary': '#7DCFB6',
        'accent': '#FFFAF'
      },
      boxShadow: {
        'outer': '0 0 10px'
      }
    },
    fontFamily: {
      'mono': ['"Roboto Mono"', 'monospace'],
      'sans': ['Roboto', 'sans-serif']
    }

  }
}
export default config
