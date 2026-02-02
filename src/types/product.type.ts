export interface ProductCategoryProps {
  id: number;
  slug: string;
  name: string;
}

export interface ProductSpecifications {
  hajmi: string;
  turi: string;
  himoya_muddati: string;
  hid: string;
  ishlab_chiqarilgan: string;
}

export interface SellerProps {
  id: number;
  name: string;
  rating: number;
  verified: boolean;
}

export interface ShippingProps {
  free: boolean;
  estimatedDays: string;
  cost: number;
}

export interface ProductProps {
  id: number;
  slug: string;
  name: string;
  price: number;
  discountPrice: number;
  discountPriceUzumCard: number;
  discountPercentage: number;
  currency: string;
  monthlyPayment: number;
  installmentPeriod: number;
  isOriginal: boolean;
  hasArzonNarxKafolati: boolean;
  hasUzumKartaOffer: boolean;
  hasInstallment: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  soldCount: number;
  description: string;
  shortDescription: string;
  images: string[];
  specifications: ProductSpecifications;
  category: ProductCategoryProps;
  seller: SellerProps;
  shipping: ShippingProps;
}
