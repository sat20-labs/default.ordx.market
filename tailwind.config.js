// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // You can extend the default Tailwind theme here if needed
      colors: {
        // Add your custom colors here if needed
      },
      fontFamily: {
        // Add your custom fonts here if needed
      },
      spacing: {
        // Add custom spacing values if needed
      },
    },
  },
  plugins: [],
};