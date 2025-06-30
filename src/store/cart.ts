import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItemType, Product } from "../types";

type CartState = {
  items: CartItemType[];
  isOpen: boolean;
  totalQuantity: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  toggleCart: () => void;
  setSizeSelected: (size: string, cartItemId: number) => void;
  getTotalQuantity: () => number;
  increaseQuantity: (cartItemId: number) => void;
  decreaseQuantity: (cartItemId: number) => void;
  getTotalPrice: () => number;
  checkout: () => void;
};

type CheckoutModalState = {
  isOpen: boolean;
  toggleCheckoutModal: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      totalQuantity: 0,
      totalPrice: 0,
      toggleCart: () => set((state: CartState) => ({ isOpen: !state.isOpen })),
      getTotalQuantity: () =>
        get().items.reduce((acc, item) => acc + item.quantity, 0),
      addToCart: (product: Product) =>
        set((state: CartState) => ({
          items: [
            ...state.items,
            {
              id: state.items.length + 1,
              product,
              quantity: 1,
              sizeSelected: product.sizes[0].name,
            },
          ],
        })),
      setSizeSelected: (size: string, cartItemId: number) =>
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.id === cartItemId ? { ...item, sizeSelected: size } : item
          ),
        })),
      increaseQuantity: (cartItemId: number) =>
        set((state: CartState) => ({
          items: state.items.map((item) =>
            item.id === cartItemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      decreaseQuantity: (cartItemId: number) => {
        set((state: CartState) => {
          const item = state.items.find((item) => item.id === cartItemId);
          if (item) {
            if (item.quantity > 1) {
              return {
                items: state.items.map((item) =>
                  item.id === cartItemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
              };
            } else {
              return {
                items: state.items.filter((item) => item.id !== cartItemId),
              };
            }
          }
          return state;
        });
      },
      getTotalPrice: () =>
        get().items.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        ),
      checkout: () => {
        set(() => ({ items: [] }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export const useCheckoutModalStore = create<CheckoutModalState>()((set) => ({
  isOpen: false,
  toggleCheckoutModal: () =>
    set((state: CheckoutModalState) => ({ isOpen: !state.isOpen })),
}));
