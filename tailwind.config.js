/** @type {import('tailwindcss').Config} */
module.exports = {
 
    content: [
      "./src/**/*.{html,ts}",
    ],
  theme: {
    extend: {
      colors:{
        'white-1':"#FAF9F7",
        "red-1":"#A61F23",
        "grey-1":"#282828",
        "grey-2":"#636363;",
      },
    },
  },
  plugins: [],
}

