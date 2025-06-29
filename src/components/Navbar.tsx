"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";

export default function Navbar() {
  const { toggleCart, getTotalQuantity } = useCartStore();

  return (
    <div className="flex justify-between  items-center py-6 px-6 md:px-12 ">
      <Link href={"/"}>
        <Image
          className="hidden md:block"
          src="/logo.svg"
          alt="Logo"
          width={192}
          height={192}
          loading="lazy"
        />
        <Image
          className="block md:hidden"
          src="/logo_mobile.svg"
          alt="Logo"
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
        />
      </Link>
      <Image
        className="hidden md:block"
        src="/hd-4k.svg"
        alt="HD 4K"
        width={284}
        height={284}
      />
      <button
        onClick={toggleCart}
        className="bg-black uppercase cursor-pointer text-white text-sm md:text-lg md:px-12 px-6 py-2 text-center rounded-full border border-white"
      >
        Cart
        <span className="ml-1">({getTotalQuantity()})</span>
      </button>
    </div>
  );
}
