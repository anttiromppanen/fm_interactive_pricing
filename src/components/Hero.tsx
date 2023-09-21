function Hero() {
  return (
    <div
      className="
        bg-userHeroBgImage flex h-[234px] w-full flex-col
        items-center justify-center gap-y-2 bg-center bg-no-repeat text-center 
        md:h-[264px]"
    >
      <h1
        className="
          text-xl font-bold text-userDarkDesaturatedBlue
          md:text-3xl"
      >
        Simple, traffic-based pricing
      </h1>
      <p className="px-14 text-userGrayBlueText">
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </div>
  );
}

export default Hero;
