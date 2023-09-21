/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "0.9375rem",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        userMainBG: "hsl(230, 100%, 99%)",
        userPricingBGWhite: "hsl(0, 0%, 100%)",
        userToggleBG: "hsl(223, 50%, 87%)",
        userSliderBG: "hsl(174, 86%, 45%)",
        userDiscountBG: "hsl(14, 92%, 95%)",

        userFullSliderBar: "hsl(174, 77%, 80%)",
        userDiscountText: "hsl(15, 100%, 70%)",
        userCtaText: "hsl(226, 100%, 87%)",
        userEmptySliderBar: "hsl(224, 65%, 95%)",
        userGrayBlueText: "hsl(225, 20%, 60%)",
        userDarkDesaturatedBlue: "hsl(227, 35%, 25%)"
      },
      backgroundImage: {
        "userBgImage": "url('/bg-pattern.svg')",
        "userHeroBgImage": "url('/pattern-circles.svg')",
        "userSliderThumbBg": "url('/icon-slider.svg')",
      },
    },
  },
  plugins: [],
}