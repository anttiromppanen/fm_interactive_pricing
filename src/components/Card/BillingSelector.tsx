import ToggleButton from "./ToggleButton";
import usePricingComponentStore from "../../store/usePricingComponentStore";

function BillingSelector() {
  const { subscriptionInterval, toggleSubsciptionInterval } =
    usePricingComponentStore();

  const handleClick = () => {
    toggleSubsciptionInterval();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
          mt-10 flex w-full items-center justify-center gap-x-2
          text-xs tracking-wide text-userGrayBlueText
          sm:ml-7 sm:mt-16 md:text-sm"
    >
      <p>Monthly Billing</p>
      <ToggleButton
        subscriptionInterval={subscriptionInterval}
        handleClick={handleClick}
      />
      <div className="-mr-7 flex justify-center">
        <p className="sm:mr-2">Yearly Billing</p>
        <p
          className="
            rounded-full bg-userDiscountBG px-2 
            text-[0.625rem] font-bold  text-userDiscountText"
        >
          -25% <span className="hidden sm:inline">discount</span>
        </p>
      </div>
    </button>
  );
}

export default BillingSelector;
