import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  marqueeText: string;
  textStyle?: string;
};

export default function Marquee({ marqueeText, textStyle }: Props) {
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeContainerRef.current;
    const marquee = marqueeRef.current;

    if (!marqueeContainer || !marquee) return;

    // Animate infinite marquee
    const context = gsap.context(() => {
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

    return () => {
      context.revert();
    };
  }, []);

  const multiMarqueeText = Array(6).fill(marqueeText).join(" ");

  return (
    <div
      className="overflow-hidden w-full relative"
      ref={marqueeContainerRef}
      aria-label="Marquee Swag Text"
    >
      <div className="absolute left-0 top-0 w-32 h-10 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-10 bg-gradient-to-l from-black to-transparent z-10"></div>
      <div className="whitespace-nowrap flex py-0" ref={marqueeRef}>
        <p className={`${textStyle} select-none`}>{multiMarqueeText}</p>
        <p className={`${textStyle} select-none`} aria-hidden="true">
          {multiMarqueeText}
        </p>
      </div>
    </div>
  );
}
