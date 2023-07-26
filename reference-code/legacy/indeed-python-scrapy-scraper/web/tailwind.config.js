const plugin = require("tailwindcss/plugin")
const {fontFamily} = require("tailwindcss/defaultTheme")
const {normalizeRadixColor} = require("./utils/normalizeRadixColor")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "stories/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        ring: "var(--ring)",
        background: "var(--background)",
        canvas: "var(--canvas)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning-9)",
          foreground: "var(--warning-11)",
        },
        info: {
          DEFAULT: "var(--info-9)",
          foreground: "var(--info-11)",
        },
        input: {
          DEFAULT: "var(--input)",
          accent: "var(--input-accent)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: `var(--radius-md)`,
        lg: `var(--radius-lg)`,
        xl: `var(--radius-xl)`,
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans]
      },
      keyframes: {
        "accordion-down": {
          from: {height: 0},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: 0},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(
      function ({addBase, addUtilities, addComponents, e, config}) {
        // Add your custom styles here
        const lightThemeNeutralPaletteVariables = normalizeRadixColor(
          "sage",
          "--neutral"
        )
        const lightThemePrimaryPaletteVariables = normalizeRadixColor(
          "lime",
          "--primary"
        )
        const darkThemeNeutralPaletteVariables = normalizeRadixColor(
          "sageDark",
          "--neutral"
        )
        const darkNeutralPaletteVariables = normalizeRadixColor(
          "sageDark",
          "--neutral-dark"
        )
        const darkThemePrimaryPaletteVariables = normalizeRadixColor(
          "limeDark",
          "--primary"
        )
        const lightThemeSecondaryPaletteVariables = normalizeRadixColor(
          "teal",
          "--secondary"
        )
        const darkThemeSecondaryPaletteVariables = normalizeRadixColor(
          "tealDark",
          "--secondary"
        )

        const lightThemePositivePaletteVariables = normalizeRadixColor(
          "cyan",
          "--positive"
        )
        const darkThemePositivePaletteVariables = normalizeRadixColor(
          "cyanDark",
          "--positive"
        )
        const lightThemeInfoPaletteVariables = normalizeRadixColor(
          "cyan",
          "--info"
        )
        const darkThemeInfoPaletteVariables = normalizeRadixColor(
          "cyanDark",
          "--info"
        )
        const lightThemeWarningPaletteVariables = normalizeRadixColor(
          "yellow",
          "--warning"
        )
        const darkThemeWarningPaletteVariables = normalizeRadixColor(
          "yellowDark",
          "--warning"
        )
        const lightThemeDestructivePaletteVariables = normalizeRadixColor(
          "red",
          "--destructive"
        )
        const darkThemeDestructivePaletteVariables = normalizeRadixColor(
          "redDark",
          "--destructive"
        )
        const overlayPaletteVariables = normalizeRadixColor(
          "blackA",
          "--overlay"
        )
        addBase({
          ":root": {
            ...lightThemeNeutralPaletteVariables,
            ...lightThemePrimaryPaletteVariables,
            ...lightThemeSecondaryPaletteVariables,
            ...lightThemePositivePaletteVariables,
            ...lightThemeInfoPaletteVariables,
            ...lightThemeWarningPaletteVariables,
            ...lightThemeDestructivePaletteVariables,
            ...darkNeutralPaletteVariables,
            ...overlayPaletteVariables,
          },
          ".dark": {
            ...darkThemeNeutralPaletteVariables,
            ...darkThemePrimaryPaletteVariables,
            ...darkThemeSecondaryPaletteVariables,
            ...darkThemePositivePaletteVariables,
            ...darkThemeInfoPaletteVariables,
            ...darkThemeWarningPaletteVariables,
            ...darkThemeDestructivePaletteVariables,
          },
        })
      },
      {
        theme: {
          extend: {
            colors: {
              neutral: {
                1: "var(--neutral-1)",
                2: "var(--neutral-2)",
                3: "var(--neutral-3)",
                4: "var(--neutral-4)",
                5: "var(--neutral-5)",
                6: "var(--neutral-6)",
                7: "var(--neutral-7)",
                8: "var(--neutral-8)",
                9: "var(--neutral-9)",
                10: "var(--neutral-10)",
                11: "var(--neutral-11)",
                12: "var(--neutral-12)",
              },
              "neutral-dark": {
                1: "var(--neutral-dark-1)",
                2: "var(--neutral-dark-2)",
                3: "var(--neutral-dark-3)",
                4: "var(--neutral-dark-4)",
                5: "var(--neutral-dark-5)",
                6: "var(--neutral-dark-6)",
                7: "var(--neutral-dark-7)",
                8: "var(--neutral-dark-8)",
                9: "var(--neutral-dark-9)",
                10: "var(--neutral-dark-10)",
                11: "var(--neutral-dark-11)",
                12: "var(--neutral-dark-12)",
              },
              primary: {
                1: "var(--primary-1)",
                2: "var(--primary-2)",
                3: "var(--primary-3)",
                4: "var(--primary-4)",
                5: "var(--primary-5)",
                6: "var(--primary-6)",
                7: "var(--primary-7)",
                8: "var(--primary-8)",
                9: "var(--primary-9)",
                10: "var(--primary-10)",
                11: "var(--primary-11)",
                12: "var(--primary-12)",
              },
              secondary: {
                1: "var(--secondary-1)",
                2: "var(--secondary-2)",
                3: "var(--secondary-3)",
                4: "var(--secondary-4)",
                5: "var(--secondary-5)",
                6: "var(--secondary-6)",
                7: "var(--secondary-7)",
                8: "var(--secondary-8)",
                9: "var(--secondary-9)",
                10: "var(--secondary-10)",
                11: "var(--secondary-11)",
                12: "var(--secondary-12)",
              },
              destructive: {
                1: "var(--destructive-1)",
                2: "var(--destructive-2)",
                3: "var(--destructive-3)",
                4: "var(--destructive-4)",
                5: "var(--destructive-5)",
                6: "var(--destructive-6)",
                7: "var(--destructive-7)",
                8: "var(--destructive-8)",
                9: "var(--destructive-9)",
                10: "var(--destructive-10)",
                11: "var(--destructive-11)",
                12: "var(--destructive-12)",
              },
              positive: {
                1: "var(--positive-1)",
                2: "var(--positive-2)",
                3: "var(--positive-3)",
                4: "var(--positive-4)",
                5: "var(--positive-5)",
                6: "var(--positive-6)",
                7: "var(--positive-7)",
                8: "var(--positive-8)",
                9: "var(--positive-9)",
                10: "var(--positive-10)",
                11: "var(--positive-11)",
                12: "var(--positive-12)",
              },
              info: {
                1: "var(--info-1)",
                2: "var(--info-2)",
                3: "var(--info-3)",
                4: "var(--info-4)",
                5: "var(--info-5)",
                6: "var(--info-6)",
                7: "var(--info-7)",
                8: "var(--info-8)",
                9: "var(--info-9)",
                10: "var(--info-10)",
                11: "var(--info-11)",
                12: "var(--info-12)",
              },
              warning: {
                1: "var(--warning-1)",
                2: "var(--warning-2)",
                3: "var(--warning-3)",
                4: "var(--warning-4)",
                5: "var(--warning-5)",
                6: "var(--warning-6)",
                7: "var(--warning-7)",
                8: "var(--warning-8)",
                9: "var(--warning-9)",
                10: "var(--warning-10)",
                11: "var(--warning-11)",
                12: "var(--warning-12)",
              },
              overlay: {
                1: "var(--overlay-1)",
                2: "var(--overlay-2)",
                3: "var(--overlay-3)",
                4: "var(--overlay-4)",
                5: "var(--overlay-5)",
                6: "var(--overlay-6)",
                7: "var(--overlay-7)",
                8: "var(--overlay-8)",
                9: "var(--overlay-9)",
                10: "var(--overlay-10)",
                11: "var(--overlay-11)",
                12: "var(--overlay-12)",
              },
            },
          },
        },
      }
    ),
  ],
}
