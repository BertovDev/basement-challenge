import React from "react";
import Image from "next/image";
import { CartItemType } from "@/types";
import SizeSelector from "./SizeSelector";
import { CardItemQuantityButton } from "./CardItemQuantityButton";

type Props = {
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  return (
    <div className="flex border-1 p-2 md:p-3 w-full gap-x-4">
      <div className="relative w-2/6 bg-gradient-to-b from-black to-[#1f1f1f] aspect-square">
        <Image
          className="object-contain"
          src={item.product.image}
          alt="Product Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex w-4/6 p-1 md:p-0 2xl:p-3  flex-col justify-evenly sm:justify-end gap-y-2 sm:gap-y-5  lg:justify-between ">
        {/* Details */}
        <div className="flex flex-col gap-y-1 sm:gap-y-2 lg:gap-y-0 xl:gap-y-1 justify-start items-start text-start ">
          <h3 className="text-base sm:text-2xl xl:text-4xl 2xl:text-4xl uppercase">
            {item.product.name}
          </h3>
          <p className="text-xs sm:text-lg xl:text-xl 2xl:text-3xl text-white/60">
            {item.product.description}
          </p>
        </div>
        <div className="flex flex-col  gap-y-3 sm:gap-y-4 lg:gap-y-1">
          {/* Quantity */}
          <div className="flex flex-row gap-x-3 2xl:gap-x-6 items-center justify-start">
            <p className="text-xs sm:text-2xl 2xl:text-3xl uppercase">
              Quantity:
            </p>
            <CardItemQuantityButton
              cartItemId={item.id}
              quantity={item.quantity}
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-y-3 lg:gap-y-5 ">
            {/* Size */}
            <div className="flex flex-row gap-x-4 lg:gap-x-2 2xl:gap-x-6 items-center lg:items-end justify-start">
              <p className="text-xs sm:text-lg xl:text-2xl 2xl:text-3xl uppercase pr-0 md:pr-2">
                Size:
              </p>
              <ul className="flex flex-row gap-x-1 md:gap-x-0 2xl:gap-x-4 items-center">
                {item.product.sizes.map((size) => (
                  <SizeSelector
                    key={size.name + item.id}
                    cartItemId={item.id}
                    size={size}
                    isSelected={size.name === item.sizeSelected}
                  />
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="flex flex-row gap-x-4  items-center lg:items-end justify-start">
              <span className="text-base sm:text-2xl md:text-xl xl:text-3xl 2xl:text-4xl">
                ${item.product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
