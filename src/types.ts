export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes: Size[];
};

export type Size = {
  name: string;
};
