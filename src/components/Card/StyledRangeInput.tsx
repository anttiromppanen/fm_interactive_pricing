import { ChangeEvent } from "react";
import { Price } from "../../store/usePricingComponentStore";

interface Props {
  selectedValue: number;
  monthlyPrices: Price[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function StyledRangeInput({
  selectedValue,
  monthlyPrices,
  handleChange,
}: Props) {
  return (
    <input
      type="range"
      min={0}
      max={monthlyPrices.length - 1}
      value={selectedValue}
      onChange={(e) => handleChange(e)}
      className="
              [&::-webkit-slider-thumb]:bg-userSliderThumbBg [&::-moz-range-thumb]:bg-userSliderThumbBg 
              order-2 h-2 w-full rounded-2xl
              !bg-userEmptySliderBar md:order-3 
              [&::-moz-range-thumb]:h-10 [&::-moz-range-thumb]:w-10 
              [&::-moz-range-thumb]:appearance-none
              [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none
              [&::-moz-range-thumb]:bg-userSliderBG [&::-moz-range-thumb]:bg-center 
              [&::-moz-range-thumb]:bg-no-repeat [&::-moz-range-thumb]:shadow-xl
              [&::-moz-range-thumb]:shadow-[#73EDE3] [&::-moz-range-thumb]:hover:bg-[#79eadd]
              [&::-moz-range-thumb]:active:bg-[#22aea1] [&::-webkit-slider-thumb]:h-10 
              [&::-webkit-slider-thumb]:w-10 [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-userSliderBG
              [&::-webkit-slider-thumb]:bg-center [&::-webkit-slider-thumb]:bg-no-repeat 
              [&::-webkit-slider-thumb]:shadow-xl [&::-webkit-slider-thumb]:shadow-[#73EDE3]
              [&::-webkit-slider-thumb]:hover:bg-[#79eadd] [&::-webkit-slider-thumb]:active:bg-[#22aea1]
              "
      style={{
        WebkitAppearance: "none",
        appearance: "none",
        cursor: "pointer",
        background: "transparent",
      }}
    />
  );
}
