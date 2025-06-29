"use client";
import React, { useEffect } from "react";
import mockData from "../../products/data.json";
import ProductItem from "./ProductItem";

type Props = {
  masterTl: gsap.core.Timeline;
};

export default function Products({ masterTl }: Props) {
  useEffect(() => {
    masterTl.to(
      ".items-container",
      {
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="grow px-6 md:px-12 flex flex-col items-center justify-between mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-container opacity-0">
        {mockData.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
