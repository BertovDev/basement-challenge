"use client";
import React, { useEffect, useRef } from "react";
import "../app/globals.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
type Props = {
  masterTl: gsap.core.Timeline;
};

export default function Hero({ masterTl }: Props) {
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    gsap.set(".basement-title, .supply-title", { opacity: 1 });
    const split = SplitText.create(".basement-title, .supply-title", {
      type: "chars",
    });
    const split2 = SplitText.create(".supply-title", {
      type: "chars",
    });

    masterTl.from(split.chars, {
      opacity: 0,
      xPercent: 0,
      x: 0,
      duration: 0.4,
      ease: "power3.out",
      stagger: {
        each: 0.1,
        from: "start",
      },
    });

    masterTl.to(
      split2.chars,
      {
        duration: 0.2,
        color: "black",
        textShadow: "-2px 0px white, 0 2px white, 2px 0px white, 0 -2px white",
        ease: "power2.out",
        stagger: {
          each: 0.1,
          from: "start",
        },
      },
      "-=0.5"
    );

    masterTl
      .to(".est-text, .year-text, .year-k-char", {
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(".year-k-char", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.2,
        ease: "back.inOut",
      });
  }, []);

  return (
    <section
      id="hero"
      className="hero-text flex-none px-6 md:px-12 text-center mt-6 md:mt-14 flex flex-col items-center justify-center pointer-events-none"
    >
      <h1 className="opacity-0 basement-title uppercase text-[14.7vw] whitespace-nowrap leading-[0.8]">
        Basement
      </h1>
      <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6  justify-center ">
        <div className="opacity-0 est-text rounded-[50%] text-[1.4vw] border-1 border-white py-2 w-[10vw] max-w-36 flex items-center justify-center ">
          EST
        </div>
        <h2 className="opacity-0 supply-title uppercase text-[16vw] whitespace-nowrap leading-[0.9] ">
          Supply
        </h2>
        <div className="opacity-0 year-text rounded-[50%] text-[1.4vw] border-1 border-white py-2 w-[10vw] max-w-36 flex items-center justify-center  ">
          2 <span className="year-k-char">K</span> 22
        </div>
      </div>
    </section>
  );
}
