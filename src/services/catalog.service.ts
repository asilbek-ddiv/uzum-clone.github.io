import axios from "axios";
import { CatalogProps } from "@/types/catalog.type";

export const getCatalog = async () => {
  const response = await axios.get<CatalogProps[]>("/api/v1/catalog");
  return response.data.data;
};
