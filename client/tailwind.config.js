// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "node_modules/daisyui/dist/**/*.js",
//     "node_modules/react-daisyui/dist/**/*.js",
//   ],
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
//           primary: "#570DF8",

//           secondary: "#F000B8",

//           accent: "#37CDBE",

//           neutral: "#3D4451",

//           "base-100": "#FFFFFF",

//           info: "#3ABFF8",

//           success: "#36D399",

//           warning: "#FBBD23",

//           error: "#F87272",
//         },
//       },
//     ],
//   },
//   extend: {},
//   plugins: [require("daisyui")],
// };

/**  @type {import('tailwindcss').Config} */ module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#202020",

          secondary: "#57534e",

          accent: "#FFC800",

          neutral: "#8F857D",

          "base-100": "#FFFFFF",

          info: "#0284c7",

          success: "#16a34a",

          warning: "#ea580c",

          error: "#b91c1c",
        },
      },
    ],
  },
  content: ["./src//*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
