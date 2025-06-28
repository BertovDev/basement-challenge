import React from "react";
import Image from "next/image";

type Props = {};

export default function CartItem({}: Props) {
  return (
    <div className="flex border-1 p-2 md:p-3 w-full gap-x-4">
      <div className="relative w-2/6 bg-gradient-to-b from-black to-[#1f1f1f] aspect-square">
        <Image
          className="object-contain"
          src="/products/shirt.png"
          alt="product"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex w-4/6 p-1 md:p-0 2xl:p-3  flex-col justify-evenly sm:justify-end gap-y-2 sm:gap-y-5  lg:justify-between ">
        {/* Details */}
        <div className="flex flex-col gap-y-1 sm:gap-y-2 lg:gap-y-0 xl:gap-y-2 justify-start items-start text-start ">
          <h3 className="text-base sm:text-2xl xl:text-4xl 2xl:text-7xl uppercase">
            Black t-shirt
          </h3>
          <p className="text-xs sm:text-lg xl:text-xl 2xl:text-4xl text-white/60">
            Unisex Basic Softstyle T-Shirt
          </p>
        </div>
        <div className="flex flex-col  gap-y-3 sm:gap-y-4 lg:gap-y-1">
          {/* Quantity */}
          <div className="flex flex-row gap-x-3 2xl:gap-x-6 items-center justify-start">
            <p className="text-xs sm:text-2xl 2xl:text-4xl uppercase">
              Quantity:
            </p>
            <div className="flex flex-row gap-x-1 2xl:p-2 2xl:gap-x-4 items-center border-1 border-white/80 px-[0.5px] rounded-full">
              <button className="pl-2 xl:pl-4 2xl:pl-6  sm:text-lg 2xl:text-4xl">
                -
              </button>
              <span className="px-1 text-xs sm:text-lg 2xl:text-4xl">1</span>
              <button className="pr-2 xl:pr-4 2xl:pr-6 sm:text-lg 2xl:text-4xl">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-y-3 lg:gap-y-5 ">
            {/* Size */}
            <div className="flex flex-row gap-x-4 lg:gap-x-2 2xl:gap-x-6 items-center lg:items-end justify-start">
              <p className="text-xs sm:text-lg xl:text-2xl 2xl:text-4xl uppercase pr-0 md:pr-2">
                Size:
              </p>
              <ul className="flex flex-row gap-x-1 md:gap-x-0 2xl:gap-x-4 items-center">
                <li className="text-center text-xs sm:text-lg xl:text-xl 2xl:text-4xl border-1 border-white/80 rounded-full">
                  <span className="p-1 sm:p-2 ">S</span>
                </li>
                <li className="text-center text-xs xl:text-xl  sm:text-lg 2xl:text-4xl">
                  <span className="p-1 sm:p-2 ">M</span>
                </li>
                <li className="text-center text-xs xl:text-xl  sm:text-lg 2xl:text-4xl">
                  <span className="p-1 sm:p-2 ">L</span>
                </li>
                <li className="text-center text-xs xl:text-xl  sm:text-lg 2xl:text-4xl">
                  <span className="p-1 sm:p-2 ">XL</span>
                </li>
              </ul>
            </div>

            {/* Price */}
            <div className="flex flex-row gap-x-4  items-center lg:items-end justify-start">
              <span className="text-base sm:text-2xl md:text-xl xl:text-3xl 2xl:text-6xl">
                $7,95
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex w-4/6 flex-col justify-center gap-y-3 lg:gap-y-0 lg:justify-between px-2">
        <div className="flex flex-col items-start">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-5xl uppercase">
            Black t-shirt
          </h3>
          <p className="text-sm sm:text-xl md:text-2xl lg:text-2xl text-start md:tracking-wider  text-white/50">
            remera re rere rrrere
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  gap-y-2 lg:gap-x-2 items-start lg:items-end justify-between w-full">
          <div className="flex flex-col gap-y-2 items-start justify-center">
            <div className="flex flex-row gap-x-4 items-center justify-center">
              <span className="text-sm sm:text-xl lg:text-2xl uppercase">
                Quantity:
              </span>
              <div className="flex flex-row gap-x-1 lg:gap-x-2 items-center justify-center border-1 border-white/80 px-2 rounded-2xl">
                <button>-</button>
                <span className="px-1 text-sm">1</span>
                <button>+</button>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 items-center w-full">
              <span className="text-sm sm:text-xl lg:text-2xl">SIZE:</span>
              <ul className="flex flex-row lg:gap-x-2 items-center justify-center text-center">
                <li className="text-sm sm:text-xl lg:text-2xl px-2 md:px-3 md:py-1 py-[0.5px] border-1 border-white/80 rounded-full">
                  S
                </li>
                <li className="text-sm sm:text-xl lg:text-2xl px-2 md:px-3 md:py-1 py-[0.5px]  ">
                  M
                </li>
                <li className="text-sm md:text-xl lg:text-2xl px-2 md:px-3 md:py-1 py-[0.5px]  ">
                  L
                </li>
                <li className="text-sm md:text-xl lg:text-2xl px-2 md:px-3 md:py-1 py-[0.5px]  ">
                  XL
                </li>
              </ul>
            </div>
          </div>
          <span className="text-xl lg:text-3xl ">$7.95</span>
        </div>
      </div> */}
    </div>
  );
}
