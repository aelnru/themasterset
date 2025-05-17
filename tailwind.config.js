module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        masterball: {
          primary: '#362D5C',     // Master Ball purple
          main: '#73469C',
          accent: '#A25C7E',
          pink: '#CA548D',
          neutral: '#F8F8F8',     // Light background
          dark: '#2B2B2B',        // Dark background or text
          white: '#FFFFFF',       // Highlight white
          gold: '#FFD700',
          lilac: '#8984A4',       // Optional highlight
        }
      },
      fontFamily: {
        luckiest: ['Luckiest Guy', 'cursive'],
        knewave: ['Knewave', 'cursive'],
        sans: ['Poppins', 'sans-serif'], // For body text
      },
    },
  },
  plugins: [],
};
