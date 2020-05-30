const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        "18": "4.5rem", // used for padding top on page container
        "28": "7rem" // used for container horizontal padding on md+ screens
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
