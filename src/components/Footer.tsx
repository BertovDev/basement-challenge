import Image from "next/image";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="flex-none py-6 px-6 md:px-12 flex flex-col items-end leading-[0.9] ">
      <div className="flex flex-row items-center justify-end gap-x-10">
        <Image
          className="w-[15vw]"
          src="/footer_figure.svg"
          alt="Logo"
          width={312}
          height={312}
        />
        <p className="text-[15vw] ">WEAR</p>
      </div>
      <p className="uppercase text-[15.4vw] text-black [text-shadow:-2px_0px_white,_0_2px_white,_2px_0px_white,_0_-2px_white]">
        EVERYDAY
      </p>
    </div>
  );
}
