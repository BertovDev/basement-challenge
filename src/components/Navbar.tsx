import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex justify-between  items-center py-6 px-6 md:px-12 ">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="Logo" width={192} height={192} />
      </Link>
      <Image
        className="hidden md:block"
        src="/hd-4k.svg"
        alt="HD 4K"
        width={284}
        height={284}
      />
      <button className="bg-black uppercase text-white text-lg px-12 py-2 text-center rounded-full border border-white">
        Cart
      </button>
    </div>
  );
}
