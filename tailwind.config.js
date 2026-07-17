/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  safelist: ["bg-brand-gradient", "bg-brand-gradient-soft"],
  theme: {
    extend: {
      colors: {
        // Pantone 2747 C — deep blue
        brandblue: {
          DEFAULT: "#001A72",
          dark: "#000F45",
          light: "#0B2C8C",
        },
        // Pantone Green C
        brandgreen: {
          DEFAULT: "#00AB84",
          dark: "#00876A",
          light: "#1FC9A0",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #001A72 0%, #00AB84 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #0B2C8C 0%, #1FC9A0 100%)",
      },
      fontFamily: {
        vazir: ["var(--font-vazir)", "Tahoma", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(14, 42, 78, 0.18)",
      },
      keyframes: {
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "60%": { transform: "translateY(10px)", opacity: "0.3" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "scroll-dot": "scroll-dot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
