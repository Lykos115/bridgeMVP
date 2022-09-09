// tailwind.config.js

module.exports = {
 content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "colors": {
        "app": {
          "50": "#FFF9F0",
          "100": "#FEF3E1",
          "200": "#FDE5BE",
          "300": "#FDD9A0",
          "400": "#FCCB7E",
          "500": "#FBBF5D",
          "600": "#F9A41A",
          "700": "#CC8005",
          "800": "#865403",
          "900": "#462C02"
        }
      }
    },
  },
  plugins: [],
}
