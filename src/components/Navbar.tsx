"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import gsap from "gsap";
import { useTextSwapHover } from "@/hooks/useTextSwapHover";
import { SplitText } from "gsap/SplitText";

type Props = {
  masterTl: gsap.core.Timeline;
};

export default function Navbar({ masterTl }: Props) {
  const hasAnimated = useRef(false);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const navImageRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { toggleCart, getTotalQuantity } = useCartStore();

  useTextSwapHover(cartButtonRef, 0.4);
  useTextSwapHover(logoRef, 0.3);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const splitLogo = SplitText.create(".basement-logo", {
      type: "chars",
    });

    gsap.set(".basement-logo", {
      opacity: 1,
    });

    gsap.set([splitLogo.chars], {
      opacity: 0,
    });

    masterTl.to(
      splitLogo.chars,
      {
        opacity: 1,
        xPercent: 0,
        x: 0,
        duration: 0.3,
        ease: "power3.out",
        stagger: {
          each: 0.1,
          from: "start",
        },
      },
      "-=0.2"
    );

    masterTl.to(
      ".navbar-item",
      {
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        stagger: {
          each: 0.3,
          from: "start",
        },
      },
      "-=0.3"
    );
  }, []);

  return (
    <div className="navbar sticky top-0 z-100 bg-black/90 mix-blend-normal backdrop-blur-lg  flex justify-between  items-center py-6 px-6 md:px-12 ">
      <Link className="" href={"/"}>
        <div
          className="relative  overflow-hidden h-10 w-52 hidden md:block"
          ref={logoRef}
        >
          <span className="absolute opacity-0  inset-0 flex items-center justify-start top-text text-4xl basement-logo">
            basement.
          </span>
          <span className="opacity-0 navbar-item absolute inset-0 flex items-center justify-start bottom-text text-4xl">
            swagg
          </span>
        </div>

        <div className="relative  overflow-hidden h-10 w-52 block md:hidden">
          <span className="absolute opacity-0  inset-0 flex items-center justify-start text-4xl basement-logo">
            b.
          </span>
        </div>

        {/* <Image
          className="hidden md:block"
          src="/logo.svg"
          alt="Logo"
          width={192}
          height={192}
          loading="lazy"
        /> */}
        {/* <Image
          className="block md:hidden"
          src="/logo_mobile.svg"
          alt="Logo"
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
        /> */}
      </Link>
      <Image
        className="hidden md:block opacity-0 navbar-item"
        src="/hd-4k.svg"
        alt="HD 4K"
        width={284}
        height={284}
        ref={navImageRef}
      />
      <button
        ref={cartButtonRef}
        onClick={toggleCart}
        className="bg-black opacity-0 navbar-item uppercase cursor-pointer text-white text-sm md:text-lg md:px-12 px-6 py-2 text-center rounded-full border border-white relative h-10 w-32 overflow-hidden"
      >
        <span className="absolute inset-0 flex items-center justify-center top-text">
          {" "}
          Cart
          <span className="ml-1">({getTotalQuantity()})</span>
        </span>

        <span className="absolute inset-0 flex items-center justify-center bottom-text ">
          {" "}
          Cart
          <span className="ml-1">({getTotalQuantity()})</span>
        </span>
      </button>
    </div>
  );
}
