"use client";
import React, { useState } from "react";
import { Product } from "../../types";
import Image from "next/image";
import { useCartStore } from "@/store/cart";

type Props = {
  product: Product;
};

let lastInputWasKeyboard = false;
if (typeof window !== "undefined") {
  window.addEventListener("keydown", () => {
    lastInputWasKeyboard = true;
  });
  window.addEventListener("mousedown", () => {
    lastInputWasKeyboard = false;
  });
  window.addEventListener("pointerdown", () => {
    lastInputWasKeyboard = false;
  });
}

const ProductItem = React.forwardRef<HTMLDivElement, Props>(
  ({ product }, ref) => {
    const { toggleCart, addToCart } = useCartStore();
    const [showFocusRing, setShowFocusRing] = useState(false);

    const handleClick = () => {
      addToCart(product);
      toggleCart();
    };

    return (
      <div
        ref={ref}
        className={`product-item flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#1f1f1f] hover:cursor-pointer group mb-12 outline-none transition-shadow ${
          showFocusRing ? "ring-2 ring-white/40 shadow-lg" : ""
        }`}
        tabIndex={0}
        aria-label={`Product: ${product.name}, Price: $${product.price}`}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
        onFocus={() => {
          setShowFocusRing(lastInputWasKeyboard);
        }}
        onBlur={() => setShowFocusRing(false)}
        role="button"
      >
        <div className="relative">
          <div className="absolute opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  group-hover:block  group-hover:duration-500 group-hover:opacity-100 group-hover:z-10 group-hover:transition-all transition-all duration-300">
            <Image
              src={"/products/add-to-cart.svg"}
              alt="Add to cart"
              width={250}
              height={250}
              loading="lazy"
            />
          </div>
          <Image
            className="group-hover:scale-110 transition-all duration-500 z-0 group-hover:opacity-50 "
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-row justify-between w-full bg-black py-4 border-t-2 border-white">
          <span>{product.name}</span>
          <span>${product.price}</span>
        </div>
      </div>
    );
  }
);

ProductItem.displayName = "ProductItem";

export default ProductItem;
