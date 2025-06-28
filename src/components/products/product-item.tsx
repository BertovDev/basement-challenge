import React from "react";
import { Product } from "../../types";
import Image from "next/image";

type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#1f1f1f] hover:cursor-pointer group mb-12">
      <div className="absolute opacity-0 group-hover:block  group-hover:duration-500 group-hover:opacity-100 group-hover:z-10 group-hover:transition-all transition-all duration-300">
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
        loading="lazy"
      />
      <div className="flex flex-row justify-between w-full bg-black py-4 border-t-2 border-white">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>
    </div>
  );
}
