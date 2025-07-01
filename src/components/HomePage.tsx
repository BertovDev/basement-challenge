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
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    document.fonts.ready.then(() => {
      setFontLoaded(true);
    });
  }, []);

  return (
    <main>
      {fontLoaded ? (
        <>
          <Navbar masterTl={masterTl.current} />
          <CartWrapper />
          {isOpen && <CheckoutModal />}
          <Hero masterTl={masterTl.current} />
          <Marquee masterTl={masterTl.current} />
          <Products masterTl={masterTl.current} />
          <Footer />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
