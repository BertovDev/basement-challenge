"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MarqueeSection from "./MarqueeSection";
import Footer from "./Footer";
import Products from "./products/Products";
import CartWrapper from "./cart/CartWrapper";
import CheckoutModal from "./cart/CheckoutModal";
import Loader from "./Loader";

import { useCheckoutModalStore } from "@/store/cart";
import gsap from "gsap";

export default function HomePage() {
  const masterTl = useRef(gsap.timeline());
  const { isOpen } = useCheckoutModalStore();
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return (
    <main>
      {fontsLoaded ? (
        <>
          <Navbar masterTl={masterTl.current} />
          <CartWrapper />
          {isOpen && <CheckoutModal />}
          <Hero masterTl={masterTl.current} />
          <MarqueeSection masterTl={masterTl.current} />
          <Products masterTl={masterTl.current} />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}
