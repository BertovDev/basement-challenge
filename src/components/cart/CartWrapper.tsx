"use client";
import React, { useEffect } from "react";
import { Cart } from "./Cart";
import { useCartStore } from "@/store/cart";
import gsap from "gsap";
import { useRef } from "react";

type Props = {};

export default function CartWrapper({}: Props) {
  const cartWrapperRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleCart } = useCartStore();

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleCart();
      }
    };

    const handkleClickOutside = (event: MouseEvent) => {
      if (event.target === cartWrapperRef.current) {
        toggleCart();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("click", handkleClickOutside);
      gsap.to(cartWrapperRef.current, { opacity: 1, display: "block" });
      gsap.fromTo(
        cartRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", handkleClickOutside);
      gsap.to(cartWrapperRef.current, { opacity: 0, display: "none" });
      gsap.to(cartRef.current, {
        opacity: 0,
        x: 100,
        duration: 0.5,
        ease: "power3.out",
      });
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", handkleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={cartWrapperRef}
      className="absolute inset-0 hidden bg-black/50 z-90 "
    >
      <Cart ref={cartRef} />
    </div>
  );
}
