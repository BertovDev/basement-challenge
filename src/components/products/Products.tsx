"use client";
import React, { useEffect, useRef, useState, createRef } from "react";
import mockData from "../../products/data.json";
import ProductItem from "./ProductItem";
import gsap from "gsap";

type Props = {
  masterTl: gsap.core.Timeline;
};

export default function Products({ masterTl }: Props) {
  const itemsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLDivElement>(
      ".product-item",
      itemsContainer.current
    );
    gsap.set(items, { opacity: 0, y: 50 });

    masterTl
      .to(
        ".items-container",
        {
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(items, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        // stagger: {
        //   each: 0.2,
        //   from: "start",
        // },
        ease: "power3.out",
      });
  }, []);

  return (
    <section
      id="products"
      className="grow px-6 md:px-12 flex flex-col items-center justify-between mt-10"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-container opacity-0"
        ref={itemsContainer}
      >
        {mockData.map((product, idx) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
