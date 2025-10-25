/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        // Custom dark theme colors
        "matrix-green": "#00ff88",
        "terminal-bg": "#0d1117",
        "terminal-border": "#30363d",
        "code-bg": "#161b22",
        "dark-bg": "#0a0a0a",
        "dark-card": "#1a1a1a",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
        typewriter: "typewriter 3s steps(40, end)",
        blink: "blink 0.75s step-end infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "matrix-rain": "matrix-rain 3s linear infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "terminal-typing": "terminal-typing 2s steps(20, end) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "#00ff88" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88",
          },
          "50%": {
            boxShadow: "0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88",
          },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0, 255, 136, 0.6)",
            transform: "scale(1.05)",
          },
        },
        "terminal-typing": {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 255, 136, 0.3)",
        "neon-lg": "0 0 20px rgba(0, 255, 136, 0.5)",
        matrix: "0 0 30px rgba(0, 255, 136, 0.2)",
      },
    },
  },
  plugins: [],
};
