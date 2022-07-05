/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-home': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/assets/bg-image.png')",
        'image-header': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
        'photo': "url('/assets/profile-photo.jpg')",
        'darkness': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
      },
      backdropBlur: {
        xs: '1px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s infinite',
      },
    },
  },
  plugins: [],
}
