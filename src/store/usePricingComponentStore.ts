import { create } from "zustand";
import items from "../data/items.json";

export type Price = { pageviews: string; price: string };

interface State {
  monthlyPrices: Price[];
  yearlyPrices: Price[];
  subscriptionInterval: "yearly" | "monthly";
}

interface Actions {
  toggleSubsciptionInterval: () => void;
}

const usePricingComponentStore = create<State & Actions>((set) => ({
  monthlyPrices: items,
  yearlyPrices: [],
  subscriptionInterval: "monthly",
  toggleSubsciptionInterval: () => {
    set((state) => {
      const newInterval =
        state.subscriptionInterval === "monthly" ? "yearly" : "monthly";

      // Calculate yearly prices with a 25% discount
      const yearlyPrices = state.monthlyPrices.map((priceObj) => ({
        ...priceObj,
        price: (parseFloat(priceObj.price) * 12 * 0.75).toFixed(2),
      }));

      return { ...state, subscriptionInterval: newInterval, yearlyPrices };
    });
  },
}));

export default usePricingComponentStore;
