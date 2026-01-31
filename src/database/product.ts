interface ProductAttribute {
  name: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  sale_price: number | null;
  currency: string;
  in_stock: boolean;
  rating: number;
  reviews_count: number;
  image_link: string;
  attributes: ProductAttribute[];
  is_installments_available: boolean;
  is_original: boolean;
  is_best_price_guaranteed: boolean;
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Product 1",
    brand: "SvetoCopy",
    category: "Kanselyariya mollari",
    price: 10.5,
    sale_price: 9.0,
    currency: "UZS",
    in_stock: true,
    rating: 4.5,
    reviews_count: 150,
    image_link: "/images/product1.jpg",
    attributes: [
      { name: "Color", value: "White" },
      { name: "Size", value: "A4" },
    ],
    is_installments_available: true,
    is_original: true,
    is_best_price_guaranteed: true,
  },
];
