"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Marquee() {
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const asterisk1Ref = useRef<HTMLDivElement>(null);
  const asterisk2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeContainerRef.current;
    const marquee = marqueeRef.current;
    const asterisk1 = asterisk1Ref.current;
    const asterisk2 = asterisk2Ref.current;
    if (!marqueeContainer || !marquee) return;

    // Animate infinite marquee
    let context = gsap.context(() => {
      const animate = () => {
        gsap.killTweensOf(marquee);
        // Get width of just one copy (half the total width)
        const singleWidth = marquee.scrollWidth / 2;
        gsap.fromTo(
          marquee,
          { x: 0 },
          {
            x: -singleWidth,
            duration: singleWidth / 90, // speed: 100px/sec
            ease: "linear",
            repeat: -1,
            modifiers: {
              x: (x) => `${parseFloat(x) % -singleWidth}px`,
            },
          }
        );
      };
      animate();
      window.addEventListener("resize", animate);
      return () => window.removeEventListener("resize", animate);
    }, marqueeContainer);

    // Animate asterisks rotation
    if (asterisk1) {
      gsap.to(asterisk1, {
        rotate: 360,
        duration: 9,
        ease: "linear",
        repeat: -1,
      });
    }
    if (asterisk2) {
      gsap.to(asterisk2, {
        rotate: -360,
        duration: 9,
        ease: "linear",
        repeat: -1,
      });
    }

    return () => {
      context.revert();
    };
  }, []);

  const marqueeText = Array(6)
    .fill(" — A man can’t have enough basement swag")
    .join(" ");

  return (
    <div className="flex-none relative  mt-4 md:mt-0 border-y-2 py-1 md:py-4 w-full">
      <div className="max-w-screen hidden md:flex relative mx-auto z-100">
        <div
          className="absolute -bottom-10 right-10 lg:right-32"
          ref={asterisk1Ref}
        >
          <Image
            className="w-32 lg:w-full pointer-none"
            src="/asterisk.svg"
            alt="asterisk1"
            width={180}
            height={180}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className="absolute -bottom-20 left-10 lg:left-32"
          ref={asterisk2Ref}
        >
          <Image
            className="w-32 lg:w-full pointer-none"
            src="/asterisk.svg"
            alt="asterisk2"
            width={180}
            height={180}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div
        className="overflow-hidden w-full"
        ref={marqueeContainerRef}
        aria-label="Marquee Swag Text"
        tabIndex={0}
      >
        <div className="whitespace-nowrap flex py-0" ref={marqueeRef}>
          <p className="sm:text-3xl text-lg select-none">{marqueeText}</p>
          <p className="sm:text-3xl text-lg select-none" aria-hidden="true">
            {marqueeText}
          </p>
        </div>
      </div>
    </div>
  );
}
