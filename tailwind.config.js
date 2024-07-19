/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fp: "Alata, sans-serif",
        fs: "Josefin Sans, sans-serif",
      },
      fontSize: {
        4.5: "2.5rem",
      },
      colors: {
        DarkGray: "hsl(0, 0%, 55%)",
        VeryDarkGray: "hsl(0, 0%, 41%)",
        lightGray: "rgba(236, 236, 236, 0.7)",
      },
      maxWidth: {
        49: "49ch",
        23: "23ch",
        16: "16ch",
        13: "13ch",
        10: "10ch",
      },
      height: {
        80: "80vh",
      },
      letterSpacing: {
        3: "0.3rem ",
      },
      lineHeight: {
        12: "3rem",
      },
      screens: {
        1150: "1150px",
        1090: "1090px",
        1049: "1049px",
        850: "850px",
        483: "483px",
        453: "453px",
        395: "395px",
      },
    },
  },
  plugins: [],
};
