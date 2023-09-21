interface Props {
  subscriptionInterval: string;
  handleClick: () => void;
}

function ToggleButton({ subscriptionInterval, handleClick }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label
          className="relative inline-flex cursor-pointer items-center"
          htmlFor="plan-toggle"
        >
          <input
            id="plan-toggle"
            type="checkbox"
            className="peer sr-only"
            checked={subscriptionInterval === "yearly"}
            readOnly
          />
          <div
            onClick={handleClick}
            onKeyDown={handleClick}
            aria-label="Yearly or monthly plan toggle"
            role="presentation"
            className={`
              peer-checked:bg-userMarineBlue peer-focus:ring-userMarineBlue peer h-5 w-10
              rounded-full  bg-userToggleBG after:absolute after:left-[2px] after:top-0.5 
              after:h-4 after:w-4 after:rounded-full 
              after:border after:border-gray-300 after:bg-white 
              after:transition-all after:content-[''] 
              hover:bg-[#77ecdd] peer-checked:after:translate-x-full
              peer-checked:after:border-white
              ${subscriptionInterval === "yearly" && "brightness-110"}`}
          />
        </label>
      </div>
    </div>
  );
}

export default ToggleButton;
