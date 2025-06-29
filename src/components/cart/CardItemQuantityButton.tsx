import React from "react";
import { useCartStore } from "@/store/cart";

type Props = {
  cartItemId: number;
  quantity: number;
};

export const CardItemQuantityButton = ({ cartItemId, quantity }: Props) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div className="flex flex-row gap-x-1 2xl:p-2 2xl:gap-x-2 items-center border-1 border-white/80 px-[0.5px] rounded-full">
      <button
        onClick={() => {
          decreaseQuantity(cartItemId);
        }}
        className="pl-2 xl:pl-4 2xl:pl-4 sm:text-lg 2xl:text-xl cursor-pointer"
      >
        -
      </button>
      <span className="px-1 text-xs sm:text-lg 2xl:text-xl">{quantity}</span>
      <button
        onClick={() => {
          increaseQuantity(cartItemId);
        }}
        className="pr-2 xl:pr-4 2xl:pr-4 sm:text-lg 2xl:text-xl cursor-pointer"
      >
        +
      </button>
    </div>
  );
};
