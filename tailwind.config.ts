import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      0: "0rem",
      0.5: "2rem",
      1: "4rem",
      1.5: "6rem",
      2: "8rem",
      2.5: "10rem",
      3: "12rem",
      3.5: "14rem",
      4: "16rem",
      5: "20rem",
      6: "24rem",
      7:	"28rem",
      8:	"32rem",
      9: "36rem",
      10: "40rem",
      11:	"44rem",
      12:	"48rem",
      14:	"56rem",
      16: "64rem",
      20: "80rem",
      24: "96rem",
      28: "112rem",
      32: "128rem",
      36: "144rem",
      40: "160rem",
      44: "176rem",
      48: "192rem",
      52: "208rem",
      56: "224rem",
      60: "240rem",
      64: "256rem",
      72: "288rem",
      80: "320rem",
      96: "384rem",
    },
    screens: {
      lm: '1px',
      m: '376px', // mobile
      t: '720px', // tablet
      d: '1080px' // desktop
    },
    fontSize: {
      small: ['10rem', '14rem'],
      sbasic: ['12rem', '18rem'],
      basic: ['13rem', '19rem'],
      regular: ['14rem', '18rem'],
      regular01: ['14rem', '22rem'],
      regular02: ['14rem', '24rem'],
      rm: ['15rem', '26rem'],
      medium: ['16rem', '26rem'],
      ml: ['18rem', '26rem'],
      large: ['20rem', '30rem'],
      font01: ['0.625rem', '0.875rem'],
      font02: ['0.813rem', '1.188rem'],
      font03: ['0.875rem', '1.188rem'],
      font05: ['0.875rem', '1.125rem'],
      font06: ['1rem', '1.625rem'],
      font07: ['1.125rem', '1.375rem'],
      defaults: ['12rem', '18rem'],
      xs: '12rem',
      sm: '15rem',
      tiny: '8rem',
      base: '16rem',
      lg: '18rem',
      xl: '24rem',
      '2xl': '28rem',
      '3xl': '32rem',
      '4xl': '36rem',
      '5xl': '48rem',
      '6xl': '60rem',
      '7xl': '72rem',
      '8xl': '96rem',
      '9xl': '128rem'
    },
    borderRadius: {
      none: "0rem",
      sm: "2rem",
      DEFAULT: "4rem",
      md: "6rem",
      lg: "8rem",
      xl: "12rem",
      "2xl": "16rem",
      "3xl": "24rem",
      full: "9999rem"
    },
    extend: {
      maxWidth:{
        default:"480rem",
        
      },
      spacing: {
        mobile: '332rem',
        tablet: '728rem',
        desktop: '1392rem',
        medium: '52rem',
        xsmall: '36rem'
      },
      gridTemplateColumns: {
        mobile: 'repeat(2, minmax(0, 1fr))',
        tablet: 'repeat(4, minmax(0, 1fr))',
        desktop: 'repeat(4, minmax(0, 1fr))'
      },
      gap: {
        mobile: '16rem',
        tablet: '16rem',
        desktop: '24rem'
      },
      fontFamily: {
        helvetica: ['var(--font-helvetica)'],
        lato: ['var(--font-lato)'],
      },
      borderRadius: {
        large: '24rem',
        medium: '16rem',
        small: '12rem',
        xsmall: '6rem'
      },
      boxShadow: {
        MS: "0px 2px 24px 0px rgba(0, 0, 0, 0.05)",
        S: "0px 2px 16px 0px rgba(0, 0, 0, 0.05)",
        ML: "0px 2px 40px 0px rgba(0, 0, 0, 0.05)",
        small: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
      }
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
