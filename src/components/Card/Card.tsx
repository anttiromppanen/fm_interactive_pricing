import { ChangeEvent, useState } from "react";
import StyledRangeInput from "./StyledRangeInput";

import checkIcon from "../../assets/images/icon-check.svg";
import BillingSelector from "./BillingSelector";
import usePricingComponentStore from "../../store/usePricingComponentStore";

function Card() {
  const [selectedValue, setSelectedValue] = useState(0);
  const { monthlyPrices, yearlyPrices, subscriptionInterval } =
    usePricingComponentStore();

  const currentPricePlan =
    subscriptionInterval === "monthly"
      ? monthlyPrices[selectedValue]
      : yearlyPrices[selectedValue];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSelectedValue(newValue);

    const progress = (newValue / (monthlyPrices.length - 1)) * 100;
    e.target.style.background = `linear-gradient(to right, hsl(175, 77%, 79%) ${progress}%, #E9EEFB ${progress}%)`;
  };

  return (
    <div
      className="
        m-auto w-full max-w-[540px] rounded-lg bg-userPricingBGWhite"
    >
      <div className="px-6 py-9 md:p-12">
        <div
          className="
          flex flex-wrap items-center justify-center gap-y-10 text-center
          md:justify-between"
        >
          <h2
            className="
            order-1 basis-full text-sm tracking-widest text-userGrayBlueText 
            md:basis-auto md:text-base"
          >
            {currentPricePlan.pageviews} PAGEVIEWS
          </h2>
          <h2
            className="
            order-3 flex basis-full items-center justify-center text-3xl font-bold 
            md:order-2 md:basis-auto md:text-4xl"
          >
            {`$${currentPricePlan.price}`}{" "}
            <span className="ml-2 text-sm text-userGrayBlueText">
              {" "}
              / {subscriptionInterval}
            </span>
          </h2>
          <StyledRangeInput
            selectedValue={selectedValue}
            monthlyPrices={monthlyPrices}
            handleChange={handleChange}
          />
        </div>
        <BillingSelector />
      </div>
      <div className="flex flex-col items-center justify-between border-t border-t-userEmptySliderBar px-11 py-7 text-center md:flex-row">
        <ul className="flex flex-col gap-y-2 md:items-start">
          <li className="flex items-center justify-center gap-x-4 text-xs text-userGrayBlueText md:text-sm">
            <img
              src={checkIcon}
              alt="Check icon"
              className="h-[10px] w-[10px]"
            />
            <p>Unlimited websites</p>
          </li>
          <li className="flex items-center justify-center gap-x-4 text-xs text-userGrayBlueText md:text-sm">
            <img
              src={checkIcon}
              alt="Check icon"
              className="h-[10px] w-[10px]"
            />
            <p>100% data ownership</p>
          </li>
          <li className="flex items-center justify-center gap-x-4 text-xs text-userGrayBlueText md:text-sm">
            <img
              src={checkIcon}
              alt="Check icon"
              className="h-[10px] w-[10px]"
            />
            <p>Email reports</p>
          </li>
        </ul>
        <button
          type="button"
          className="my-8 rounded-[2rem] bg-userDarkDesaturatedBlue px-11 py-4 text-userCtaText
          hover:text-userEmptySliderBar"
        >
          Start my trial
        </button>
      </div>
    </div>
  );
}

export default Card;
