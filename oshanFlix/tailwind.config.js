/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Paul: ["Paul", "sans-serif"],
        rocg: ["rocg", "sans-serif"],
      },
      colors: {
        "flix-orange": "#FF6B00",
        "flix-orange-tint-01": "#B34B00",
        "flix-orange-shade-01": "#FF8933",
      },
      backgroundImage: {
        "gradient-01": "linear-gradient(214deg,rgba(255, 255, 255, 0) 28%,rgba(0, 0, 0, 1) 81%)",
        "gradient-02": "linear-gradient(180deg, rgba(255,255,255,0) 28%, rgba(0,0,0,1) 97%)",
      },
      screens: {
        ns: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
