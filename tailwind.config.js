/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mochiy: ['Mochiy Pop One', 'sans-serif']
      },
      animation: {
        flip: "flip-horizontal-bottom 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) forwards",
        modal: "modal-animation 0.5s"
      }
    },
  },
  plugins: [],
}

