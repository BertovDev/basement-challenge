import React from "react";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen loader ">
      <div className="animate-pulse">
        <Image
          src="/logo_mobile.svg"
          alt="Loading asterisk"
          width={32}
          height={32}
          priority
        />
      </div>
    </div>
  );
}
