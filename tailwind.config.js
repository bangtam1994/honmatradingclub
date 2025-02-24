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
          DEFAULT: "#7C3AED",
          hover: "#5B21B6",
          dark: "#5B2596",
          light: "#9f93f4",
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
      },
      fontSize: {
        h1: "48px",
        h2: "36px",
        h3: "30px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
      },
      borderRadius: {
        lg: "`var(--radius)`",
        md: "`calc(var(--radius) - 2px)`",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "pulse-blue": "pulse-blue 1.3s infinite",
        "pulse-red": "pulse-red 1.3s infinite",
        scroll: "scroll 50s linear infinite",
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "pulse-blue": {
          "0%": {
            boxShadow: "0 0 0 0px rgba(0, 0, 255, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 10px 10px rgba(0, 0, 255, 0.6)",
          },
          "100%": {
            boxShadow: "0 0 0 20px rgba(0, 0, 255, 0)",
          },
        },
        "pulse-red": {
          "0%": {
            boxShadow: "0 0 0 0px rgba(255, 0, 0, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 10px 10px rgba(255, 0, 0, 0.6)",
          },
          "100%": {
            boxShadow: "0 0 0 20px rgba(255, 0, 0, 0)",
          },
        },
        scroll: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
