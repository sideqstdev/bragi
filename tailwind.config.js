module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "Sen",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      xxl: `2.5rem`,
      xl: `2rem`,
      lg: `1.5rem`,
      md: `1.25rem`,
      sm: `1.125rem`,
      xs: `1rem`,
      xxs: `.875rem`,
      tny: `.75rem`
    },
    colors: {
      transparent: `transparent`,
      light: {
        background: `var(--color-purewhite)`,
        altbackground: `var(--color-offwhite)`,
        text: `var(--color-night)`,
        disabled: `var(--color-rainydaygray)`,
        default: {
          DEFAULT: `var(--color-mistyrain)`,
          hover: `var(--color-graysmoke)`,
          disabled: `var(--color-wispygray)`
        },
        primary: {
          DEFAULT: `var(--color-blue)`,
          hover: `var(--color-lightblue0)`,
          disabled: `var(--color-lightestblue)`,
          text: `var(--color-darkblue1)`,
        },
        confirm: {
          DEFAULT: `var(--color-cyan)`,
          hover: `var(--color-lightcyan0)`,
          disabled: `var(--color-lightestcyan)`
        },
        danger: {
          DEFAULT: `var(--color-red)`,
          hover: `var(--color-lightred0)`,
          disabled: `var(--color-lightestred)`
        },
        box: {
          box1: `#e5ebed`,
          box2: `var(--color-purewhite)`,
          box3: `var(--color-graysmoke)`,
          box4: `var(--color-mistyrain)`
        }
      },
      dark: {
        background: `var(--color-slategray)`,
        altbackground: `var(--color-night)`,
        text: `var(--color-wispygray)`,
        disabled: `var(--color-foggygray)`,
        default: {
          DEFAULT: `var(--color-grayhaze)`,
          hover: `var(--color-rainydaygray)`,
          disabled: `var(--color-wispygray)`
        },
        primary: {
          DEFAULT: `var(--color-blue)`,
          hover: `var(--color-darkblue0)`,
          disabled: `var(--color-lightestblue)`,
          text: `var(--color-lightblue1)`,
        },
        confirm: {
          DEFAULT: `var(--color-cyan)`,
          hover: `var(--color-darkcyan0)`,
          disabled: `var(--color-lightestcyan)`
        },
        danger: {
          DEFAULT: `var(--color-red)`,
          hover: `var(--color-darkred0)`,
          disabled: `var(--color-lightestred)`
        },
        box: {
          box1: `var(--color-nightlight)`,
          box2: `var(--color-grayhaze)`,
          box3: `var(--color-rainydaygray)`,
          box4: `var(--color-foggygray)`
        }
      },
      accent: {
        DEFAULT: `var(--color-lightpurple1)`,
        hover: `var(--color-darkpurple1)`,
        disabled: `var(--color-lightestpurple)`
      },
      warn: {
        DEFAULT: `var(--color-yellow)`
      },
      discord: {
        DEFAULT: `#7289DA`,
        hover: `#5b6eae`,
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
