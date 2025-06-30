export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes: Size[];
};

export type Size = {
  name: string;
};

export type CartItemType = {
  id: number;
  product: Product;
  quantity: number;
  sizeSelected: string;
};
