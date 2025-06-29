import { Size } from "@/types";
import React from "react";
import { useCartStore } from "@/store/cart";

type Props = {
  isSelected: boolean;
  size: Size;
  cartItemId: number;
};

export default function SizeSelector({ size, isSelected, cartItemId }: Props) {
  const { setSizeSelected } = useCartStore();
  return (
    <li
      onClick={() => setSizeSelected(size.name, cartItemId)}
      key={size.name}
      className={`text-center text-xs sm:text-lg xl:text-xl 2xl:text-2xl cursor-pointer ${
        isSelected ? "border-1 border-white/80 px-[0.5px] rounded-full" : ""
      }`}
    >
      <span className="p-1 sm:p-2 ">{size.name}</span>
    </li>
  );
}
