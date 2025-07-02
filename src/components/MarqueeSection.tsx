"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import MarqueeComponent from "./Marquee";

type Props = {
  masterTl: gsap.core.Timeline;
};
const marqueeText = "A man can’t have enough basement swag";
export default function MarqueeSection({ masterTl }: Props) {
  const asterisk1Ref = useRef<HTMLDivElement>(null);
  const asterisk2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const asterisk1 = asterisk1Ref.current;
    const asterisk2 = asterisk2Ref.current;

    masterTl
      .to(
        ".marquee-container",
        {
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=1"
      )
      .to(
        [asterisk1, asterisk2],
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

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
  }, []);

  return (
    <section
      id="marquee"
      className="flex-none relative  mt-4 md:mt-0 border-y-2 py-1 md:py-4 w-full opacity-0 marquee-container"
    >
      <div className="max-w-screen hidden md:flex relative mx-auto z-80">
        <div
          className="absolute -bottom-2 right-10 lg:right-32 opacity-0 scale-0"
          ref={asterisk1Ref}
          onPointerEnter={() => gsap.to(asterisk1Ref.current, { scale: 1.2 })}
          onPointerLeave={() => gsap.to(asterisk1Ref.current, { scale: 1 })}
        >
          <Image
            className="w-32 lg:w-full pointer-none "
            src="/asterisk.svg"
            alt="asterisk1"
            width={180}
            height={180}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className="absolute -bottom-20 left-10 lg:left-32 opacity-0 scale-0"
          ref={asterisk2Ref}
          onPointerEnter={() => gsap.to(asterisk2Ref.current, { scale: 1.2 })}
          onPointerLeave={() => gsap.to(asterisk2Ref.current, { scale: 1 })}
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
      <MarqueeComponent
        marqueeText={marqueeText}
        textStyle="sm:text-3xl text-lg"
      />
    </section>
  );
}
