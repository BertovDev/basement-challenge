import React from "react";
import "../app/globals.css";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="flex-none px-6 md:px-12 text-center mt-6 md:mt-14 flex flex-col items-center justify-center">
      <h1 className="uppercase text-[14.7vw] whitespace-nowrap leading-[0.8]">
        Basement
      </h1>
      <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6  justify-center ">
        <div className="rounded-[50%] text-[1.4vw] border-1 border-white py-2 w-[12vw] max-w-36 flex items-center justify-center ">
          EST
        </div>
        <h1
          className="uppercase text-[16vw] text-black leading-[0.9] 
        [text-shadow:-2px_0px_white,_0_2px_white,_2px_0px_white,_0_-2px_white]"
        >
          Supply
        </h1>
        <div className="rounded-[50%] text-[1.4vw] border-1 border-white py-2 w-[12vw] max-w-36 flex items-center justify-center">
          2K22
        </div>
      </div>
    </div>
  );
}
