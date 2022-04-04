module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: { min: "1024px" },
      mobile: { min: "320px" },
    },
    extend: {
      animation: {
        "wiggle-1": "wiggle-1 3s ease-in-out infinite",
        "wiggle-2": "wiggle-2 4s ease-in-out infinite",
        "wiggle-3": "wiggle-3 5s ease-in-out infinite",
      },
      keyframes: {
        "wiggle-1": {
          "0%, 100%": { transform: "rotate(30deg)" },
          "50%": { transform: "rotate(33deg)" },
        },
        "wiggle-2": {
          "0%, 100%": { transform: "rotate(26deg)" },
          "50%": { transform: "rotate(30deg)" },
        },
        "wiggle-3": {
          "0%, 100%": { transform: "rotate(28deg)" },
          "50%": { transform: "rotate(33deg)" },
        },
      },
    },
  },
  plugins: [],
};
