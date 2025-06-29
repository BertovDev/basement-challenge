"use client";
import React, { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Footer from "./Footer";
import Products from "./products/Products";
import CartWrapper from "./cart/CartWrapper";

import gsap from "gsap";

export default function HomePage() {
  const masterTl = useRef(gsap.timeline());

  return (
    <div>
      <Navbar masterTl={masterTl.current} />
      <CartWrapper />
      <div className="flex flex-col min-h-screen">
        <Hero masterTl={masterTl.current} />
        <Marquee masterTl={masterTl.current} />
        <Products masterTl={masterTl.current} />
        <Footer />
      </div>
    </div>
  );
}
