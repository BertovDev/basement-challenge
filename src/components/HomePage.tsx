"use client";
import React, { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Footer from "./Footer";
import Products from "./products/Products";
import CartWrapper from "./cart/CartWrapper";
import CheckoutModal from "./cart/CheckoutModal";
import gsap from "gsap";
import { useCheckoutModalStore } from "@/store/cart";

export default function HomePage() {
  const masterTl = useRef(gsap.timeline());
  const { isOpen } = useCheckoutModalStore();

  return (
    <div>
      <Navbar masterTl={masterTl.current} />
      <CartWrapper />
      {isOpen && <CheckoutModal />}
      <div className="flex flex-col min-h-screen">
        <Hero masterTl={masterTl.current} />
        <Marquee masterTl={masterTl.current} />
        <Products masterTl={masterTl.current} />
        <Footer />
      </div>
    </div>
  );
}
