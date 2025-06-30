"use client";
import React, { useEffect, useRef } from "react";
import CartItem from "@/components/cart/CartItem";
import { useCartStore } from "@/store/cart";
import { forwardRef } from "react";
import { useTextSwapHover } from "@/hooks/useTextSwapHover";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useCheckoutModalStore } from "@/store/cart";

const Cart = forwardRef<HTMLDivElement>((_, ref) => {
  const { getTotalPrice, toggleCart, items } = useCartStore();
  const { toggleCheckoutModal } = useCheckoutModalStore();
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const checkoutButtonRef = useRef<HTMLButtonElement>(null);
  useTextSwapHover(cartButtonRef);

  useEffect(() => {
    const split = SplitText.create(".checkout-button", {
      type: "chars",
    });
    const button = checkoutButtonRef.current;
    if (!button) return;

    const tl = gsap.timeline({ paused: true });
    tl.to(split.chars, {
      color: "white",
      textShadow: "-2px 0px black, 0 2px black, 2px 0px black, 0 -2px black",
      duration: 0.2,
      ease: "power2.out",
      stagger: {
        each: 0.05,
        from: "center",
      },
    });

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    button.addEventListener("mouseenter", onEnter);
    button.addEventListener("mouseleave", onLeave);

    return () => {
      button.removeEventListener("mouseenter", onEnter);
      button.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const handleCheckout = () => {
    toggleCart();
    toggleCheckoutModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cart"
      ref={ref}
      className="fixed right-0 top-0 w-full h-full lg:w-[56vw] lg:h-4/5 z-100 bg-black
     border-1 border-t-0 border-r-0 border-white/80 "
    >
      <div className="flex flex-col pt-6 2xl:pt-8 px-6 lg:px-0 text-center w-full h-full ">
        <div className="flex flex-col h-full">
          <div className="flex-none ml-auto mb-6 2xl:mb-8 lg:px-6 2xl:px-12  xl:text-2xl 2xl:text-3xl">
            <button
              onClick={toggleCart}
              ref={cartButtonRef}
              className="cursor-pointer uppercase relative h-10 w-40 overflow-hidden"
            >
              <span className="absolute inset-0 flex  items-center justify-center top-text">
                → Close
              </span>
              <span className="absolute inset-0 flex items-center justify-center bottom-text">
                → Close
              </span>
            </button>
          </div>
          <div className="flex-none flex flex-col lg:flex-row items-center justify-center">
            <span className="text-[27vw] md:text-[24vw] lg:text-[8.2vw] leading-[0.9]">
              YOUR
            </span>
            <span className="text-[27vw] md:text-[24vw] lg:text-[8.2vw]  leading-[0.9] text-outline-white">
              CART
            </span>
          </div>
          <div className="grow flex items-start justify-center pt-4 px-2 lg:px-6 2xl:px-12 overflow-auto">
            <div className="text-center w-full flex flex-col justify-center gap-y-4 mb-2 overflow-x-hidden">
              {items.length > 0 ? (
                items.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <p
                    className="text-2xl uppercase text-center text-white/60"
                    tabIndex={0}
                    aria-label="Cart is empty"
                  >
                    Cart is empty
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid flex-none grid-cols-3 border-t-1 border-white/80 ">
            <div className="col-span-2 px-8 py-6 flex gap-x-4 items-center justify-start border-r-1 border-white/80">
              <span className="text-xl lg:text-2xl xl:text-5xl">TOTAL</span>
              <span className="text-xl lg:text-2xl xl:text-5xl">
                ${getTotalPrice()}
              </span>
            </div>
            <div className="col-span-1 flex  items-center justify-center">
              <button
                ref={checkoutButtonRef}
                className="cursor-pointer text-xl lg:text-2xl tracking-wider xl:text-4xl 2xl:text-5xl text-outline-white checkout-button disabled:cursor-not-allowed"
                onClick={handleCheckout}
                disabled={items.length === 0}
                aria-label="Checkout"
              >
                CHECKOUT
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex-none  lg:hidden flex flex-col items-center justify-center ">
            <div className="w-full  py-2 flex gap-x-4 items-center justify-between border-b-1 border-white/80">
              <span className="text-xl lg:text-2xl xl:text-4xl">TOTAL</span>
              <span className="text-xl lg:text-2xl xl:text-4xl">
                ${getTotalPrice()}
              </span>
            </div>
            <div className="w-full py-2 flex  items-center justify-center">
              <button
                className="cursor-pointer text-4xl xs:text-5xl md:text-7xl pt-2 tracking-wider text-outline-white "
                onClick={handleCheckout}
                disabled={items.length === 0}
                aria-label="Checkout"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Cart.displayName = "Cart";
export default Cart;
