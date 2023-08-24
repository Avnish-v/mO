/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //!bg Color
      colors: {
        primary: {
          50: "#79C1DD",
          100: "#60A3BA",
          200: "#518B9F",
          300: "#00B7FD",
        },

        text: {
          primary: {
            50: "#80888F", //80888F
            100: "#B4B4B4",
            200: "#585858",
            300: "#74777A",
          },
          secondary: {
            50: "#00B7FD",
          },
          white: {
            50: "#FFFFFF",
          },
          danger: {
            50: "#D32F2F",
            100: "#FF540D",
            200: "#E33629",
          },
          sucess: {
            50: "#3BB56E",
            100: "#319F43",
          },
          warning: {
            50: "#FBC02D",
          },
          pink: {
            50: "#F266AB",
          },
          Hold: {
            50: "#A875FF",
          },
          HeadLine: {
            50: "#518B9F",
            100: "#60A3BA",
          },
        },
      },

      //!font-family
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        cutom: "5px 0 5px #00000033",
      },
      //!Font-size
      fontSize: {
        xxs: "11px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        "3xl": "24px",
        "4xl": "28px",
        "5xl": "32px",
        "6xl": "40px",
        "7xl": "92px",
      },
    },
  },
  plugins: [],
};
