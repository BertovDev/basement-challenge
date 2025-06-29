import React from "react";
import mockData from "../../products/data.json";
import ProductItem from "./ProductItem";

export default function Products() {
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
