/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        paper: "#FAFCF4",
        mist: "#F1F6E6",
        cardbg: "#FFFFFF",
        ink: "#23402E",
        stone: "#6F8473",
        line: "#DDE8CD",
        accent: "#6DA34D",
        deep: "#1B3226",
        limon: "#C6E38B",
        berry: "#E4A96A",
        aqua: "#8FD3C7",
      },
      fontFamily: {
        display: ['"Baloo 2"', "ui-rounded", "system-ui", "sans-serif"],
        body: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -30px rgba(35,64,46,.22)",
        cardhover: "0 30px 70px -30px rgba(35,64,46,.30)",
        accentglow: "0 0 0 1px rgba(109,163,77,.20), 0 16px 45px -18px rgba(109,163,77,.32)",
      },
      borderRadius: {
        lg: "1.25rem",
        md: "1rem",
        sm: "0.75rem",
      },
    },
  },
  plugins: [],
}