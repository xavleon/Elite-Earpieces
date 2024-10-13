/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2463EB", // Custom primary color
          secondary: "#F59E0B", // Custom secondary color
          accent: "#10B981", // Custom accent color
          neutral: "#B3E240", // Custom neutral color (optional)
          "base-100": "#12161B", // Background base color
        },
      },
    ],
  },
};
