import React, { useRef } from "react";
import { useCartStore } from "@/store/cart";
import { useTextSwapHover } from "@/hooks/useTextSwapHover";

type Props = {
  cartItemId: number;
  quantity: number;
};

export const CardItemQuantityButton = ({ cartItemId, quantity }: Props) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore();
  const minusButtonRef = useRef<HTMLButtonElement>(null);
  const plusButtonRef = useRef<HTMLButtonElement>(null);

  useTextSwapHover(minusButtonRef, 0.4);
  useTextSwapHover(plusButtonRef, 0.4);

  return (
    <div className="flex flex-row gap-x-1 2xl:p-2 2xl:gap-x-2 items-center border-1 border-white/80 px-[0.5px] rounded-full">
      <button
        onClick={() => {
          decreaseQuantity(cartItemId);
        }}
        ref={minusButtonRef}
        className="pl-2 xl:pl-4 2xl:pl-4 sm:text-lg 2xl:text-xl cursor-pointer relative h-5 w-5 overflow-hidden"
      >
        <span className="absolute inset-0 flex  items-center justify-center top-text">
          -
        </span>
        <span className="absolute inset-0 flex items-center justify-center bottom-text">
          -
        </span>
      </button>
      <span className="px-1 text-xs sm:text-lg 2xl:text-xl">{quantity}</span>
      <button
        onClick={() => {
          increaseQuantity(cartItemId);
        }}
        ref={plusButtonRef}
        className="pr-2 xl:pr-4 2xl:pr-4 sm:text-lg 2xl:text-xl cursor-pointer relative h-5 w-5 overflow-hidden"
      >
        <span className="absolute inset-0 flex  items-center justify-center top-text">
          +
        </span>
        <span className="absolute inset-0 flex items-center justify-center bottom-text">
          +
        </span>
      </button>
    </div>
  );
};
