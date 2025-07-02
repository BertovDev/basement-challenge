import Image from "next/image";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import MarqueeComponent from "./Marquee";
gsap.registerPlugin(ScrollTrigger, SplitText);

function scrollToProducts() {
  const productsSection = document.getElementById("products");
  if (!productsSection) return;
  window.scrollTo({
    top: productsSection.offsetTop - 120,
    behavior: "smooth",
  });
  productsSection.focus();
}

export default function Footer() {
  const figureRef = useRef<HTMLImageElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(figureRef.current, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "sine.inOut",
      });

      const split = SplitText.create(".wear-text", {
        type: "chars, words",
        mask: "chars",
      });
      gsap.set(split.chars, {
        opacity: 0,
        yPercent: "-150",
        rotation: "random([-15, 15])",
      });

      const split2 = SplitText.create(".everyday-text", {
        type: "chars, words",
        mask: "chars",
      });
      gsap.set(split2.chars, {
        opacity: 0,
        xPercent: "-150",
        rotation: "random([-15, 15])",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      tl.to(split.chars, {
        opacity: 1,
        yPercent: 0,
        rotation: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.02,
          from: "random",
        },
      });
      tl.to(
        split2.chars,
        {
          opacity: 1,
          xPercent: 0,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
          stagger: {
            each: 0.04,
            from: "start",
          },
        },
        "-=0.5"
      )
        .to(
          figureRef.current,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          ".marquee-wrapper",
          {
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.8"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="flex-none pt-4 px-2 2xl:px-6 flex flex-col items-end leading-[1] overflow-hidden focus:outline-none"
      tabIndex={0}
    >
      <div className="flex flex-row items-center justify-end gap-x-10 will-change-transform">
        <Image
          className="w-[20vw] opacity-0"
          src="/footer_figure.svg"
          ref={figureRef}
          alt="Logo"
          width={312}
          height={312}
          loading="lazy"
          decoding="async"
        />
        <h3 className=" text-[15vw] will-change-transform letter-spacing-[0.1em] wear-text whitespace-nowrap">
          WEAR
        </h3>
      </div>
      <h4 className=" uppercase text-[15.4vw] text-outline-white whitespace-nowrap will-change-transform letter-spacing-[0.1em] everyday-text">
        EVERYDAY
      </h4>
      <div
        onClick={scrollToProducts}
        className="w-full cursor-pointer opacity-0 marquee-wrapper"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            scrollToProducts();
          }
        }}
      >
        <MarqueeComponent
          marqueeText=" — 50% OFF — Only on Friday Prod Deploys"
          textStyle="text-xl sm:text-2xl uppercase text-white/40"
        />
      </div>
    </footer>
  );
}
