/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-home': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/bg-image.png')",
        'photo': "url('/assets/profile-photo.jpg')",
      }
    },
  },
  plugins: [],
}
