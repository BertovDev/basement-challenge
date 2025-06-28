import React from "react";
import { Product } from "../../types";
import mockData from "../../products/data.json";
import Image from "next/image";
import ProductItem from "./product-item";

type Props = {};

export default function Products({}: Props) {
  return (
    <div className="grow px-6 md:px-12 flex flex-col items-center justify-between mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {mockData.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
