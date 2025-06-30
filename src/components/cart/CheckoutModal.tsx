import React, { useEffect } from "react";
import { useCartStore, useCheckoutModalStore } from "@/store/cart";
import { CartItemType } from "@/types";
import Image from "next/image";
import CartItem from "./CartItem";
import ProductItem from "../products/ProductItem";

interface Props {}

export default function CheckoutModal({}: Props) {
  const { getTotalQuantity, checkout, items, getTotalPrice } = useCartStore();
  const { toggleCheckoutModal } = useCheckoutModalStore();

  const handleClose = () => {
    toggleCheckoutModal();
    checkout();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-xs z-100 flex items-center justify-center">
      <div className="px-6 py-6 bg-black z-100 border-1 border-white/20 rounded-[10px] flex items-center justify-center flex-col">
        <button
          onClick={handleClose}
          className="ml-auto relative -top-4 -right-2 text-white cursor-pointer hover:scale-120 transition-all duration-150"
        >
          x
        </button>
        <div className="text-center mb-2">
          <div className="text-lg font-bold text-white mb-1 tracking-wide">
            Basement Supply
          </div>
          <div className="text-xs text-gray-600 mb-2">Swag Receipt</div>
        </div>

        <div className="border-t border-dashed border-gray-400 my-4 w-full"></div>
        {/* Receipt Info */}
        <div className="space-y-1 mb-4 text-xs w-full">
          <div className="flex justify-between">
            <span className="text-gray-600">Receipt No: </span>
            <span className="font-bold text-white">SWA6</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="text-white">
              {new Date().toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time:</span>
            <span className="text-white">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Order Type:</span>
            <span className="text-white">{"Online"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Customer:</span>
            <span className="text-white">{"Lionel Messi"}</span>
          </div>
        </div>

        <div className="border-t border-dashed border-gray-400 my-2 w-full"></div>

        <div className="w-full flex flex-col gap-y-2">
          {items.map((item: CartItemType, index: number) => (
            <div key={item.id} className="mt-2 w-full flex flex-col gap-y-1">
              <div className="text-xs font-bold text-white mb-1">
                {item.product.name}
              </div>
              <div className="text-xs text-white mb-1">
                Size: {item.sizeSelected}
              </div>
              <div className="flex justify-between  text-xs">
                <span className="text-gray-600">
                  {item.quantity} x ${item.product.price}
                </span>
                <span className="font-bold text-white">
                  ${item.product.price * item.quantity}
                </span>
              </div>
              {index < items.length - 1 && (
                <div className="border-t border-dotted border-gray-300 mt-2 w-full"></div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-dashed border-gray-400 my-4 w-full"></div>

        <div className="space-y-1 mb-4 text-xs w-full">
          <div className="flex justify-between ">
            <span className="text-gray-600">Subtotal:</span>
            <span className="text-white">${getTotalPrice()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax:</span>
            <span className="text-white">Looking that great</span>
          </div>
          <div className="border-t border-solid border-gray-400 pt-1 mt-2">
            <div className="flex justify-between font-bold text-sm mt-2">
              <span className="text-white">TOTAL:</span>
              <span className="text-white">${getTotalPrice()}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-dashed border-gray-400 my-2"></div>

        <div className="text-center space-y-2">
          <div className="text-xs text-gray-600">
            Congrats, Now you really got Swag
          </div>
          <div className="text-xs text-gray-500">Basement Supply Co.</div>
          <div className="text-xs text-gray-500">
            Swag Street 1010, Buenos Aires, Argentina
          </div>
        </div>
      </div>
    </div>
  );
}
