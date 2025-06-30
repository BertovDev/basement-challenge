import Image from "next/image";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";

export default function Footer() {
  const figureRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(figureRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="flex-none py-6 px-2 md:px-12 flex flex-col items-end leading-[0.9] ">
      <div className="flex flex-row items-center justify-end gap-x-10">
        <Image
          className="w-[15vw]"
          src="/footer_figure.svg"
          ref={figureRef}
          alt="Logo"
          width={312}
          height={312}
          loading="lazy"
          decoding="async"
        />
        <p className="text-[15vw] ">WEAR</p>
      </div>
      <p className="uppercase text-[15.4vw] text-outline-white">EVERYDAY</p>
    </div>
  );
}
