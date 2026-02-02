import axios from "axios";
import { ProductProps } from "@/types/product.type";

export const getProductsByCategory = async (categoryId: number) => {
  const response = await axios.get<ProductProps[]>(
    `/api/v1/catalog${categoryId}`,
  );
  return response.data;
};
