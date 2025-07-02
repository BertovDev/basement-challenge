"use client";
import React, { useEffect, useRef } from "react";
import Cart from "./Cart";
import { useCartStore, lastFocusRef, setLastFocusRef } from "@/store/cart";
import gsap from "gsap";

export default function CartWrapper() {
  const cartWrapperRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleCart } = useCartStore();

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleCart();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === cartWrapperRef.current) {
        toggleCart();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("click", handleClickOutside);
      gsap.to(cartWrapperRef.current, {
        opacity: 1,
        display: "block",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.fromTo(
        cartRef.current,
        { opacity: 0, xPercent: 100 },
        {
          opacity: 1,
          xPercent: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.1,
          onComplete: () => {
            if (!document.activeElement) return;
            setLastFocusRef(document.activeElement as HTMLElement);
            cartRef.current?.focus();
          },
        }
      );
    } else {
      gsap.to(cartRef.current, {
        opacity: 0,
        xPercent: 100,
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.to(cartWrapperRef.current, {
        opacity: 0,
        display: "none",
        duration: 0.5,
        ease: "power2.in",
        delay: 0.3,
        onComplete: () => {
          if (!lastFocusRef) return;
          lastFocusRef.focus();
        },
      });
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={cartWrapperRef}
      className="fixed inset-0 hidden w-full h-full bg-black/50 z-100"
    >
      <Cart ref={cartRef} />
    </div>
  );
}
