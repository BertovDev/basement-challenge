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
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setSizeSelected(size.name, cartItemId);
        }
      }}
      className={`text-center text-xs  focus:bg-zinc-800 sm:text-lg xl:text-xl 2xl:text-2xl cursor-pointer hover:bg-zinc-800 rounded-full transition-all duration-200 px-[0.5px] border-1 ${
        isSelected ? "border-white/80" : "border-transparent"
      }`}
    >
      <span className="p-1 sm:p-2 ">{size.name}</span>
    </li>
  );
}
