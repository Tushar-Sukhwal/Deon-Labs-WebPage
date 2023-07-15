/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      padding : {
        '100px': '100px',
        '20px': '20px',
        '10px': '10px',

      }, 
      backgroundImage: {
        'hero-pattern': "url('https://assets.website-files.com/638b9d442c86b78844c8c5b0/6399de5f30856f63fd817f37_abstract-3d-color-circle-2021-09-04-10-16-37-utc-02-poster-00001.jpg')",
      }, 

      fontFamily: {
        inter: "Inter",
        tektur : "Tektur",
        poppins : "Poppins",
      },

      colors: {
        black: "#000",
        white: "#fff",
        crimson: "#ff306e",
        gray: {
          "100": "#121212",
          "200": "rgba(255, 255, 255, 0.16)",
          "300": "rgba(255, 255, 255, 0.2)",
          "400": "rgba(14, 14, 14, 0.54)",
        } ,

    },

    fontSize: {
      xs: "12px",
      mini: "15px",
      "21xl": "40px",
      "3xl": "22px",
      "25xl": "44px",
      "77xl": "96px",
    }
  },
  corePlugins: {
    preflight: false,
  }
}
}
